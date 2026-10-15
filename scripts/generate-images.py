"""
Generates the raster brand assets that live in public/:

    public/og/en.png            1200x630  English social card
    public/og/zh.png            1200x630  Chinese social card
    public/apple-touch-icon.png 180x180  iOS home-screen icon

The outputs are committed, so a normal build never needs Python. Re-run this
script only when the wordmark, the tagline or the palette changes:

    python scripts/generate-images.py

Requires Pillow (bundled with the DSH runtime) and a CJK-capable font.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"

# Design tokens — keep in sync with src/styles/global.css
INK = (27, 33, 69)        # blue-black running text
BLUE = (29, 63, 216)      # federal blue: structure
PINK = (242, 63, 158)     # fluoro pink: the second pass
PINK_INK = (191, 35, 119) # pink darkened for small text on paper
SUNFLOWER = (251, 201, 37)
PAPER = (248, 241, 222)
MUTED = (122, 116, 106)

FONT_CANDIDATES = {
    "latin": ["C:/Windows/Fonts/segoisb.ttf", "C:/Windows/Fonts/arialbd.ttf"],
    "display": ["C:/Windows/Fonts/ariblk.ttf", "C:/Windows/Fonts/arialbd.ttf"],
    "cjk": ["C:/Windows/Fonts/msyhbd.ttc", "C:/Windows/Fonts/simhei.ttf"],
}


def load_font(kind: str, size: int) -> ImageFont.FreeTypeFont:
    for candidate in FONT_CANDIDATES[kind]:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    raise SystemExit(f"No usable {kind} font found in {FONT_CANDIDATES[kind]}")


def draw_h(draw: ImageDraw.ImageDraw, x: int, y: int, size: int) -> None:
    """The H monogram: the pink pass missed, the blue pass on top."""
    scale = size / 64

    def rect(vx, vy, vw, vh, fill, dx=0.0, dy=0.0):
        draw.rectangle(
            [
                x + (vx + dx) * scale,
                y + (vy + dy) * scale,
                x + (vx + vw + dx) * scale,
                y + (vy + vh + dy) * scale,
            ],
            fill=fill,
        )

    for fill, dx, dy in ((PINK, 2.5, 2.5), (BLUE, 0, 0)):
        rect(18, 18, 6.5, 28, fill, dx, dy)      # left stem
        rect(39.5, 18, 6.5, 28, fill, dx, dy)    # right stem
        rect(18, 28.6, 28, 5.8, fill, dx, dy)    # crossbar


def wrap(draw: ImageDraw.ImageDraw, text: str, font, max_width: int) -> list[str]:
    """Greedy wrap that works for both space-separated and CJK text."""
    lines: list[str] = []
    current = ""

    for char in text:
        trial = current + char
        if draw.textlength(trial, font=font) <= max_width or not current:
            current = trial
        else:
            lines.append(current)
            current = char
    if current:
        lines.append(current)
    return lines


def make_og(locale: str, eyebrow: str, headline: str, legal_name: str) -> Image.Image:
    width, height = 1200, 630
    image = Image.new("RGB", (width, height), PAPER)
    draw = ImageDraw.Draw(image)

    # The sunflower disc, bleeding off the top right, ring missed in pink.
    disc_box = (880, -230, 1330, 220)
    draw.ellipse(disc_box, fill=SUNFLOWER)
    draw.ellipse(
        (disc_box[0] + 12, disc_box[1] + 14, disc_box[2] + 12, disc_box[3] + 14),
        outline=PINK,
        width=5,
    )

    margin = 80
    font_eyebrow = load_font("cjk" if locale == "zh" else "latin", 24)
    font_wordmark = load_font("latin", 34)
    font_headline = load_font("cjk" if locale == "zh" else "display", 66)
    font_small = load_font("latin", 26)
    font_meta = load_font("cjk", 24)

    # Wordmark row
    mark_size = 64
    draw_h(draw, margin, margin, mark_size)
    draw.text((margin + mark_size + 26, margin + 10), "Homecent", font=font_wordmark, fill=INK)

    # Eyebrow + headline block; the headline prints twice, out of register.
    draw.text((margin, 258), eyebrow, font=font_eyebrow, fill=PINK_INK)

    lines = wrap(draw, headline, font_headline, width - margin * 2)
    y = 312
    for line in lines:
        draw.text((margin + 6, y + 5), line, font=font_headline, fill=PINK)
        draw.text((margin, y), line, font=font_headline, fill=BLUE)
        y += 82

    # Footer rule and meta row
    draw.rectangle([margin, 514, width - margin, 517], fill=BLUE)
    draw.text((margin, 540), "hcentlab.com", font=font_small, fill=BLUE)

    legal_width = draw.textlength(legal_name, font=font_meta)
    draw.text((width - margin - legal_width, 542), legal_name, font=font_meta, fill=MUTED)

    return image


def make_touch_icon() -> Image.Image:
    """A full blue ink tile; the paper H lands with its pink pass behind."""
    size = 180
    image = Image.new("RGB", (size, size), BLUE)
    draw = ImageDraw.Draw(image)
    scale = size / 64
    offset = 2.5 * scale

    def rect(vx, vy, vw, vh, fill, dx=0.0, dy=0.0):
        draw.rectangle(
            [
                vx * scale + dx,
                vy * scale + dy,
                (vx + vw) * scale + dx,
                (vy + vh) * scale + dy,
            ],
            fill=fill,
        )

    for fill, dx, dy in ((PINK, offset, offset), (PAPER, 0, 0)):
        rect(18, 18, 6.5, 28, fill, dx, dy)
        rect(39.5, 18, 6.5, 28, fill, dx, dy)
        rect(18, 28.6, 28, 5.8, fill, dx, dy)

    return image


def main() -> None:
    (PUBLIC / "og").mkdir(parents=True, exist_ok=True)

    make_og(
        "en",
        eyebrow="SHENZHEN · SOFTWARE PRODUCT DEVELOPMENT & TECHNICAL SUPPORT",
        headline="Software products, engineered and supported.",
        legal_name="Shenzhen Homecent Trading Co., Ltd.",
    ).save(PUBLIC / "og" / "en.png", optimize=True)

    make_og(
        "zh",
        eyebrow="深圳 · 软件产品开发与技术支持",
        headline="软件产品，从研发到长期支持。",
        legal_name="深圳市宅迅贸易有限公司",
    ).save(PUBLIC / "og" / "zh.png", optimize=True)

    make_touch_icon().save(PUBLIC / "apple-touch-icon.png", optimize=True)

    for name in ["og/en.png", "og/zh.png", "apple-touch-icon.png"]:
        print(f"wrote public/{name}")


if __name__ == "__main__":
    main()

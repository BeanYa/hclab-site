"""
Generates the raster brand assets that live in public/:

    public/og/en.png            1200x630  English social card
    public/og/zh.png            1200x630  Chinese social card
    public/apple-touch-icon.png  180x180  iOS home-screen icon

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
INK = (14, 17, 22)
PAPER = (247, 245, 241)
JADE = (31, 122, 92)
MUTED = (150, 158, 168)
RULE = (44, 50, 59)

FONT_CANDIDATES = {
    "latin": ["C:/Windows/Fonts/segoisb.ttf", "C:/Windows/Fonts/arialbd.ttf"],
    "cjk": ["C:/Windows/Fonts/msyhbd.ttc", "C:/Windows/Fonts/simhei.ttf"],
}


def load_font(kind: str, size: int) -> ImageFont.FreeTypeFont:
    for candidate in FONT_CANDIDATES[kind]:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    raise SystemExit(f"No usable {kind} font found in {FONT_CANDIDATES[kind]}")


def draw_mark(draw: ImageDraw.ImageDraw, x: int, y: int, size: int) -> None:
    """The H monogram, scaled from public/favicon.svg (64x64 viewBox)."""
    scale = size / 64
    draw.rounded_rectangle([x, y, x + size, y + size], radius=12 * scale, fill=PAPER)

    def rect(vx, vy, vw, vh, fill):
        draw.rectangle(
            [x + vx * scale, y + vy * scale, x + (vx + vw) * scale, y + (vy + vh) * scale],
            fill=fill,
        )

    rect(18, 18, 6.5, 28, INK)          # left stem
    rect(39.5, 18, 6.5, 28, INK)        # right stem
    rect(18, 28.6, 28, 5.8, INK)        # crossbar
    rect(18, 49.5, 28, 3, JADE)         # accent rule


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
    image = Image.new("RGB", (width, height), INK)
    draw = ImageDraw.Draw(image)

    margin = 80
    font_eyebrow = load_font("cjk" if locale == "zh" else "latin", 24)
    font_wordmark = load_font("latin", 36)
    font_headline = load_font("cjk" if locale == "zh" else "latin", 68)
    font_small = load_font("latin", 26)
    font_meta = load_font("cjk", 24)

    # Wordmark row
    mark_size = 64
    draw_mark(draw, margin, margin, mark_size)
    draw.text((margin + mark_size + 26, margin + 12), "Homecent", font=font_wordmark, fill=PAPER)

    # Eyebrow + headline block, optically centred in the lower two thirds
    draw.text((margin, 268), eyebrow, font=font_eyebrow, fill=JADE)

    lines = wrap(draw, headline, font_headline, width - margin * 2)
    y = 320
    for line in lines:
        draw.text((margin, y), line, font=font_headline, fill=PAPER)
        y += 84

    # Footer rule and meta row
    draw.rectangle([margin, 512, width - margin, 513], fill=RULE)
    draw.text((margin, 540), "hcentlab.com", font=font_small, fill=JADE)

    legal_width = draw.textlength(legal_name, font=font_meta)
    draw.text((width - margin - legal_width, 542), legal_name, font=font_meta, fill=MUTED)

    return image


def make_touch_icon() -> Image.Image:
    size = 180
    image = Image.new("RGB", (size, size), INK)
    draw_mark(draw=ImageDraw.Draw(image), x=0, y=0, size=size)
    # Full-bleed ink tile with the paper mark centred, iOS masks the corners.
    tile = Image.new("RGB", (size, size), INK)
    tile.paste(image, (0, 0))
    return tile


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

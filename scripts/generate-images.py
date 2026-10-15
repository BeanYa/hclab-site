"""Generate the code-drawn Homecent social cards and touch icon.
Requires Pillow and a CJK-capable system font. Run from any directory.
Site copy is read from src/i18n/ui.ts rather than duplicated here.
"""
from pathlib import Path
import re
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
INK = (24, 37, 30)
GREEN = (37, 107, 72)
LIME = (206, 242, 134)
PAPER = (251, 252, 251)
LINE = (222, 230, 223)
MUTED = (98, 112, 103)
WASH = (242, 246, 243)

def font(size, chinese=False):
    candidates = (["C:/Windows/Fonts/msyhbd.ttc", "C:/Windows/Fonts/simhei.ttf"] if chinese else
                  ["C:/Windows/Fonts/segoisb.ttf", "C:/Windows/Fonts/arialbd.ttf"])
    for name in candidates:
        if Path(name).exists():
            return ImageFont.truetype(name, size)
    raise SystemExit("A matching system font is required.")

def copy(locale, key):
    source = (ROOT / "src/i18n/ui.ts").read_text(encoding="utf-8")
    source = source.split("const en = {", 1)[1].split("/** The key union", 1)[0] if locale == "en" else source.split("const zh: Record<UIKey, string> = {", 1)[1]
    match = re.search(r"'" + re.escape(key) + r"':\s*'([^']*)'", source)
    if not match:
        raise SystemExit("Missing copy: " + key)
    return match.group(1)

def draw_h(draw, x, y, size, color):
    unit = size / 64
    for a, b, w, h in [(17, 15, 8, 34), (39, 15, 8, 34), (17, 28, 30, 8)]:
        draw.rectangle((x+a*unit, y+b*unit, x+(a+w)*unit, y+(b+h)*unit), fill=color)

def make_og(locale):
    zh = locale == "zh"
    image = Image.new("RGB", (1200, 630), PAPER)
    d = ImageDraw.Draw(image)
    for x in range(750, 1200, 24):
        for y in range(30, 630, 24):
            d.ellipse((x,y,x+2,y+2), fill=LINE)
    d.rounded_rectangle((75, 65, 133, 123), 14, fill=GREEN)
    draw_h(d, 75, 65, 58, LIME)
    d.text((150, 70), copy(locale, "site.name"), font=font(35, zh), fill=INK)
    d.text((80, 208), copy(locale, "hero.kicker"), font=font(20, zh), fill=GREEN)
    d.text((75, 263), copy(locale, "hero.title.a"), font=font(65, zh), fill=INK)
    d.text((75, 345), copy(locale, "hero.title.b"), font=font(65, zh), fill=GREEN)
    for y, color in [(380, WASH), (300, PAPER), (220, GREEN)]:
        d.polygon([(980,y-60),(1120,y),(980,y+60),(840,y)], fill=color, outline=LINE if color != GREEN else GREEN, width=2)
        d.line([(840,y),(980,y+60),(1120,y)], fill=LINE, width=2)
    d.line((80, 520, 1120, 520), fill=LINE, width=2)
    d.text((80, 550), "hcentlab.com", font=font(22), fill=GREEN)
    legal = copy(locale, "site.legalName")
    legal_font = font(19, zh)
    d.text((1120-d.textlength(legal,font=legal_font), 553), legal, font=legal_font, fill=MUTED)
    return image

def main():
    (PUBLIC / "og").mkdir(exist_ok=True)
    for locale in ("en", "zh"):
        make_og(locale).save(PUBLIC / "og" / (locale + ".png"), optimize=True)
    icon = Image.new("RGB", (180,180), GREEN)
    draw_h(ImageDraw.Draw(icon), 0, 0, 180, LIME)
    icon.save(PUBLIC / "apple-touch-icon.png", optimize=True)
    print("Generated EN/ZH social cards and touch icon.")

if __name__ == "__main__":
    main()

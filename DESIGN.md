---
name: Homecent
description: 深圳宅迅的企业官网 —— 一套套印永远差半档的 riso 双色印刷文件（暖纸、联邦蓝、荧光粉、葵黄）
colors:
  paper: "#f8f1de"
  paper-deep: "#efe4c8"
  ink: "#1b2145"
  blue: "#1d3fd8"
  blue-deep: "#142c9c"
  pink: "#f23f9e"
  pink-ink: "#bf2377"
  sunflower: "#fbc925"
  violet: "#5b34d4"
  on-blue: "#fdf6e3"
  on-blue-soft: "#ccd6f6"
  line: "rgb(27 20 69 / 22%)"
typography:
  display:
    fontFamily: "'Archivo Black', 'Arial Black', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.9rem, 0.5rem + 9.8vw, 9.75rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "'Archivo Black', 'Arial Black', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 1.05rem + 2.5vw, 3.1rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Archivo Black', 'Arial Black', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 1.1rem + 0.9vw, 1.8rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  none: "0"
  circle: "50%"
spacing:
  margin: "clamp(1rem, 2.4vw, 2.5rem)"
  gutter: "clamp(0.75rem, 1.4vw, 1.5rem)"
  grid-gap: "2rem"
  band: "clamp(5rem, 3rem + 5vw, 9.5rem)"
  head-h: "4.75rem"
  mis: "0.375rem"
  mis-em: "0.04em"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem"
    height: "2.875rem"
  button-primary-hover:
    backgroundColor: "{colors.blue-deep}"
  button-primary-active:
    backgroundColor: "{colors.blue-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.blue}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.blue-deep}"
  link-text:
    textColor: "{colors.blue}"
  tab-active:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-blue}"
  spec-table:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
---

# Design System: Homecent（宅迅）

## Overview

**Creative North Star: "Risograph Overprint —— 一份第二印永远差半档套印的 riso 印刷文件"**

整个网站被构建为一套 riso 孔版印刷的文件组：暖纸底、两色专墨（联邦蓝印结构与本地文字，荧光粉印信号与错位第二印）、葵黄色场、几何印张，以及一层 5.5% 的全局纸纹。世界的核心机制是**套印失准**：每个关键元素背后都有一次没对准的第二印 —— 边框错位、文字重影、硬边错位投影 —— 访客一触碰（hover / focus），第二印就向套准滑动；按下即完全合准。密度克制（约 4/10）、动效一次性（约 3/10）、形式语言全部来自"印刷工单 / 规格表 / 印章"这套车间隐喻。

本方向是 challenger 卡"risograph-web-system"（impeccable 方向骰 seed `894b03be`），由客户在定向下亲自选中，替换了此前的"type and nothing else"旧世界（骨白 `#f1f2ef` / 墨 `#101418` / 玉绿 `#0f6b52`）。AGENTS.md §6 与本文件同步描述本世界；规范性规则以 `src/styles/global.css` 顶部横幅为准。

硬约束（仍然生效，来自 PRODUCT.md / AGENTS.md）：零客户端 JS（菜单是 `<details>`，选择器是 radio + `:has()`，动效是 CSS view-timeline）；所有文案单源 `src/i18n/ui.ts`，每语言单脚本；唯一转化通道是 `mailto:`；找到的照片永不冒充客户资产，必须就地署名。

**Key Characteristics:**

- 双墨分工：蓝印结构，粉印他者，葵黄印色场，violet 只活在两墨交叠处（`::selection`）
- 签名语法：`.press` 错位边框第二印、`.misprint` 双墨文字重影 —— 触碰合准，是全站唯一的"深度"语言
- 展示字体为自托管 Archivo Black（非系统展示字），正文系统 sans；ZH 页 display 以系统 900 weight 回退
- 照片双色调：蓝底 + `lighten` 混合 + 灰度滤镜 + 粉色错位框
- 深度即错位：无模糊阴影、无渐变表面，只有实心错位印
- 全局纸纹：feTurbulence 噪点瓷砖，0.055 透明度 multiply，是"主题世界的纹理"
- 动效只动 transform/opacity，`prefers-reduced-motion` 下全降级且内容全可见

## Colors

一句话：暖纸上的三色专墨加一套蓝上反白 —— 低饱和纸底承担所有面积，高饱和墨色只承担结构与信号。

### Primary

- **联邦蓝 Federal Blue** (`#1d3fd8`，hover 态 `--blue-deep` `#142c9c`)：世界的结构墨。标题与品牌字的第二行、链接与下划线按钮、2px 印刷边框、导航规则线、Reach 收尾墨段（整段蓝底）、蓝色墨底上的反白文字容器。蓝在纸上约 6.8:1，是唯一可承担正文的彩色墨。
- **蓝黑墨 Riso Black** (`#1b2145`)：这世界的"黑"其实是蓝黑。全部正文、表头下的 2px 分隔、行规则线的基色、页脚墨段背景都由它承担。

### Secondary

- **荧光粉 Fluoro Pink** (`#f23f9e`)：信号墨。`.press`/`.misprint` 的全部错位第二印（含 Hero 名字的重影 —— 它是"另一个市场的墨"，印在可见文字之下）、错位投影、照片错位框、说明文字里的署名链接、caption 链接 hover。**原色粉不可用于小字**（对比度不足）——小字用下一档。
- **印粉 Pink Ink** (`#bf2377`)：粉压深一档，纸面上 ≥ 4.5:1，用于小号文字（服务条款的破折号前缀、caption 链接常态色）。这是对比度校准的产物，不是新色相。

### Tertiary

- **葵黄 Sunflower** (`#fbc925`)：最活的墨，只做"场"不做"字色"（例外：Reach 大地址与页脚品牌名等 display 大字）。Hero 右上出血圆盘、工单勾选方块、选择器展开面板、规格表题头条、服务行 hover 高亮、墨底上的强调链接。
- **套印紫 Overprint Violet** (`#5b34d4`)：粉 × 蓝的交叠色，全站只出现在一个地方 —— `::selection`（紫底纸字）。它不是可用色相，是套印物理规律的纪念。

### Neutral

- **暖纸 Warm Paper** (`#f8f1de`)：页面底色，`theme-color` 同值。刻意偏暖低饱和，不是黄奶油。
- **纸阶 Paper Deep** (`#efe4c8`)：纸深一档的色场，用于整段换底（About 原则段）与 hover 洗色（ghost 按钮、选择器 tab）。
- **蓝上纸白 On-Blue** (`#fdf6e3`)：蓝墨段上的正文色（纸色调白，不是纯白）。
- **蓝上次白 On-Blue Soft** (`#ccd6f6`)：蓝墨段上的次级文字（Reach 脚注、页脚微标签）。
- **行线 Line** (`rgb(27 20 69 / 22%)`)：规格表数据行之间的 1px 印刷行线。只许出现在表格内部，不许当页面分隔线。

### Named Rules

**两墨守恒规则。** 蓝印一切结构性元素；粉只印"他者"——信号、错位第二印、名字重影。粉永远不做正文色；小字用 `--pink-ink`，原色粉只出现在大字与大标记上。

**紫在交叠处规则。** `--violet` 只用于 `::selection`（套印交叠的隐喻），禁止作为表面、边框或文字色出现。

**墨位分节规则。** 区段之间靠换墨分隔（纸 → 纸阶 → 全蓝墨段 → 蓝黑墨段）或靠 `--band` 大留白，不靠发丝分隔线。`--line` 只许印在表格行间。

## Typography

**Display Font:** Archivo Black（自托管 `@fontsource/archivo-black`，回退 `'Arial Black'` → 系统 sans）
**Body Font:** 系统 sans 栈（含 PingFang SC / Microsoft YaHei / Noto Sans SC）
**Label/Mono Font:** 无 monospace —— 本世界任何地方都不出现等宽字。

**Character:** 一枚又黑又钝的版画展示字压在安静的系统正文上，像工单上的盖章对上表格里的手写体。取舍记录：原方向指定 Karton Bold，非免费 webfont，落地时换成气质最近的 Archivo Black。

### Hierarchy

- **Display** (Archivo Black 400，`clamp(2.9rem→9.75rem)`，行高 0.94)：只给当前语言的一个名字 —— EN 页 `HOMECENT`、ZH 页 `宅迅`（客户决定，2026-10-15；另一文字的名字只存在于语言开关、hreflang 与 Hero 的隐藏标注）。全大写、-0.015em、`mix-blend-mode: multiply`（压过葵黄圆盘时蓝变绿，交叠图在替品牌干活）。
- **Headline** (Archivo Black 400，`clamp(1.8rem→3.1rem)`，行高 1.02，全大写，-0.015em)：区段标题、页题（`--t-xl` `clamp(2.3rem→4.5rem)` 同声音）、服务行标题、规格表题头、页脚品牌名与邮箱。两行式标题第二行换墨（服务段第二行蓝、proof 段第二行粉）。
- **Title** (Archivo Black 400，`clamp(1.3rem→1.8rem)`，行高 1.1)：工单 tab、服务页条目标题、承诺印章标题。
- **Lede** (系统 sans 400，19px，行高 1.6，max 62ch；hero 支句 34ch；Reach 导语 `clamp(1.6rem→2.7rem)` 26ch)：段首导语与立场句。
- **Body** (系统 sans 400，16px，行高 1.6，prose/caption 68ch)：全部运行文本、表格、链接。
- **Label** (系统 sans 700，14px，全大写，+0.08em，蓝或 on-blue-soft)：工单微标签 —— hero 事实项（前置 0.55rem 葵黄方块）、选择器 legend、表头、页脚栏目题。这是印刷车间的"勾选项"，不是旧世界的 eyebrow。

### Named Rules

**一文字一名字规则。** Hero 只印阅读语言的名字（客户决定，2026-10-15）：EN 页蓝印 `Homecent`、ZH 页 `宅迅`（`.hero__name--han` 关大写、零字距）。名字之下是自身的粉墨重影 —— 另一个市场的墨，错过半档；hover / focus-within 时合准。另一文字的名字不进视觉，只留在 `<span class="visually-hidden" lang>`、语言开关与 hreflang 里。

**大写只塑造拉丁规则。** `text-transform: uppercase` 只作用于拉丁展示位；汉字展示位显式关闭（`.hero__name--han`、zh 块中 `letter-spacing: 0`），负字距与紧行高是拉丁习语，ZH 页全部撤回（正文行高 1.7，折行展示行高 1.12–1.15，display 槽位系统 900 weight 回退，`font-synthesis-weight: none` 禁止假粗体）。

## Layout

单栏文档流 + 居中容器。`.wrap`：`max-width: 104rem`，左右 `--margin: clamp(1rem, 2.4vw, 2.5rem)`。区段垂直节奏由 `--band: clamp(5rem, 3rem + 5vw, 9.5rem)` 独占 —— 区段间距永远大于区段内任何间距。通用 `.grid` 缝隙 2rem；栏数由内容网格自行 reshape（首页服务索引 7fr/5fr 底对齐，选择器 5fr/7fr 顶对齐，intro 4 栏，proof 双表 2 栏）。

断点三档：**48rem**（hero 事实项 2 列、intro 2 栏）、**62rem**（桌面导航/语言开关/CTA 出现、`<details>` 菜单退场、双图带、页脚 2 栏）、**75rem**（intro 4 栏、proof 双表并排）。移动端优先，一切先单栏。

吸顶页头高 `--head-h: 4.75rem`，纸底 + 2px 蓝黑底边，其下 6px 处一条粉色第二印 —— 全页第一次套印失准。文字行长上限：lede 62ch、prose/caption 68ch、hero 支句 34ch、Reach 导语 26ch、页题 22ch。

### Named Rules

**Band 分节规则。** 垂直留白只有一个刻度 `--band`；需要更重的分隔时换墨（整段 `--paper-deep`、`--blue`、`--ink` 底），不发明第二个间距刻度。

## Elevation & Depth

本系统没有模糊阴影，一个都没有。深度的唯一语言是**印刷错位**：`--mis: 0.375rem`（块级第二印错位）与 `--mis-em: 0.04em`（文字重影错位）。三种表达：

- **错位边框第二印**：`.press::after` 在元素后 2px 粉框平移 `--mis`；hover 减到 1/2.5，active 归零。
- **实心错位投影**（无 blur 的 box-shadow，本质是被压平的错位印）：规格表/承诺章 `0.375rem 0.375rem 0 0` 粉；移动端菜单面板 `6px 6px 0` 粉；选择器展开面板 `5px 5px 0` 蓝。
- **文字重影**：`.misprint__ghost` 以 `--mis-em` 藏在文字后一层（z-index -1，永在文字之下）；hero 名字 hover 合准；404 标题以 0.14em/0.1em 宽幅错位且永不合准。

三层质感由两个低层装置承担：`.halftone` 网点场（`radial-gradient` 7px 网点，opacity 0.1，z-index -1 压内容之下，目前只铺在 Reach 墨段）与全局纸纹（`body::after` feTurbulence 240px 瓷砖，opacity 0.055，multiply，z-index 80，pointer-events none）。取舍记录：纸纹刻意只设全局一档、弱到不碰可读性 —— 它是"主题世界的纹理"，不是可调参数。

### Named Rules

**错位即深度规则。** 禁止 blur 阴影、禁止渐变表面（网点场与纸纹是印刷工艺，不是渐变装饰）。任何"浮起"都应表达为一次没对准的第二印。

## Shapes

全站直角。radius 只有两个合法值：**0**（一切盒子、按钮、表格、面板）与 **50%**（仅葵黄圆盘与几何印章 chop）。印刷规则线宽 2–3px，实色无渐变：2px（页头底线、表格边框、服务行分隔、语言开关边框）、3px（intro 栏顶线、照片错位框、focus 外圈线宽）。错位框是形状语言的一部分：照片永远是"蓝色墨底 + 灰度照片 + 向右下错位 0.5rem 的 3px 粉框"。图标系统不存在 —— Process 与服务页的"印章 chop"是纯几何 SVG（圆、三角、半圆、方框、圆环），轮换三色墨。

### Named Rules

**直角承印规则。** 新表面不加圆角；需要柔和时用纸阶色场，不用 radius。

## Components

### 按钮

- **Shape:** 直角（radius 0），`min-height: 2.875rem`，padding `0.75rem 1.25rem`，700 weight，+0.01em。
- **Primary** (`.btn.press`)：蓝底 `--blue` / 纸白字 `--on-blue`，身后 2px 粉框错位 `--mis`。hover 蓝加深 `--blue-deep` 且粉框滑向套准；active 整钮位移 2px、粉框归零合准。全站转化皆此钮（mailto）。
- **Ghost** (`.btn--ghost`)：透明底 + `inset 0 0 0 2px` 蓝描边，第二印换葵黄；hover 纸阶底 + 深蓝字。
- **Focus:** 全局 `:focus-visible` 3px 蓝圈 offset 3px；墨底区（`.on-ink`、`.reach`）换葵黄圈。

### 链接

蓝字 500 weight + 2px 粉色下划线（offset 0.24em）；hover 字加深、线加粗到 3px。墨底上：纸白字粉线，hover 葵黄。caption 内署名链接例外：`--pink-ink` 常态 1px 下划线，hover 原色粉。当前页导航项以粉色下划线标记（非加粗）。

### 页头 / 导航

吸顶纸底条，2px 蓝黑底线 + 底下错位 6px 的粉色第二印。品牌字用 display 面（hover 变蓝）。语言开关是 2px 蓝框小方钮，当前语言蓝底反白。移动端 `<details>` 菜单（零 JS）：面板纸底 2px 蓝黑边 + `6px 6px 0` 粉色实心错位投影，绝对定位在摘要钮下方。

### Hero —— 单名套印

右上葵黄圆盘出血（`clamp(16rem→40rem)`，自身带错位 0.5rem/0.625rem 的 3px 粉环）。只印一个名字：本地文字蓝、带自身粉墨重影，`mix-blend-mode: multiply` 压盘变色；另一文字的名字不进视觉（隐藏标注带 `lang`）。名字 hover/focus-within 时重影合准 —— 全站签名交互。脚部：支句、四项工单事实（葵黄方块 + 大写蓝微标签 + dd 500 weight）、`.btn.press`。载入编排：圆盘 `spot-in`，名字 `press-settle`（从 0.35em 错位落位），脚部 `name-in`。

### 选择器（"Where are you now?" 工单）

radio + `:has()`，零 JS。legend 是大写蓝微标签；tab 用 display 面排成 2px 蓝黑行线之间的票根，选中 tab 蓝底反白；面板以 `grid-template-rows 0fr→1fr` 展开，面板体葵黄底 + `5px 5px 0` 蓝色实心错位投影，内含"第一步 / 需要你"两条（`<b>` 蓝）与 `.btn.press` mailto。无 `:has()` 支持时全部面板常开、tab 退化为标题 —— 这就是无 JS 回退。

### 服务索引 / 服务页条目

首页：`--paper-deep` 整段色场，两行大标题（第二行蓝），行列表 2px 蓝黑行线、hover 整行葵黄高亮，桌面 4fr/5fr/3fr 基线三栏（标题/摘要/条款右对齐）。服务页：每条 `.svc` 顶 2px 蓝黑线 + 几何 chop（三墨轮换、带 45°/90° 旋转），summary 蓝 600，条款列表破折号用 `--pink-ink`。

### 规格表 `.ptable`

信任的载体：纸底、2px 蓝边框、`0.375rem 0.375rem 0 0` 粉色错位投影；题头条葵黄底 display 面 + 2px 蓝黑底线；表头大写蓝微标签；数据行之间 1px `--line` 行线（全站唯一允许的细线）。About 公司记录、Contact 联系方式、Proof 承诺表/本站实测表共用此组件。

### 承诺印章 `.commitment`

纸底 + 2px 蓝边框 + 粉色错位投影的小印章卡，display 面标题，48rem 起 2 列，铺在 `--paper-deep` 色场上。

### 照片带 `.band` / 影片 `.clip`

双色调配方（不可改动各步）：容器蓝墨底 `--blue` → 图 `mix-blend-mode: lighten` + `filter: grayscale(1) contrast(1.12) brightness(1.06)` → 3px 粉框向右下错位 0.5rem（hover 收到 0.125rem）。署名 caption 紧随其下（14px，`--pink-ink` 链接）。影片 16/9，`prefers-reduced-motion` 下 `<video>` 换为 poster 静帧。

### Reach 收尾墨段

每页最后一段：整段蓝底 + halftone 网点。导语反白 26ch；邮箱地址 display 面、`clamp(1.6rem→4.25rem)`、葵黄色、hover 变粉 —— 页面上最大的可点目标。脚注 2px 38% 反白顶线，次级文字 `--on-blue-soft`。

### 页脚（版权页）

蓝黑墨段：葵黄 display 品牌名、display 面大邮箱（hover 粉）、大写 `--on-blue-soft` 栏目题、纸白链接（hover 葵黄）、照片署名清单（葵黄下划线链接）、法务行。ICP 槽位留空（事实未确认，禁止编造）。

### 404

"从未套准的一页"：标题 `content: attr(data-text)` 粉色重影以 0.14em/0.1em 宽幅错位，**永不**合准 —— 这个页面的第二印就是坏的。配 lede 与 `.btn.press` 回首页。

### 刻意未用（留白清单，非缺陷）

印刷边角 artefact（色条 / 裁切标记 / 套准标记）、墨场纹理分档（现全局单一 0.055 档）、几何 chop 的密度变化。三者均已评估并刻意搁置；引入前先推翻本清单。

## Do's and Don'ts

### Do:

- **Do** 只用 `src/styles/global.css` 顶部 token 块里的颜色与字号；token 块之下不许出现裸 hex。
- **Do** 给关键元素（按钮、卡片、表格、照片）配错位第二印：边框平移 `--mis` 或实心投影 `var(--mis) var(--mis) 0 0 var(--pink)`，hover 时滑向套准。
- **Do** 动效只动 transform/opacity，缓动用 `--ease-settle: cubic-bezier(0.22, 1, 0.36, 1)`，一次性，`prefers-reduced-motion` 下全部关停且内容全可见。
- **Do** 保持 `--timeline-view` 自定义属性传递 `view()`：压缩器会把 `animation-timeline` 并进 `animation` 简写导致 Chrome 整条丢弃、页面静止 —— 不要"整理"它。
- **Do** 新页面走既有区段语法：`.wrap` + `--band` 分节 + 墨位换底 + `.ptable` 承载可核对的事实 + Reach 墨段收尾。
- **Do** 照片一律过双色调配方（蓝底 + lighten + grayscale + 粉错位框）并就地署名，脚注列全。
- **Do** 中文页走 zh-CN 排版块：display 槽 900 weight、去负字距、行高放宽（正文 1.7）。

### Don't:

- **Don't** 使用模糊阴影、渐变表面、玻璃拟态、圆角（0 与 50% 之外没有 radius）；深度只能来自错位第二印。
- **Don't** 用原色粉 `--pink` 排小字（对比不足）—— 小字用 `--pink-ink`；葵黄不做正文色；violet 只许出现在 `::selection`。
- **Don't** 用发丝线分隔区段；区段靠换墨或 `--band`，`--line` 只许印在表格行间。
- **Don't** 引入客户端 JS、monospace、图标库或 emoji 图标 —— 菜单用 `<details>`，选择器用 radio + `:has()`，图形只有几何 chop SVG。
- **Don't** 把 `animation-timeline: var(--timeline-view)` 合并回 `animation` 简写，也不要"清理"该自定义属性。
- **Don't** 在运行文案里混排两种文字（每语言单脚本），也不要发明未确认的公司事实（地址、电话、备案号、数字、客户 logo）。
- **Don't** 把图库照片呈现为客户自己的产品、房间、人物或团队。

# Prompt tạo ảnh cho deck AutoCAD MCP

Mỗi slide có sẵn hình vẽ minh hoạ (SVG). Muốn có ảnh "điện ảnh" như deck mẫu, tạo ảnh bằng công cụ AI tạo ảnh
(Gemini, ChatGPT, Midjourney…) theo prompt dưới đây, rồi lưu vào `slides/assets/` **đúng tên file**.
Slide tự nhận ảnh khi có file (hỗ trợ `.webp`, `.jpg`, `.png`). Không có file thì slide giữ hình vẽ SVG.

**Phong cách chung (dán vào cuối mọi prompt):**
> cinematic photography, deep navy blue and warm gold color grade, soft volumetric light, golden dust particles,
> shallow depth of field, high detail, 16:9, no text, no watermark, no logos

## Ảnh nền toàn slide (1920×1080, để trống bên TRÁI cho chữ)

| File | Slide | Prompt |
|---|---|---|
| `s01.webp` | 01 · Bìa | Vietnamese construction engineer at a desk at night, glowing holographic AutoCAD floor plan floating above the desk with a few doors circled in red light, large window behind showing a city skyline with tower cranes at blue hour, subject on the right third, dark empty space on the left |
| `s02.webp` | 02 · Vấn đề | Overwhelmed quantity surveyor's desk covered in stacks of printed architectural blueprints, calculator, sticky notes, laptop with a spreadsheet, late night office lamp, messy and tense mood, dark navy shadows |
| `s03.webp` | 03 · Giải pháp | Clean modern engineering office, large monitor showing a blueprint with glowing red circles and a chat panel, warm gold rim light, calm and confident mood, very dark background |
| `s04.webp` | 04 · Demo | Close-up over-the-shoulder view of an engineer typing a question in Vietnamese into a chat on a laptop, blueprint on screen, bokeh of construction site lights through the window, dark navy |
| `s05.webp` | 05 · Công nghệ | Abstract layered glass panels stacked vertically with glowing gold circuit lines and faint blueprint grid, data flowing upward, dark navy space |
| `s07.webp` | 07 · Bằng chứng | Quality inspection: engineer with a hard hat comparing a printed blueprint to a tablet on a construction site at golden hour, steel rebar and concrete columns, navy sky |
| `s08.webp` | 08 · Thị trường | Aerial view of a Vietnamese city with many high-rise buildings under construction, tower cranes, dusk, gold city lights, navy sky |
| `s09.webp` | 09 · Lộ trình | Long straight road leading toward a modern city skyline at dawn, gold light on the horizon, construction cranes, sense of journey |
| `s10.webp` | 10 · Kết | Completed modern building at night with warm gold lighting, a construction crane in the background, a small team of engineers looking at it from the right side, empty dark sky on the left |

## Ảnh trong 3 thẻ ở slide 02 (tỉ lệ khoảng 16:9, chủ thể ở giữa)

| File | Thẻ | Prompt |
|---|---|---|
| `p1.webp` | Dò tay từng nét | Extreme close-up of a magnifying glass over a dense, cluttered CAD drawing printout with thousands of tiny lines and symbols, gold lamp light |
| `p2.webp` | Quy ước mỗi nơi một kiểu | Two different blueprint sheets side by side with confusing, different annotation styles, a puzzled engineer's hand pointing at a symbol, navy tones |
| `p3.webp` | AI tổng quát đoán số | A glitched, distorted chatbot screen showing a wrong number, digital noise and red error glow, dark navy office |

## Lưu ý
- Ảnh do AI tạo **không phải ảnh thật** của dự án. Nếu deck đi thi hoặc gọi vốn, nên ghi "ảnh minh hoạ tạo bằng AI" ở chân slide.
- Nén ảnh `.webp` dưới khoảng 400 KB mỗi file để deck tải nhanh trên GitHub Pages.
- Logo TDU: `slides/assets/logo-tdu.png` (lấy từ deck mẫu OPC của trường).

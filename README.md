# Monroe Elementary — Site Package

A set of static HTML pages designed for local editing and import into Elementor.

## Pages
1. **Our School and Programs.html** — About page
2. **Before and After School Programs.html**
3. **Faculty and Staff.html**
4. **PTA.html**
5. **Family Liaisons.html**
6. **Calendar.html**
7. **Event Template.html** — duplicate for each new event
8. **Community Hub.html**

All pages share:
- The same masthead with the "Our School & Programs" dropdown
- The same footer
- The same color tokens (`--cream`, `--monarch`, `--cyan`, etc.) and font stack (Playfair Display, Outfit, ZCOOL XiaoWei)
- The `assets/` and `assets/faculty-staff/` image folders

---

## Editing locally

1. Unzip the package.
2. Open any `.html` file in your browser to preview.
3. Open the same file in a text editor (VS Code, Sublime, BBEdit) to edit copy, swap photos, change colors.
4. **Color tokens** live in the `:root { … }` block near the top of each file's `<style>` tag — change one value to recolor the whole page.
5. **Photos** live in `assets/` (general) and `assets/faculty-staff/` (portraits). Swap a file with the same name and the page picks it up automatically.

---

## Installing into Elementor (WordPress)

There are three ways to bring these pages into Elementor, easiest first.

### Option A — Quickest: HTML widget per page
Best when you want pixel-perfect rendering without rebuilding in Elementor.

1. In WordPress, **Pages → Add New**, give it the page title (e.g. "Faculty & Staff").
2. Click **Edit with Elementor**.
3. Set the page template to **Elementor Canvas** (Page Attributes panel) so Elementor's header/footer don't double up with ours.
4. Drag in a single **HTML widget** that spans the whole canvas.
5. Open the matching `.html` file in your editor. Copy **everything inside `<body>…</body>`** (not the `<html>` / `<head>` wrappers).
6. Paste into the Elementor HTML widget.
7. In Elementor's **Site Settings → Custom CSS**, paste **the contents of the `<style>` block** from the head of your `.html` file (only needs to be done once if all pages share the same CSS — copy from `Our School and Programs.html`).
8. Add the Google Fonts link to **Site Settings → Custom Code → `<head>`**:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&family=Outfit:wght@300;400;500;600;700;800;900&family=ZCOOL+XiaoWei&family=Noto+Serif+TC:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
   ```
9. Upload the contents of `assets/` to your WordPress **Media Library** (or via FTP to `wp-content/uploads/monroe/`) and update image paths in the pasted HTML from `assets/...` to the new URL.
10. Update inter-page links from `Faculty and Staff.html` → `/faculty-staff/` (the WordPress slug for that page).

Repeat for each page.

### Option B — Cleanest: Elementor blocks
Best when you want WordPress users to be able to edit content in Elementor's UI long-term.

1. Set up your Elementor **Theme Builder** header/footer with the dropdown nav and footer markup (one-time setup).
2. For each page, build sections in Elementor that mirror the HTML — use Elementor's Section + Inner Section structure to recreate the grids.
3. Use Elementor's **Theme Style → Typography** to set Playfair Display for headings and Outfit for body.
4. Use the HTML widget only for the small pieces Elementor can't easily recreate (e.g. the bunting SVG generator, the rice-paper grain script).

This is more work upfront but gives content editors a normal Elementor experience afterward.

### Option C — Hybrid (recommended)
1. Build the **masthead + footer** in Elementor Theme Builder (Option B).
2. Build the **body of each page** as one HTML widget (Option A).

This gives you editable global chrome plus pixel-perfect page bodies. About a day of setup for all 8 pages.

---

## Assets
- `assets/monroe-logo.png` — main logo
- `assets/faculty-staff/*.jpg|png|webp` — portrait photos
- `assets/chinese-lattice-1.png`, `chinese-flower-*.png`, `chinese-half-circles.png` — decorative SVG/PNG overlays
- `assets/schoolyard.jpg`, `community-*.jpg`, `mural-*.jpg`, `kids*.jpg|png|jpeg` — photography

## Color tokens
```
--cream    #fdf8f2   warm school-paper background
--cream2   #f5ede0   slightly darker cream
--ink      #1a1410   near-black text
--monarch  #e26a1f   primary CTA orange
--cyan     #2bb8d4   Spanish Immersion accent
--marigold #f0a82e   Chinese Biliteracy accent
--magenta  #d83a6d   ELD accent
--poppy    #d8392e   pin / accent red
--jade     #4d8c5c   garden / sustainability green
--plum     #7c3f88   secondary accent
```

## Fonts
- **Playfair Display** — headlines, italic emphasis
- **Outfit** — body text, buttons, labels
- **ZCOOL XiaoWei** — Chinese characters in the language switcher

## Questions
Edit any file in a text editor — every section is commented. The most common edits (copy, photos, colors) are all near the top of each file.

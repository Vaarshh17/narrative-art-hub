# Where to put your photos

Drop your images into this folder using these exact filenames. Once uploaded,
they will appear automatically in the portfolio.

## Hero section (your photos)
- `hero-bg.jpg` — large cinematic background image (1920x1080+, landscape).
  Recommended: a striking wide photo of you, or an aesthetic abstract shot.
- `hero-portrait.jpg` — portrait of you that appears on the right side of the
  hero (any portrait orientation, ~800x1000).
- `avatar.jpg` — small headshot used in the top-right nav (square, ~200x200).

## Per-section / per-card cover images
Each item in `src/data/portfolio.ts` references an `image` field. The
placeholder images currently point to Unsplash. To use your own, drop files
here (e.g. `grab.jpg`, `umhack-2026.jpg`, `loreal.jpg`, etc.) and update the
corresponding `image` value to `"/src/assets/portfolio/grab.jpg"` — or just
replace the file names already referenced in `portfolio.ts`.

## Project detail page galleries
Each project detail page shows a gallery — add up to 5 images per project and
list them under the `gallery` array in `portfolio.ts`.

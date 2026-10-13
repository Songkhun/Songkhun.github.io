---
title: "Phan / Chiang Rai 3D MT model: an animated tour of the crust"
excerpt: "A 90-second animation of a 3D magnetotelluric resistivity model beneath Phan, Chiang Rai, northern Thailand <br/><img src='/images/phan_chiangrai_3d_mt.jpg'>"
collection: portfolio
---

A 90-second animation of a three-dimensional magnetotelluric (MT) resistivity model of the
crust beneath the Phan basin, Chiang Rai, northern Thailand. The model was inverted with
WSINV3DMT from 40 MT stations (52 × 52 × 44 cells, RMS 1.97); the animation shows a
160 × 160 km window down to 36 km depth, at true spatial proportions.

[View the project on GitHub](https://github.com/Songkhun/Phan-ChiangRai-3D-MT) ·
[Watch the video (MP4, 12.9 MB)](https://github.com/Songkhun/Phan-ChiangRai-3D-MT/raw/main/Phan_ChiangRai_3D_MT_model.mp4)

### What it shows

- **The survey surface**: 40 MT stations and the mapped fault traces over the Phan area
- **Intersecting sections**: the model opened along two perpendicular vertical planes
- **Descending through the crust**: a horizontal slice sweeping from the surface to 36 km
- **Moving cross-sections**: east–west, then north–south, through the whole model
- **The 10 Ω·m isosurface**: the three-dimensional shape of the low-resistivity regions
  between 3.5 and 36 km depth
- **Everything together**: surface context, sections and isosurface in the closing view

A side panel keeps a plan-view map with stations, faults and the current section line, and the
logarithmic resistivity scale from 0.1 Ω·m (conductive, warm) to 10,000 Ω·m (resistive, cool).

### How it is made

- **Rendered on the CPU.** Every frame is drawn with NumPy and Pillow in an orthographic
  projection, with PyVista only for the isosurface, so it runs headless with no OpenGL context.
- **Original cell values on the slices.** Sections show the inverted resistivity cell by cell;
  only the isosurface is interpolated (cell-to-point averaging in log10 resistivity).
- **Checked against MATLAB.** Station positions read from the WSINV3DMT data file are compared
  with the original MATLAB station file (agreement to 10⁻¹¹ m) before anything is drawn.
- **Reproducible.** The script writes its full settings to JSON, and the finished MP4 is decoded
  frame by frame to confirm 2700 frames at 1920 × 1080, 30 fps.

The image above is the closing frame: perpendicular sections, the 10 Ω·m isosurface, stations and
fault traces, with the survey map and colour scale on the right.

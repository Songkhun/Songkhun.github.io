---
title: "Kanchanaburi 3D MT model: the first MT crustal structure in Thailand, animated"
excerpt: "A 90-second animation of the first 3D magnetotelluric resistivity model of the crust in Thailand, beneath Kanchanaburi <br/><img src='/images/kanchanaburi_3d_mt.jpg'>"
collection: portfolio
---

A 90-second animation of the first three-dimensional magnetotelluric (MT) resistivity model of
the crust in Thailand, beneath Kanchanaburi province in the west of the country. The model was
inverted with WSINV3DMT from 39 MT stations (80 × 80 × 37 cells); the animation shows a
160 × 160 km window down to 36 km depth, at true spatial proportions.

[View the project on GitHub](https://github.com/Songkhun/Kanchanaburi-3D-MT) ·
[Watch the video (MP4, 18.1 MB)](https://github.com/Songkhun/Kanchanaburi-3D-MT/raw/main/Kanchanaburi_3D_MT_model.mp4)

A companion animation of the Phan / Chiang Rai model is in the
[Phan-ChiangRai-3D-MT](https://github.com/Songkhun/Phan-ChiangRai-3D-MT) repository.

### What it shows

- **The survey surface**: 39 MT stations across the Kanchanaburi area
- **Surface context**: fault traces, the reservoirs and the province boundary over the stations
- **Intersecting sections**: the model opened along two perpendicular vertical planes
- **Descending through the crust**: a horizontal slice sweeping from the surface to 36 km
- **Moving cross-sections**: east–west, then north–south, through the whole model
- **The 10 Ω·m isosurface**: the three-dimensional shape of the low-resistivity regions
  between 3.5 and 36 km depth
- **Everything together**: surface context, sections and isosurface in the closing view

A side panel keeps a plan-view map with stations, faults, reservoirs and the current section
line, and the logarithmic resistivity scale from 0.1 Ω·m (conductive, warm) to 10,000 Ω·m
(resistive, cool).

### How it is made

- **Rendered on the CPU.** Every frame is drawn with NumPy and Pillow in an orthographic
  projection, with PyVista only for the isosurface, so it runs headless with no OpenGL context.
- **Original cell values on the slices.** Sections show the inverted resistivity cell by cell;
  only the isosurface is interpolated (cell-to-point averaging in log10 resistivity).
- **Checked against MATLAB.** Station positions read from the WSINV3DMT response file are
  compared with the original MATLAB station file (agreement to about 5 m) before anything is drawn.
- **Reproducible.** The script writes its full settings to JSON, and the finished MP4 is decoded
  frame by frame to confirm 2700 frames at 1920 × 1080, 30 fps.

The image above is the closing frame: perpendicular sections, the 10 Ω·m isosurface, stations,
fault traces and reservoir outlines, with the survey map and colour scale on the right.

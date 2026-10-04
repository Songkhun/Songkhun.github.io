---
title: "GroundWater Viewer: well logs in map, section and 3-D"
excerpt: "Interactive viewer for groundwater well logs, in one self-contained HTML file <br/><img src='/images/groundwater_viewer.jpg'>"
collection: portfolio
---

A browser tool for exploring groundwater well logs across Kanchanaburi: find a well on the map,
read its log, draw a cross-section through several wells, or build a 3-D block of the subsurface.
It is a single HTML file that opens offline in any browser.

![A five-well cross-section with interpolated lithology. The wells are synthetic demo data](/images/groundwater_viewer.jpg)
*A five-well cross-section with interpolated lithology. The wells are synthetic demo data.*

### Features

- **Map and search** — every well on the map, searchable by ID.
- **Strip logs** — lithology against depth or elevation, with repaired intervals flagged.
- **Cross-sections** — click wells in order; the section is drawn at true spacing with interpolated fill,
  a confidence measure, adjustable vertical exaggeration, and PNG or SVG export.
- **3-D block model** — draw a rectangle to build a lithology block, then slice it in X, Y and Z or hide classes.
- **Interpolation** — anisotropic indicator inverse-distance weighting between wells.

The public version runs on a synthetic dataset generated from the 1:50,000 geological map, so it can be shared freely.

TypeScript, Leaflet and three.js, built into one file; about 160 automated tests plus an end-to-end browser test.

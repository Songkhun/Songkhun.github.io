---
title: "openlineament: an open lineament-mapping workbench"
excerpt: "Automated lineament extraction from satellite and terrain rasters, tuned and scored against a geologist's mapping <br/><img src='/images/openlineament.jpg'>"
collection: portfolio
---

An open-source workbench for extracting lineaments, the linear traces of fractures and faults,
from satellite images and digital elevation models. It grew out of our work on mapping fractured
rock in western Thailand, where the usual tool is a commercial package with no source code.

![158 lineaments extracted from a Copernicus GLO-30 hillshade of the Doi Inthanon area, with their rose diagram](/images/openlineament.jpg)
*158 lineaments extracted from a Copernicus GLO-30 hillshade of the Doi Inthanon area, with their rose diagram.*

### What it does

- **Extractor** — an edge stage and a vector stage that take the six parameters geologists already
  know from PCI Geomatica's LINE algorithm (RADI, GTHR, LTHR, FTHR, ATHR, DTHR). openlineament is an
  independent, clean-room implementation and is not affiliated with PCI.
- **Optimiser** — searches the parameters for the best match to a manual interpretation, and
  estimates how optimistic its own score is with a checkerboard hold-out.
- **Comparison detectors** — Sobel, Prewitt and a fuzzy-logic detector, scored side by side.
- **Terrain and image preparation** — hillshade, slope, 16/32-bit to 8-bit scaling, directional and texture enhancement.
- **Structural output** — rose diagrams, density maps, and strike and dip from traces on a DEM.
- **Desktop app** — statistics, rose diagram, response surface and density map in one window, plus simple digitising.

### Status

Honest numbers are part of the design: an equivalence report compares its output with LINE's. Its rank
agreement is currently 0.81 against a target of 0.9, so it is not yet a drop-in replacement.

Python (NumPy, SciPy, scikit-image, rasterio, GeoPandas, PySide6), BSD-3 licence, about 750 automated tests.

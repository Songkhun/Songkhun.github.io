---
title: "GeoCalculus Lab: calculus in the geosciences"
excerpt: "46 bilingual worked examples that apply each SCMA 111 Calculus topic to a real Earth-science problem, as Jupyter notebooks and an interactive app with part quizzes and a week-by-week course map<br/><img src='/images/geocalculus_lab.jpg' style='width: 500px; height: auto;' alt='GeoCalculus Lab: slope and flow direction on a DEM'>"
collection: portfolio
date: 2026-11-12
---

**GeoCalculus Lab** (แคลคูลัสในธรณีศาสตร์) is teaching material for Geoscience students taking **SCMA 111 Calculus** (ทคณ ๑๑๑ แคลคูลัส). It shows where each topic in the syllabus turns up in real Earth-science problems, in Thai and English.

- [Open the interactive app](/files/geocalculus_app.html)
- [Notebooks and source on GitHub](https://github.com/Songkhun/GeoCalculus)

What it covers
--------------

- **46 worked examples, easy → hard**, in seven parts that follow the syllabus: limits and continuity, derivatives of elementary functions, higher-order and implicit derivatives and differentials, applications of derivatives, functions of several variables, integration techniques, and applications of integration.
- Problems drawn from seismology, hydrology, volcanology, geomorphology, oceanography and geophysics: GPS velocity after an earthquake, radiocarbon dating, tsunami speed, seismic ray paths (Snell's law), slope and flow direction on a DEM, Hubbert's peak, aftershock counts (Omori's law), flood volume from a hydrograph, and the Earth's dense core from its moment of inertia.
- Each example has the geoscience context, a **step-by-step hand solution**, what the answer means, common mistakes and a "Try it" exercise.
- **52 quiz questions**, one quiz per part, auto-graded in the app and as worksheets with answers in the notebooks.
- A **course map** that links every syllabus week to its examples and quiz, and highlights the current week.

How it was built
----------------

Two Jupyter notebooks (English and Thai) solve each example symbolically with SymPy and numerically with NumPy/SciPy, with Matplotlib figures. The app is one HTML file: sliders drive live Plotly charts, and MathJax renders the formulas and explanations. Data sets are synthetic with realistic values, so every result can be reproduced.

Licence
-------

- **All material** (notebooks, app, examples, explanations and quiz questions): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Reuse and adapt it freely with credit: *"GeoCalculus: Calculus in the Geosciences" by Songkhun Boonchaisuk, Mahidol University, CC BY 4.0*. See [LICENSE](https://github.com/Songkhun/GeoCalculus/blob/main/LICENSE).
- The app loads MathJax, Plotly and Google Fonts from public CDNs; these keep their own licences.

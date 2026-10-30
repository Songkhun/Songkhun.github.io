---
title: "Earthquake Calculator: S − P location and magnitude from real seismograms"
excerpt: "A Google Apps Script web app for KAGS392 — real EarthScope records, automatic P and S picks students can correct, epicentre circles and mb/Ms <br/><img src='/images/earthquake_calculator.jpg' style='width: 500px; height: auto;' alt='S − P circles locating the 2011 Tarlay earthquake'>"
collection: portfolio
date: 2026-10-28
---

A web app that does the earthquake-location and magnitude exercises from
[KAGS392 Geohazards](/teaching/2026-KAGS392) on real data. Students choose an earthquake, and the
app downloads its seismograms from EarthScope (IRIS), picks the P and S arrivals, locates the
epicentre from S − P times and computes the magnitude with the formulas from the lecture. It runs
on Google Apps Script with a Google Sheet behind it, so it needs no server and no installation.

[Open the app](https://script.google.com/a/macros/mahidol.ac.th/s/AKfycbyRiBkjIhMe-3MNUII2b9dC8mnGYd9TXvXwgwqMJxIR9kT48ftkOZ07IPd-O0DLb7gdCg/exec) (sign in with a Google account) ·
[View the project on GitHub](https://github.com/Songkhun/earthquake-calculator)

### What students do

1. **Choose an earthquake.** Five that affected Thailand are ready: Tarlay 2011, Mae Lao 2014,
   Chauk 2016, Mandalay 2025 and Sumatra–Andaman 2004. More can be added from the USGS catalogue
   inside the app.
2. **Check the picks.** Each station's record is shown as ground displacement in µm, with the
   automatic P and S picks drawn as lines. A pick that looks wrong can be dragged to the right
   place, and everything after it updates at once. Each record can be zoomed in time and
   amplitude, shown as displacement, velocity or raw counts, and band-pass filtered (1–5 Hz
   velocity makes a small P onset easy to see).
3. **Read the distances.** S − P gives Δ for every station from the iasp91 travel-time table.
4. **Locate the epicentre.** A circle of radius Δ is drawn around each station on a map, and the
   app finds the point that best fits them, next to the USGS epicentre for comparison.
5. **Compute the magnitude.** mb from the largest P-wave swing and Ms from the Rayleigh wave,
   with every step written out (A, T, the logarithms and the formula with the numbers in it),
   plus the energy in joules and in Hiroshima bombs.
6. **Save the result** to the class sheet, with the picks used.

### What it shows about magnitude

With the automatic picks alone, mb and Ms land within about 0.25 of the USGS magnitude for Tarlay
and Mae Lao. The bigger and deeper earthquakes show the lecture's points: mb saturates for
Mandalay (6.7 against Mw 7.7) and Sumatra (7.6 against Mw 9.1), and Ms comes out too small for
the 82 km deep Chauk earthquake.

### How it is built

- **Two files.** `Code.gs` runs on Google's side and does the requests (USGS catalogue, EarthScope
  stations and waveforms) and the sheet; `Index.html` does the seismology in the browser.
- **Real data, decoded in the browser.** Records arrive as miniSEED and are decoded (Steim-1/2),
  corrected for instrument sensitivity, rotated and filtered with an FFT.
- **Automatic picking** with an STA/LTA trigger refined by the AIC picker; clipped records near
  big earthquakes are detected and left out.
- **Tested end to end** on all five earthquakes, from the catalogue to a saved row in the sheet.

The image above shows the S − P circles from ten stations locating the 2011 Tarlay earthquake.

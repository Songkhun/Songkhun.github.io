---
title: "InversionCoach: a resistivity sounding inversion lab"
excerpt: "Three models fit the data equally well. Which one is geology? A browser lab with a coach <br/><img src='/images/inversion_coach.jpg'>"
collection: portfolio
---

A browser lab for 1-D vertical electrical sounding (VES). Students invert a sounding three ways,
get three models that fit the data equally well, and must choose the one that makes geological
sense. A coach then asks them to explain their choice.

![The Compare tab: blocky, smooth and equivalent models, each fitting the same sounding](/images/inversion_coach.jpg)
*The Compare tab: blocky, smooth and equivalent models, each fitting the same sounding.*

### What students work with

- **Forward model** — Schlumberger and Wenner arrays, computed with the Pekeris recursion and Guptasarma–Singh filters.
- **Three inversions** — a blocky Marquardt model, a smooth 24-layer Occam model, and an equivalence cloud of every model that fits as well.
- **Resolution tools** — depth of investigation and a parameter correlation matrix.
- **Misfit explorer** — drag a layer boundary and watch the fit change.
- **The coach** — written feedback on the student's reasoning, from Claude through a rate-limited proxy, with an offline rules-based coach when there is no connection.
- **Classroom details** — paste or import CSV data, English labels with Thai sub-labels, and a session file students can submit for marking.

Plain JavaScript with no build step, runs from any static host; 74 automated tests.

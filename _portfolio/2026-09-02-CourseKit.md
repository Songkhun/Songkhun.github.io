---
title: "CourseKit: one source, every course format"
excerpt: "Builds slides, handouts, a web deck, notebooks and problem sets from one Quarto file per topic <br/><img src='/images/coursekit.jpg'>"
collection: portfolio
---

A command-line tool I use to produce course material. I write each topic once, as a Quarto file,
and CourseKit builds everything a course needs from it.

![A web-deck slide and a handout page, both built from the same topic file for a graduate geophysics course](/images/coursekit.jpg)
*A web-deck slide and a handout page, both built from the same topic file for a graduate geophysics course.*

### What one file becomes

- an **editable PowerPoint deck** with native equations, not pictures of slides
- a **handout PDF** with the speaker notes removed
- a **web deck** for the browser
- a **Jupyter notebook** for the exercises
- a **problem set**, with the solutions built separately

### Guard rails

- `coursekit check` refuses to build while required course details are blank, so it never invents course facts.
- Bibliographies are wired in automatically from BibTeX.
- Institution theme packs, starting with Mahidol University.

Its first full run produced the material for Day 1 of 2351602 Geophysics at Chulalongkorn University.

Python, Quarto, pandoc and XeLaTeX; 139 automated tests.

---
title: "Deep Time Kanchanaburi: an interactive geologic history"
excerpt: "A bilingual teaching page on 470 million years of Kanchanaburi's geology: timeline, ancient-globe view, map of faults and fossils, and competing tectonic models<br/><img src='/images/deep_time_kanchanaburi.jpg' style='width: 500px; height: auto;' alt='Deep Time Kanchanaburi timeline and paleo-globe'>"
collection: portfolio
date: 2026-10-03
---

**Deep Time Kanchanaburi** (ย้อนเวลาธรณีกาญจนบุรี) is a teaching page that tells the geologic and tectonic history of Kanchanaburi, Thailand, in Thai and English.

- [Open the page](/files/DeepTimeKanchanaburi.html)
- [Source code on GitHub](https://github.com/Songkhun/TectonicTH)

What it shows
-------------

- **Timeline:** 39 events on the ICS time scale in three lanes (Kanchanaburi, Southeast Asia and the world, and life), with a magnetic polarity column. A globe beside it shows where Kanchanaburi sat at each time slice, from 470 Ma to today.
- **Map:** a base map of the region with active faults, field evidence, fossil sites and places to visit.
- **Tectonic models:** four open questions about the region's tectonics, with 14 competing models, each linked to the evidence for and against it.
- **Fossil catalogue** of 54 entries, and **100 evidence items** checked by the instructor.
- A **lecture mode** with larger text and arrow-key navigation for use in class.

How it was built
----------------

The page is one self-contained HTML file with no network requests, so it works offline. Python scripts fetch and simplify the data once: paleo-coastlines from the GPlates Web Service (TorsvikCocks2017 model), GTS2020 polarity chrons, the GEM Global Active Faults Database and Natural Earth. The browser code uses D3 and Canvas, and 245 automated tests (pytest and `node --test`) cover the build scripts and page logic.

Licence
-------

- **Code:** [MIT](https://github.com/Songkhun/TectonicTH/blob/main/LICENSE).
- **Teaching content** (events, evidence, fossils, tectonic models and sutures): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Reuse and adapt it freely with credit: *"Deep Time Kanchanaburi" by Songkhun Boonchaisuk, Mahidol University, CC BY 4.0*.
- **Third-party data** keep their own licences, including the GEM active faults (CC BY-SA 4.0) and Natural Earth (public domain). See [LICENSE-CONTENT](https://github.com/Songkhun/TectonicTH/blob/main/LICENSE-CONTENT) for the full list.

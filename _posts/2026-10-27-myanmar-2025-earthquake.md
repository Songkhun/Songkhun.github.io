---
title: 'The 2025 M7.7 Myanmar earthquake: notes from a geophysicist in Thailand'
date: 2026-10-27
permalink: /posts/2026-10-27-myanmar-2025-earthquake
categories:
  - "Research"
tags:
  - earthquake
  - seismology
  - hazard
  - Myanmar
---

On **28 March 2025 at 06:20 UTC** a magnitude 7.7 earthquake struck central Myanmar near Mandalay, at a shallow depth of about 10 km ([USGS event page](https://earthquake.usgs.gov/earthquakes/eventpage/us7000pn9s/executive)). A magnitude 6.4 aftershock followed twelve minutes later. These notes summarise the briefing I prepared for students and colleagues in the days after the event.

## The fault

The earthquake ruptured the **Sagaing Fault**, a right-lateral strike-slip fault that takes up much of the motion between the India and Sunda plates through Myanmar. It has a long record of damaging earthquakes, including events in 1839, 1930, 1956, 2011 and 2012 (NOAA catalogue, as compiled on the European Commission ERCC map of the event).

## How much shaking, for how many people?

The European Commission's ERCC daily map, using GDACS estimates, put about **770,000 people in intensity IX** shaking, **3.7 million in VIII** and **2.8 million in VII**. The damage in Mandalay, Sagaing and Nay Pyi Taw matched those numbers.

The shaking reached Bangkok, about 1,000 km away. Long-period surface waves were amplified by the soft clay of the Bangkok basin, high-rise buildings swayed for minutes, and an unfinished high-rise in Bangkok's Chatuchak district collapsed. For many people in Thailand this was the first time a distant earthquake felt like a local one.

## Why the rupture length matters

The magnitude of a fault earthquake scales with the length of fault that breaks. Wells and Coppersmith (1994) give, for strike-slip faults,

$$M = 5.16 + 1.12 \log_{10}(SRL), \qquad \log_{10}(SRL) = -3.55 + 0.74\,M,$$

where SRL is the surface rupture length in km.

- Running the regression forward from M 7.7 predicts a rupture of about **140 km**.
- Early analyses of this event reported a rupture several times longer, roughly **450–500 km**. Plugged back into the regression, that length corresponds to **M ≈ 8.1–8.2**.

![Wells and Coppersmith regression with the Myanmar event](/images/myanmar_wc.png)

The mismatch is a good teaching point. Empirical regressions describe the average earthquake, with a scatter of about ±0.3 magnitude units. A very long, narrow strike-slip rupture with relatively modest slip, like this one, sits well off the average. Hazard models that infer the maximum magnitude from fault length alone can therefore misjudge both how big and how long an earthquake on a major strike-slip fault can be.

## What it means for Thailand

- **Distance is not protection.** Bangkok is far from active faults but sits on a soft basin that amplifies long-period waves, which matters most for tall buildings.
- **Local faults still matter.** Western and northern Thailand have their own active fault zones (Three Pagodas, Sri Sawat, Phayao, Mae Chan and others). Probabilistic hazard maps (for example Pailoplee and Charusiri, 2016, *Earth, Planets and Space*) show the highest ground motions in the north and west.
- **Data from the public help.** "Did you feel it?" reports and low-cost sensors fill gaps between seismic stations. This idea drove the community-reporting part of [Kanchanaburi GeoGuard](/portfolio/2026-10-17-GeoGuard/).

## References

- USGS. M 7.7 – 2025 Mandalay, Burma (Myanmar) earthquake, event us7000pn9s.
- European Commission ERCC – DG ECHO Daily Map, Myanmar M7.7 earthquake, 28 March 2025 (GDACS, GEM, NOAA data).
- Wells, D. L., and Coppersmith, K. J. (1994). New empirical relationships among magnitude, rupture length, rupture width, rupture area, and surface displacement. *Bulletin of the Seismological Society of America*, 84(4), 974–1002.
- Pailoplee, S., and Charusiri, P. (2016). Seismic hazards in Thailand: a compilation and updated probabilistic analysis. *Earth, Planets and Space*, 68, 98.

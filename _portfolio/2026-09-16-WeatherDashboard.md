---
title: "Weather Dashboard: ten AccuWeather features in Tkinter"
excerpt: "A teaching project for KAGS381 — ten weather features, an animated sky, and 250 tests <br/><img src='/images/weather_dashboard.png'>"
collection: portfolio
---

A desktop weather dashboard built on the [AccuWeather API](https://developer.accuweather.com),
written as teaching material for KAGS381 (Python). It grew out of the course's `accu_*.py`
exercises: the same API calls, arranged into something students can read one file at a time.

[View the project on GitHub](https://github.com/Songkhun/kags381-weather-dashboard)

### What it shows

Three tabs — **Now**, **12 hours** and **Compare** — covering ten features:

- **Heat stress** — wet-bulb globe temperature on a coloured gauge, with "feels like" in sun and shade
- **Umbrella?** — a YES / MAYBE / NO verdict from the next 12 hours of rain and thunderstorm chance
- **Weather theme** — icons and card colours chosen by AccuWeather's icon *number*, so they survive a language change
- **Headline** — the most significant weather in the next five days, coloured by severity
- **Sun & moon** — the sun's position now along its arc, plus the moon's phase drawn from its age
- **Wind & pressure** — a compass arrow pointing where the wind blows to, with the pressure trend
- **vs yesterday** — warmer or cooler than 24 hours ago, without needing the paid history endpoint
- **Best hour** — each of the next 12 hours scored for going outside, with the best window highlighted
- **Animated sky** — rain, wind-slanted streaks, lightning, clouds and day/night, hour by hour
- **Compare cities** — up to four cities side by side on one shared temperature scale

### How it is built for teaching

- **One networking module.** `accu_api.py` is the only file that touches the network; everything
  else receives a plain dictionary. Students can read any panel without thinking about HTTP.
- **Every panel runs on its own.** `python3 panel_wind.py` opens just the compass, with demo data.
- **It works with no API key.** Without one the app plays built-in sample weather, marked with a
  DEMO badge, so the code can be read and run before signing up for anything.
- **250 tests, none touching the network.** The API is replaced with fakes, so the suite runs
  offline in about two seconds.
- **The key never goes in a file.** It is read from an environment variable and sent over HTTPS in
  an `Authorization` header — the habit the earlier course scripts were written to break.

The image above is drawn by the app itself: the storm hour of the animated scene, the heat gauge,
the wind compass, the sun arc, and the twelve scored hours of a Bangkok afternoon.

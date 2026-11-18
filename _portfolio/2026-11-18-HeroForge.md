---
title: "HeroForge: a turn-based strategy game"
excerpt: "A fantasy strategy game in Python and pygame with an adventure map, hex-grid battles, towns and a computer opponent; every image and sound is drawn or synthesized in code<br/><img src='/images/heroforge.jpg' style='width: 500px; height: auto;' alt='HeroForge: a hex-grid battle'>"
collection: portfolio
date: 2026-11-18
---

**HeroForge** is a turn-based fantasy strategy game written in Python with pygame. You lead a hero across a map hidden by fog of war, claim mines, grow your towns, recruit armies and fight tactical battles against a computer opponent.

- [Source code and instructions on GitHub](https://github.com/Songkhun/heroforge)

What's in it
------------

- **Adventure map:** a 32×32 map with rivers, mountains, deserts and snowfields, guarded mines and treasure, obelisks that reveal distant land, and a minimap.
- **Tactical combat** on a 15×11 hex grid: initiative order, melee and ranged attacks, retaliation, 20 spells in four schools of magic, luck, morale and a tactics phase.
- **Two factions**, Castle and Necropolis, each with illustrated towns, a building tree, weekly creature growth and 14 creature types.
- **Hero progression:** levels, secondary skills chosen at each level-up, spellbooks and 15 artifacts.
- **AI opponent** that explores, captures mines and towns, builds, recruits and attacks.
- Save and load, smooth animations and synthesized sound effects.

How it was built
----------------

Pure Python and pygame, with no image or audio files: terrain, creatures, heroes, town views and the interface are drawn procedurally, and sound effects are synthesized from waveforms at startup. Game data (creatures, buildings, spells, artifacts and the map) lives in JSON files. It was built in five stages: map, combat, towns, heroes and AI, then polish.

To play, install Python 3 and pygame, then run `python main.py` (see the [README](https://github.com/Songkhun/heroforge#running-it)).

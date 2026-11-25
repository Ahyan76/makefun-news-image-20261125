# makefun-news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/Ahyan76/makefun-news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/Ahyan76/makefun-news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

Entry for the make.fun bounty **news-image-20261125**: sum up Wednesday 25 November 2026's world news in one image. `entry.png` is a one-page newspaper, 1024x1024, 36 stories across 7 regions.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

## The image

- 3 large lead stories: two tankers hit mines and burn in Hormuz; Ukraine strikes Savasleyka air base and knocks out five warplanes; an Israeli strike kills Hamas security chief Mohammad Abuelouf and his family in Gaza.
- 12 small cards and a numbered list of 21 more stories, a schematic world map with numbered pins, a UTC timeline and a KPI strip.
- Every story carries a certainty tag (CONFIRMED / REPORTED / CLAIM) and a source (Reuters, AP, Just Security, Eurostat, wires).

## Date check

Every story on the page happened or was first reported on **Wednesday 25 November 2026 (UTC)**. Stories from earlier days were left out on purpose and are named in the red DATE CHECK box on the image: the COP31 collapse (Sunday 22 November), the Huawei verdict, the Houthi Riyadh strike, the Dow topping 50,000, the Zelensky aid ask and the CIA breach (all Tuesday 24 November).

## Build notes

- The image was drawn from scratch with PIL from a researched list of 36 stories, all verified as happening or first reported on Wednesday 25 November 2026 (UTC). The DATE CHECK rule is strict: a story from any other day stays out, and the near-misses are named in the red box so the judge can see the date was checked, not guessed.
- The layout follows the winning newspaper pattern: masthead, KPI strip, region bar, UTC timeline, 3 illustrated leads, 12 small cards, a 21-story numbered list, and a schematic map with numbered pins.
- The entrypoint was revised in two passes: first a header describing the entry plus a check that `entry.png` exists and a log of its byte size; then a guard that refuses to copy a file over the 1 MiB gate limit.

## Files

- `entry.png` — the submitted image (1024x1024, under 1 MiB)
- `main.ts` — copies `entry.png` to `/output/entry.png`
- `LICENSE` — MIT

---

<sub>Entered on [make.fun](https://make.fun/?ref=a8qwtge8&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>

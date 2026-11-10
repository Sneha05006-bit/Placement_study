# Styling Approaches in React: A Controlled Comparison

This repository contains the source code, measurement scripts and raw results for a study that compares four styling approaches in React:

| Version | Folder | Approach |
| --- | --- | --- |
| V1 | `v1-plain` | Plain CSS |
| V2 | `v2-modules` | CSS Modules |
| V3 | `v3-tailwind` | Tailwind CSS |
| V4 | `v4-styled` | styled-components |

All four versions are the same application (Placement Prep Kit) with identical content, layout and behaviour. Only the styling method differs.

## The test application

Placement Prep Kit is a placement preparation kit for students. It has 4 routes:

- **Home**
- **Aptitude Practice**: a list of up to 2000 questions
- **DSA Topics**: with search
- **Progress Dashboard**: with a chart (Recharts)

All questions are generated dummy data stored in a local JSON file, so no network requests add noise to the measurements.

## What was measured

| Test | What | How |
| --- | --- | --- |
| A | Build size | Gzip size of JS and CSS from the Vite production build |
| B | Page load | Lighthouse on the Home page: FCP, LCP, TBT, performance score (5 runs per version) |
| C | List rendering | Time to render the Aptitude Practice list with 100, 500 and 2000 items (5 readings per size) |

Results are reported as the median and standard deviation.

## Environment used

| Item | Value |
| --- | --- |
| Laptop | HP OMEN laptop, Intel(R) Core(TM) Ultra 5 125U (3.60 GHz), 16 GB RAM |
| OS | Windows 11, version 26H2 |
| Browser | Google Chrome 157.0.8103.51 (Official Build) (64-bit), incognito, extensions disabled |
| Node.js | v24.20.0 |
| Lighthouse | 13.6.0, mobile preset, simulated Slow 4G, 4x CPU slowdown |
| Main libraries | React 18.3.1, React Router 6, Vite 5.4.21, Recharts 2.15.4, Tailwind CSS 3.4, styled-components 6 |

Exact versions are in each folder's `package-lock.json`.

## How to reproduce

Open a terminal in the repository root (the folder with `setup.mjs`).

1. **Install and build all four versions (Test A):**
   ```
   node setup.mjs
   ```
   Copy the gzip sizes it prints.

2. **Check an app in development (optional):**
   ```
   cd v1-plain
   npm run dev
   ```
   Stop with Ctrl+C, then `cd ..`.

3. **Page load, Lighthouse (Test B):** run once per version.
   ```
   node measure.mjs v1-plain 5
   node measure.mjs v2-modules 5
   node measure.mjs v3-tailwind 5
   node measure.mjs v4-styled 5
   ```

4. **List rendering (Test C), done by hand:**
   ```
   cd v1-plain
   npm run preview
   ```
   Open `http://localhost:4173/aptitude?n=100`, hard reload (Ctrl+Shift+R), and read "render ms" in the browser Console (F12). Repeat for `?n=500` and `?n=2000`, 5 readings each, and repeat for every version.

Test the versions one after another in the same session (V1, V2, V3, V4), with the laptop idle and other programs closed.

## Results (summary)

**Build size, gzip (KB)**

| Version | JS | CSS | Total |
| --- | --- | --- | --- |
| V1 Plain CSS | 176.39 | 0.60 | 176.99 |
| V2 CSS Modules | 176.91 | 0.70 | 177.61 |
| V3 Tailwind CSS | 176.88 | 2.27 | 179.15 |
| V4 styled-components | 189.61 | 0 | 189.61 |

**Page load, Home page (median of 5 runs)**

| Version | FCP (s) | LCP (s) | TBT (ms) | Score |
| --- | --- | --- | --- | --- |
| V1 | 0.756 | 0.756 | 0 | 100 |
| V2 | 0.755 | 0.755 | 0 | 100 |
| V3 | 0.756 | 0.756 | 0 | 100 |
| V4 | 0.605 | 0.605 | 0 | 100 |

**List render time (ms, median of 5 readings)**

| Version | 100 items | 500 items | 2000 items |
| --- | --- | --- | --- |
| V1 | 26.0 | 53.7 | 137.4 |
| V2 | 27.1 | 51.4 | 125.1 |
| V3 | 21.4 | 54.5 | 127.2 |
| V4 | 34.8 | 67.4 | 176.9 |

Standard deviations are in `results/`.

## Repository contents

- `v1-plain/`, `v2-modules/`, `v3-tailwind/`, `v4-styled/`: the four versions
- `setup.mjs`: installs and builds all versions
- `measure.mjs`: runs Lighthouse repeatedly for one version
- `export-test-b.mjs`: builds `results/test_b_runs.csv` from the Lighthouse reports
- `results/lighthouse/`: Lighthouse JSON reports (5 runs per version)
- `results/test_a_build_size_gzip.csv`: Test A, build sizes
- `results/test_b_runs.csv`: Test B, every Lighthouse run
- `results/test_b_summary_only.csv`: Test B, medians and standard deviations
- `results/test_c_readings.csv`: Test C, every reading


## Limitations

One application, one laptop with simulated throttling, 5 runs or readings per test, Home page only for load metrics. Results should not be generalised to other applications.

## AI assistance

An AI assistant (Claude, Anthropic) was used to help generate the starter code and to help draft the accompanying paper. Measurements were run and checked by the authors.

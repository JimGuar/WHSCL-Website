# WHSCL Website

Static, mobile-first site for the Wisconsin High School Climbing League: public pages plus a Coach Portal prototype.

## Open it

Double-click `index.html`. No server, no install, no build step.

Content lives in `.js` files loaded with `<script>` tags rather than `.json` files, specifically so the site works from `file://`. After editing a data file, hard-refresh the browser (Ctrl+Shift+R / Cmd+Shift+R).

**Start with `GUIDE.html`** (double-click it) — open it in a browser for a plain-English walkthrough of every routine edit.

## File layout

Every file lives in one flat folder so the site can be dropped onto GitHub Pages, Netlify, or any static host with no build step.

| File | Purpose |
| --- | --- |
| `index.html` | Home |
| `season.html` | Season calendar, divisions, fees, results archive |
| `teams.html` | Searchable team directory and practice schedule |
| `registration.html` | League fee sign-up, competition fees, State Finals |
| `about.html` | Mission, values, history, leadership, facilities |
| `resources.html` | Resource library and team-startup guide |
| `styles.css` | All styling; design tokens live in `:root` at the top |
| `main.js` | Mobile nav, footer year, shared helpers |
| `season.js` / `teams.js` / `registration.js` / `resources.js` | Render their page from the matching data file |
| **`data-teams.js`** | **Teams, coaches, gyms, practice times — edit this** |
| **`data-season.js`** | **Competitions, hangouts, dates, results — edit this** |
| **`data-registration.js`** | **Registration page: sign-up buttons and fees — edit this** |
| **`data-resources.js`** | **Documents and links — edit this** |
| `GUIDE.html` | Plain-English editing guide (open in a browser) |
| `README.md` | Planned backend architecture |

The header and footer are repeated in each HTML file. Changing a nav link means editing all eight pages — a deliberate trade for having no build step.

## Updating content each season

Seasonal edits happen in the three `data-*.js` files, never the HTML. Each file opens with its own instructions and a copy-paste template. See `GUIDE.html` for the walkthrough.

Two things build themselves from the team data, so nothing extra is needed when the league grows:

- **A new gym gets its own practice tab automatically.** Name a new facility on any team and a tab appears on the Teams page, plus an entry in the facility filter.
- **The Region filter stays hidden until regions exist.** Every team currently has `region: ""`. Fill regions in when they are decided and the filter appears by itself.

## Source of truth

Every value on the site is a starting point meant to be edited, not a fixed fact. Where the binder and the live Adventure Rock page disagree — coaches, fees, team names — the conflict is listed in `CONTENT_NOTES.md` with both values, so you can set the correct one and move on.


## Before launch

1. Work through the conflicts in `CONTENT_NOTES.md` and correct the coach and fee values.
2. Swap `_gitignore` to `.gitignore` if using GitHub.
3. Replace the placeholder hero background with approved WHSCL competition photography.
4. Publish 2026–2027 PDFs and point `data-resources.js` at them — it currently links the 2025–2026 files hosted on adventurerock.com.
5. Decide whether coach emails stay on the public Teams page or move into the Coach Portal only.
6. Optionally delete `GUIDE.html`, which is written for maintainers rather than the public.

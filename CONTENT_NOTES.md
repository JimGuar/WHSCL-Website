# Content notes

Where the site's information came from, what conflicts between sources, and what still needs a decision.

## Source priority — REVISED

The league has since clarified that **the binder reflects the previous season and the live Adventure Rock page is more current** for coaches, fees, and team names. The build was populated from the binder before that was known, so the table below lists both values for every conflict. Treat the binder column as "what the site currently says" and the website column as the likely correction.

Every one of these is a one-line edit in `data-teams.js` or `data-season.js`. Nothing is locked in.

`whscl.info` was checked but currently serves almost no content, so nothing was taken from it.

---

## Conflicts between the binder and the public Adventure Rock page

These need a decision before launch. The binder value is what the site currently shows.

| Team / item | Currently on the site (from binder) | adventurerock.com — likely correct |
| --- | --- | --- |
| Nathan Hale | Skye LeFay — but the listed email is still `frankmanns@wawmsd.org` | Scott Frankmann |
| Marquette / DSHA | Chris Reis and Linda Reis | Peter Beck |
| Menomonee Falls | Coach TBD | Lucy DeLain |
| Waukesha North | Coach TBD | Stephanie Barthel, Matt Barthel |
| De Pere | Sam Johnson | TBD |
| Kimberly | Holly Geyer | TBA |
| Homeschool South | Nick Olig | Nick Olig, asst. Lillian Weis |
| Little Chute | Odyssey Green Bay | Odyssey Appleton |
| Waukesha West | Mitchell Mueller, Kat Mueller | Kat Mueller, Mitchell Mueller |
| Competition fee | $20 per competition ~~conflict~~ | RESOLVED: the Registrator page confirms $20 |
| Team naming | "NEWCHAA" | "Homeschool North" |
| Team naming | "Climb @ the Loop" | "Climb @ the Loop" (Burlington composite) |

**Nathan Hale** — the binder changed the coach name but kept the old email address, so at least one of the two is stale either way.

**Little Chute** — the binder assigns it to Odyssey Green Bay, but Little Chute is a few miles from Appleton.

**Competition fee** — the site currently shows the binder's $20. Change it in `WHSCL_FEES` in `data-season.js` if $10 is correct.

---

## Teams present in one source only

- **In the binder, not on the AR page:** Edgewood, Lake Country Lutheran, Nicolet, Notre Dame Academy — all included.
- **On the AR page, not in the binder:** Pius XI. Not included. Confirm whether this team folded or was simply omitted.

---

## Fields carried over from the 2025–2026 season

Practice days and times were supplied by the league and are now loaded: **29 of
48 teams have a confirmed day and time**, the remaining 19 show "To be confirmed"
until their gym sets a schedule.

Times were normalised to the site's house style — `4:00pm - 6:00pm` is stored
and displayed as `4:00–6:00 PM`. The obsolete 2025–2026 reference block has been
removed from `data-teams.js`.

### One conflict to resolve

**Whitefish Bay** was listed twice with different days:

| Row | Day | Time |
| --- | --- | --- |
| 1 | Thursday | 6:00pm – 8:00pm |
| 2 | Friday | 6:00pm – 8:00pm |

The site currently shows **Thursday**, the first of the two. If the team really
practises on both days, the data model needs changing — each team holds a single
`practiceDay` and `practiceTime`. Say the word and I can make it hold a list.

### Teams still awaiting a schedule

Appleton North, Climb @ the Loop, De Pere, Fond Du Lac, Fox Valley Lutheran,
Green Bay Southwest, Homestead, Lake Country Lutheran, Little Chute,
Marquette / DSHA, Menomonee Falls, NEWCHAA, Nicolet, Notre Dame Academy,
Shorewood, Valley Christian, Waukesha North, Waukesha South, Waukesha West.

The league's list confirmed every conference and facility already on the site —
no differences at all across 48 teams.

The Teams page has a practice-schedule section with one tab per gym, generated automatically from the facility names on the teams. A gym that joins mid-season gets a tab the moment a team names it.

Team Instagram links exist for three teams only (Appleton East, North, West).

---

## Inferences we made

These are not stated anywhere as such; flag if wrong.

- **Regions are undecided**, so every team now has `region: ""` and the Region filter is hidden. Fill the field in whenever regions are settled and the filter appears on its own — no code change needed. A suggested starting point, based on the coordinators named in the binder, is Southeast / Northeast / South Central Wisconsin.

- **Homepage statistics** are limited to numbers verifiable from the binder: 48 teams, 9 practice locations, 2 conferences, founded 2009. Student and school counts were deliberately left off — the AR page body says 500+ students from 40 schools while its own page metadata says 400+ from 25, and neither is in the binder.

---

## Coach photos

Resolved. The file previously named `Homeschool_Coach_Fall_2022__Gavin_Olig_square.jpg` has been renamed to `Homeschool_South_Coach__Nick_Olig.jpg` and is now used for Nick Olig on Homeschool South.

Coaches with no photo render initials in a circle instead.

---

## Coach compliance requirements (no longer used)

Confirmed with the league and now built in. Required of every coach:

- **Background check** — completed every season, kept on file. Expires annually.
- **SafeSport training** — required, annual.
- **WHSCL Coach Agreement**, **Code of Conduct acknowledgement**, **school approval and paperwork**, **pre-season Coaches' Meeting**, **Student Leader Agreement on file**.

Not required of everyone:

- **Climbing Wall Instructor certification** — tagged "If applicable". Only needed when a coach teaches belay and knot classes personally rather than scheduling a gym instructor.
- **CPR / AED certification** — tagged "Recommended". Not required at this time.
- **Other certifications or documents** — an open upload slot, tagged "Optional", that accepts as many files as a coach needs. This covers gym-specific requirements without the league having to list them.

Only the required items count toward a coach's completion percentage. To change any of this, edit the `REQUIREMENTS` list at the top of `portal.js`.

---

## Privacy decisions outstanding

- **Coach email addresses** are published on the public Teams page. They are already public on adventurerock.com, so this preserves the status quo rather than creating a new disclosure — but it is a policy decision. To remove them, delete the `email` values in `teams.json`; the detail panel falls back to "Contact through the head coach."
- No student, roster, or compliance data appears anywhere on the public site.

---

## Links currently pointing at Adventure Rock

The Resources page links the **2025–2026** Handbook and Rulebook PDFs hosted on adventurerock.com, because no 2026–2027 public PDFs exist yet. Each is labelled with its edition and marked "2026–2027 edition to be posted." Update `resources.json` once the new files are published on WHSCL's own domain.

The results archive links `whscl.climbcomp.app` and Google Photos albums, which are WHSCL's own.


---

## Settled by the Registrator page document

* **Competition fee is $20 per competitor per competition.** This closes the
  conflict with the Adventure Rock page, which showed $10.
* **State Finals is $50 per competitor**, and an athlete must compete in two
  competitions to qualify. This was not previously on the site.
* **League fee wording:** "Annual fee paid by each student athlete to cover
  league-wide expenses."
* Registration is handled per practice facility: three Adventure Rock options
  (Brookfield, Milwaukee, Walker's Point) plus one for every other facility.
  The sign-up form also captures the Code of Conduct signature and enrols the
  athlete in their team's practice.

The four sign-up addresses were not supplied, so each button is greyed out
reading "link coming" until a url is added to `WHSCL_REGISTRATION_BUTTONS`
in `data-season.js`.

## Coach Portal — removed

Removed at the league's request in favour of handling coach documents outside
the website. No portal pages, scripts, styling, or navigation remain.

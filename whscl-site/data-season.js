/* ============================================================================
   SEASON - competitions, events, fees, divisions, results
   ============================================================================

   Same four rules as data-teams.js: text in "quotes", commas at line ends,
   empty means "", never delete a line you are not using.

   ---------------------------------------------------------------------------
   Fees and the Registration page buttons are NOT here — they live in
   data-registration.js.

   ---------------------------------------------------------------------------
   ROLLING OVER TO A NEW SEASON
   ---------------------------------------------------------------------------
   1. Change WHSCL_SEASON below to the new season, e.g. "2027-2028".
   2. Move this season's competitions down into WHSCL_PAST_RESULTS and add
      their results and photo links.
   3. Replace the competitions with next season's dates.
   4. Update the hangouts, key dates, and fees.
   ========================================================================= */


/* Shown wherever the season is named on the site. */
const WHSCL_SEASON = "2026–2027";


/* ---------------------------------------------------------------------------
   COMPETITIONS
   ---------------------------------------------------------------------------
   Listed in date order - the site shows them in the order you write them.

   type changes how the card looks. Use one of:
     "scrimmage"     division placement scrimmages
     "competition"   a normal qualifying competition
     "championship"  conference championship
     "state"         State Finals (shown as a dark card)

   registrationLink: paste the host facility's sign-up address here and the
   card's button turns on by itself. Leave "" and it stays greyed out with
   "Registration link coming".

   TEMPLATE for a new competition:
     {
       name: "Competition Name",
       date: "January 9, 2027",
       location: "Adventure Rock Milwaukee",
       discipline: "Top Rope",
       session: "Morning: Conference A / Afternoon: Conference B",
       registration: "December 13, 2026 - January 3, 2027",
       registrationLink: "",
       type: "competition",
       note: "",
     },
   --------------------------------------------------------------------------- */
const WHSCL_COMPETITIONS = [
  {
    name: "Division Placement Scrimmages — Southeast Wisconsin",
    date: "October 26–30, 2026",
    location: "Adventure Rock Milwaukee & Brookfield",
    discipline: "Top Rope & Bouldering",
    session: "All conferences",
    registration: "",
    registrationLink: "",
    type: "scrimmage",
    note: "Students attend one scrimmage during their team's scheduled time. Scrimmages do not count toward State Finals qualification.",
  },
  {
    name: "Division Placement Scrimmages — Northeast Wisconsin",
    date: "November 2–6, 2026",
    location: "Odyssey Climbing + Fitness Appleton & Green Bay",
    discipline: "Top Rope & Bouldering",
    session: "All conferences",
    registration: "",
    registrationLink: "",
    type: "scrimmage",
    note: "Students attend one scrimmage during their team's scheduled time. Scrimmages do not count toward State Finals qualification.",
  },
  {
    name: "Brookfield Beta Break",
    date: "November 21, 2026",
    location: "Adventure Rock Brookfield",
    discipline: "Top Rope",
    session: "Morning: Conference A / Afternoon: Conference B",
    registration: "October 25 – November 15, 2026",
    registrationLink: "",
    type: "competition",
    note: "",
  },
  {
    name: "Green Bay Super Bowl-der",
    date: "December 12, 2026",
    location: "Odyssey Climbing + Fitness Green Bay",
    discipline: "Bouldering",
    session: "Morning: Conference B / Afternoon: Conference A",
    registration: "November 22 – December 6, 2026",
    registrationLink: "",
    type: "competition",
    note: "",
  },
  {
    name: "Riverwest Rockfest",
    date: "January 9, 2027",
    location: "Adventure Rock Milwaukee",
    discipline: "Top Rope",
    session: "Morning: Conference A / Afternoon: Conference B",
    registration: "December 13, 2026 – January 3, 2027",
    registrationLink: "",
    type: "competition",
    note: "",
  },
  {
    name: "Capital Classic",
    date: "February 6, 2027",
    location: "Greater Heights, Madison",
    discipline: "Top Rope",
    session: "Morning: Conference B / Afternoon: Conference A",
    registration: "January 10 – 31, 2027",
    registrationLink: "",
    type: "competition",
    note: "Greater Heights hosts its first WHSCL competition.",
  },
  {
    name: "Walker's High Point",
    date: "March 13, 2027",
    location: "Adventure Rock Walker's Point",
    discipline: "Bouldering",
    session: "Morning: Conference A / Afternoon: Conference B",
    registration: "February 7 – March 7, 2027",
    registrationLink: "",
    type: "competition",
    note: "",
  },
  {
    name: "Flash on the Fox — Conference Championship",
    date: "April 10, 2027",
    location: "Odyssey Climbing + Fitness Appleton",
    discipline: "Top Rope",
    session: "Morning: Conference B / Afternoon: Conference A",
    registration: "March 14 – April 4, 2027",
    registrationLink: "",
    type: "championship",
    note: "",
  },
  {
    name: "State Finals",
    date: "May 8, 2027",
    location: "Adventure Rock Milwaukee",
    discipline: "Top Rope & Bouldering",
    session: "Qualified athletes",
    registration: "April 11 – May 2, 2027",
    registrationLink: "",
    type: "state",
    note: "Athletes must compete in at least two qualifying competitions during the season to be eligible. Division Placement Scrimmages do not count.",
  },
];


/* Shown above the competition list. */
const WHSCL_REGISTRATION_NOTE = "Registration opens at 9:00 AM and closes at 11:59 PM on the dates listed. Late registrations are not accepted. Register through the host facility.";


/* ---------------------------------------------------------------------------
   HIGH SCHOOL HANGOUTS
   --------------------------------------------------------------------------- */
const WHSCL_HANGOUTS = [
  { date: "October 4, 2026", location: "Adventure Rock Milwaukee" },
  { date: "November 1, 2026", location: "Adventure Rock Brookfield" },
  { date: "December 6, 2026", location: "Adventure Rock Brookfield" },
  { date: "January 3, 2027", location: "Adventure Rock Milwaukee" },
  { date: "February 7, 2027", location: "Adventure Rock Brookfield" },
  { date: "March 7, 2027", location: "Adventure Rock Brookfield" },
  { date: "April 4, 2027", location: "Adventure Rock Milwaukee" },
  { date: "May 2, 2027", location: "Adventure Rock Brookfield" },
  { date: "July 15th, 2027", location: "Adventure Rock Walker's Point" },
];

const WHSCL_HANGOUT_TIME = "5:30 – 8:00 PM";
const WHSCL_HANGOUT_NOTE = "High School Hangouts are free for all Wisconsin high school students, whether or not they are part of the WHSCL. Most include a theme, activities, snacks, and climbing. Listed Hangouts fall on the first Sunday of the month; more dates and locations may be added.";



/* ---------------------------------------------------------------------------
   IMPORTANT DATES - closures, deadlines, contests
   --------------------------------------------------------------------------- */
const WHSCL_KEY_DATES = [
  { date: "September 2026", label: "Pre-season Coaches' Meetings", detail: "Held 6:00–7:00 PM at Odyssey Appleton, Odyssey Green Bay, Adventure Rock Brookfield, and Adventure Rock Walker's Point." },
  { date: "November 26, 2026", label: "Thanksgiving", detail: "All gyms closed." },
  { date: "December 25, 2026", label: "Christmas Day", detail: "All gyms closed." },
  { date: "April 9, 2027", label: "State Finals T-shirt designs due", detail: "Student design contest submissions close." },
  { date: "April 12–16, 2027", label: "T-shirt design contest voting", detail: "One vote per WHSCL student athlete and coach." },
  { date: "May 3–7, 2027", label: "Adventure Rock Milwaukee off limits", detail: "Closed to WHSCL coaches and student athletes for State Finals routesetting." },
];


/* ---------------------------------------------------------------------------
   COMPETITION DIVISIONS
   --------------------------------------------------------------------------- */
const WHSCL_DIVISIONS_TOPROPE = [
  { division: "Division 1", grade: "5.9" },
  { division: "Division 2", grade: "5.10" },
  { division: "Division 3", grade: "5.11" },
  { division: "Division 4", grade: "5.12 & up" },
];

const WHSCL_DIVISIONS_BOULDERING = [
  { division: "Division 1", grade: "V1" },
  { division: "Division 2", grade: "V2" },
  { division: "Division 3", grade: "V4" },
  { division: "Division 4", grade: "V4 & up" },
];

const WHSCL_DIVISIONS_NOTE = "Competitors self-select one of eight categories at registration, based on division and gender. Athletes may move up mid-season but may not drop to a lower division without Director approval. State Finals is contested in six categories — Divisions 2, 3 and 4.";


/* ---------------------------------------------------------------------------
   COMPETITION DAY SCHEDULE
   --------------------------------------------------------------------------- */
const WHSCL_COMPDAY_MORNING = [
  { time: "7:45 – 8:00 AM", what: "Volunteer check-in & breakfast" },
  { time: "8:00 – 8:45 AM", what: "Volunteer orientation" },
  { time: "8:00 – 8:30 AM", what: "Competitor check-in" },
  { time: "8:30 – 8:45 AM", what: "Coaches' meeting" },
  { time: "8:45 – 9:00 AM", what: "Competition & rules overview" },
  { time: "9:00 AM – 12:00 PM", what: "Qualifiers" },
  { time: "12:00 – 12:15 PM", what: "Review, contest & finalize scores" },
  { time: "12:15 PM", what: "Bump recognitions & Division 1 awards" },
  { time: "12:30 PM", what: "Finals & awards" },
];

const WHSCL_COMPDAY_AFTERNOON = [
  { time: "1:45 – 2:00 PM", what: "Volunteer check-in & lunch" },
  { time: "2:00 – 2:45 PM", what: "Volunteer orientation" },
  { time: "2:00 – 2:30 PM", what: "Competitor check-in" },
  { time: "2:30 – 2:45 PM", what: "Coaches' meeting" },
  { time: "2:45 – 3:00 PM", what: "Competition & rules overview" },
  { time: "3:00 – 6:00 PM", what: "Qualifiers" },
  { time: "6:00 – 6:15 PM", what: "Review, contest & finalize scores" },
  { time: "6:15 PM", what: "Bump recognitions & Division 1 awards" },
  { time: "6:15 PM", what: "Finals & awards" },
];

const WHSCL_COMPDAY_NOTE = "Only top rope competitions have a finals round. At bouldering competitions, awards are given for all categories.";


/* ---------------------------------------------------------------------------
   PAST RESULTS AND PHOTOS
   Add last season's competitions here when you roll over to a new season.
   --------------------------------------------------------------------------- */
const WHSCL_PAST_SEASON = "2025–2026";
const WHSCL_PAST_NOTE = "Results and photos from the previous season, hosted on the WHSCL scoring app and Google Photos.";

const WHSCL_PAST_RESULTS = [
  { name: "Competition 1", date: "December 13, 2025", location: "Adventure Rock Walker's Point",
    discipline: "Bouldering",
    results: "https://whscl.climbcomp.app/competition/2526-competition-1",
    photos: "https://photos.app.goo.gl/rFcrX49GbxhMRtTu5" },
  { name: "Competition 2", date: "January 10, 2026", location: "Odyssey Climbing + Fitness Appleton",
    discipline: "Top Rope",
    results: "https://whscl.climbcomp.app/competition/2526-competition-2",
    photos: "https://photos.google.com/share/AF1QipNuPkmdjh07CNZWgsfr3KCSgwR5iP1YPfp5osUBE8qVVj7XS2HnOGt-euKd7qLVsg?key=bjdRVnlINk5tUmV2V3BZZFF6Zk9QOXNqeUxnTTlB" },
  { name: "Competition 3", date: "February 7, 2026", location: "Adventure Rock Milwaukee",
    discipline: "Top Rope",
    results: "https://whscl.climbcomp.app/competition/2526-competition-3",
    photos: "https://photos.app.goo.gl/RpbPLUHK8KJwBgH3A" },
  { name: "Competition 4", date: "March 14, 2026", location: "Odyssey Climbing + Fitness Green Bay",
    discipline: "Bouldering",
    results: "https://whscl.climbcomp.app/competition/2526-competition-4",
    photos: "https://photos.app.goo.gl/AFo4HVQNj1fHqwUB9" },
  { name: "Competition 5", date: "April 11, 2026", location: "Adventure Rock Brookfield",
    discipline: "Top Rope",
    results: "https://whscl.climbcomp.app/competition/2526-competition-5",
    photos: "https://photos.app.goo.gl/qbQAxNayEcMTNhch7" },
  { name: "State Finals", date: "April 25, 2026", location: "Adventure Rock Milwaukee",
    discipline: "Top Rope & Bouldering",
    results: "https://whscl.climbcomp.app/competition/2526-state-finals",
    photos: "https://photos.app.goo.gl/xvwWAZ3qHEeoKsSL6" },
];


/* ---------------------------------------------------------------------------
   HANGOUT SIGN-UP
   One button for all High School Hangouts, since booking runs through
   Adventure Rock's own calendar. Paste the booking address between the quotes
   and the button turns on. Leave "" and no button appears at all.
   --------------------------------------------------------------------------- */
const WHSCL_HANGOUT_LINK = "";
const WHSCL_HANGOUT_LINK_LABEL = "Sign up for a Hangout";

/* ============================================================================
   RESOURCES - the document and link library
   ============================================================================

   Same four rules as the other data files.

   category must be one of these four, spelled exactly:
     "Athletes & Families"
     "Competition"
     "Coaches"
     "Starting a Team"
   The filter buttons at the top of the page build themselves from whatever
   categories you use here.

   url can be:
     a web address ....... "https://example.com/handbook.pdf"
     a file in this folder "WHSCL-Handbook-2026-2027.pdf"
     a page on this site . "season.html" or "season.html#fees"
     nothing yet ......... ""  (the card shows with no button)

   meta ..... the small grey line above the title, e.g. "PDF - 2026-2027"
   status ... an extra grey note under the description, e.g. "Coming soon".
              Leave "" when the resource is ready.

   TEMPLATE:
     {
       category: "Athletes & Families",
       title: "Document Name",
       description: "One or two sentences about what this is.",
       url: "",
       meta: "PDF",
       status: "Coming soon",
     },
   ========================================================================= */

const WHSCL_RESOURCES = [
  {
    category: "Athletes & Families",
    title: "WHSCL Handbook",
    description: "Mission and values, Code of Conduct, and eligibility rules for athletes, teams, coaches, student leaders, and volunteer judges.",
    url: "https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:452bdd93-11c1-4ed7-ad93-93e8c97d041c",
    meta: "PDF · 2025–2026 edition",
    status: "2026–2027 edition to be posted",
  },
  {
    category: "Athletes & Families",
    title: "Season calendar",
    description: "Every competition, High School Hangout, registration window, and closure date for the 2026–2027 season.",
    url: "season.html",
    meta: "On this site",
    status: "",
  },
  {
    category: "Athletes & Families",
    title: "Code of Conduct",
    description: "Five guiding principles — safety, respect, sportsmanship, inclusivity, responsibility — with expectations for athletes, coaches, parents, and volunteers. Signed by every athlete with the annual league fee.",
    url: "",
    meta: "Included in the Handbook",
    status: "Standalone public PDF to be posted",
  },
  {
    category: "Athletes & Families",
    title: "Fees & what's included",
    description: "League fee, competition fee, practice access, and clinic costs.",
    url: "registration.html",
    meta: "On this site",
    status: "",
  },
  {
    category: "Athletes & Families",
    title: "WHSCL email list",
    description: "Season announcements, competition reminders, and event news.",
    url: "https://lp.constantcontactpages.com/sl/6DVQfe1/WHSCL",
    meta: "Sign-up form",
    status: "",
  },
  {
    category: "Competition",
    title: "WHSCL Rulebook",
    description: "Competition formats, scoring and ranking, State Finals procedures, tie breakers, bumping, technical incidents, and appeals.",
    url: "https://adventurerock.com/wp-content/uploads/2025/09/WHSCL-Rulebook-2025-2026.pdf",
    meta: "PDF · 2025–2026 edition",
    status: "2026–2027 edition to be posted",
  },
  {
    category: "Competition",
    title: "Live results & past scores",
    description: "The WHSCL scoring app carries live standings during competitions and full results afterward.",
    url: "https://whscl.climbcomp.app/",
    meta: "External · climbcomp.app",
    status: "",
  },
  {
    category: "Competition",
    title: "Scoring app tutorial",
    description: "Short video walkthrough of registration, scorecards, and how judges enter attempts.",
    url: "https://adventurerock.com/wp-content/uploads/2025/12/WHSCL-Scoring-App-Tutorial.mp4",
    meta: "Video",
    status: "",
  },
  {
    category: "Competition",
    title: "Divisions & competition day schedule",
    description: "Top rope and bouldering divisions, self-selection rules, and the morning/afternoon session timeline.",
    url: "season.html#divisions",
    meta: "On this site",
    status: "",
  },
  {
    category: "Coaches",
    title: "Coach eligibility & responsibilities",
    description: "Age and background requirements, practice and competition attendance, communication expectations, and coach benefits.",
    url: "https://adventurerock.com/wp-content/uploads/2025/09/WHSCL-Handbook-2025-2026.pdf",
    meta: "Handbook, section 3",
    status: "2026–2027 edition to be posted",
  },
  {
    category: "Coaches",
    title: "Volunteer judge requirements",
    description: "How many volunteer judges each team must provide per competition, based on roster size.",
    url: "https://adventurerock.com/wp-content/uploads/2025/09/WHSCL-Handbook-2025-2026.pdf",
    meta: "Handbook, section 5",
    status: "2026–2027 edition to be posted",
  },
  {
    category: "Starting a Team",
    title: "Six-step team startup",
    description: "Establish a coach and student leader, meet with school administration, schedule your dates, hold a school meeting, run a free climbing day, then hold your first practice.",
    url: "resources.html#startup-steps",
    meta: "On this site",
    status: "",
  },
  {
    category: "Starting a Team",
    title: "Coach Agreement",
    description: "Startup and season responsibilities, plus coach benefits including a free family membership at the team's host facility.",
    url: "",
    meta: "Startup Packet",
    status: "Public PDF to be posted",
  },
  {
    category: "Starting a Team",
    title: "Student Leader Agreement",
    description: "Responsibilities and benefits for the student leader role, including a 50% membership discount.",
    url: "",
    meta: "Startup Packet",
    status: "Public PDF to be posted",
  },
  {
    category: "Starting a Team",
    title: "Talk to the League Director",
    description: "Lizzy Beach helps new schools plan a free climbing day, schedule a first practice, and connect with a host facility.",
    url: "mailto:lizzy@adventurerock.com",
    meta: "lizzy@adventurerock.com · 262-790-6800 x105",
    status: "",
  },
];

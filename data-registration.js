/* ============================================================================
   REGISTRATION PAGE
   ============================================================================

   Everything on the Registration page is in this one file. Edit it in any
   plain text editor, save, then hard-refresh the browser
   (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac).

   ---------------------------------------------------------------------------
   THE FOUR RULES (same as every other data file)
   ---------------------------------------------------------------------------
   1. Text goes inside "double quotes".
   2. Every line ends with a comma.
   3. Leave a value empty by using "" — never delete the line.
   4. Straight quotes only. Curly quotes look identical but break the file.

   If the page goes blank after an edit, undo it (Ctrl+Z / Cmd+Z), save, and
   refresh. Then redo the change more slowly.

   ---------------------------------------------------------------------------
   THE MOST COMMON JOB: TURNING ON A SIGN-UP BUTTON
   ---------------------------------------------------------------------------
   Scroll down to WHSCL_REGISTRATION_GROUPS and paste the sign-up address
   between the quotes on the url line:

       { label: "Brookfield League Fee", url: "https://..." },

   That is it. A button with an empty url shows greyed out reading
   "link coming", so an unfinished link can never look clickable.

   ---------------------------------------------------------------------------
   NOT IN THIS FILE
   ---------------------------------------------------------------------------
   The High School Hangout sign-up button lives in data-season.js, next to the
   Hangout dates it belongs to. Look for WHSCL_HANGOUT_LINK there.
   ========================================================================= */


/* ---------------------------------------------------------------------------
   1. THE TOP OF THE PAGE
   --------------------------------------------------------------------------- */
const WHSCL_REGISTRATION_PAGE = {
  eyebrow: "Join the league",
  heading: "Registration",
  intro: "Every student athlete pays a $25 league fee once per season. Sign up through your team\u2019s practice facility below \u2014 the same form signs the WHSCL Code of Conduct and enrols you in your team\u2019s practice.",
};


/* ---------------------------------------------------------------------------
   2. THE LEAGUE FEE HEADLINE
   The big red figure near the top of the page.
   --------------------------------------------------------------------------- */
const WHSCL_LEAGUE_FEE = {
  eyebrow: "Step one",
  heading: "League fee",
  amount: "$25 / year",
  detail: "Annual fee paid by each student athlete to cover league-wide expenses.",
};


/* ---------------------------------------------------------------------------
   3. THE SIGN-UP BUTTONS
   ---------------------------------------------------------------------------
   Each group is a box on the page with its own heading, paragraph, and set of
   buttons. Groups appear in the order written here.

   TO ADD A BUTTON to an existing group, copy a url line inside its buttons
   list and change the label:

       { label: "Madison League Fee", url: "" },

   TO REMOVE A BUTTON, delete its whole line.

   TO ADD A WHOLE NEW GROUP, copy one of the blocks below, paste it after the
   last one, and change the heading, intro and buttons:

       {
         heading: "Teams practising at Greater Heights",
         intro: "One sentence explaining who this is for.",
         buttons: [
           { label: "Madison League Fee", url: "" },
         ],
       },

   TO REMOVE A GROUP, delete from its opening { down to its closing }, comma
   included.
   --------------------------------------------------------------------------- */
const WHSCL_REGISTRATION_GROUPS = [

  {
    heading: "Teams practising at Adventure Rock",
    intro: "If your team practices at Adventure Rock, select your team\u2019s practice location below to sign up for your team\u2019s practice, sign the WHSCL Code of Conduct, and pay your $25 league fee.",
    buttons: [
      { label: "Brookfield League Fee", url: "https://portal.adventurerock.com/brookfield/programs/WHSCLPracticeCalendar?_gl=1*v7zm3e*_gcl_au*MjkzMDU2ODk4LjE3ODg4OTcxOTg.*_ga*NTMyOTk2MDkxLjE3ODg4OTcxOTg.*_ga_D6MCMMKJ4H*czE3ODg4OTcxOTgkbzEkZzEkdDE3ODg4OTgzMTkkajM5JGwwJGgw" },
      { label: "Milwaukee League Fee", url: "https://portal.adventurerock.com/milwaukee/programs/WHSCLPracticeCalendar?_gl=1*wcd8q1*_gcl_au*MjkzMDU2ODk4LjE3ODg4OTcxOTg.*_ga*NTMyOTk2MDkxLjE3ODg4OTcxOTg.*_ga_D6MCMMKJ4H*czE3ODg4OTcxOTgkbzEkZzEkdDE3ODg4OTgzMzMkajI1JGwwJGgw" },
      { label: "Walker\u2019s Point League Fee", url: "https://portal.adventurerock.com/walkerspoint/programs/WHSCLPracticeCalendar?_gl=1*shs0xd*_gcl_au*MjkzMDU2ODk4LjE3ODg4OTcxOTg.*_ga*NTMyOTk2MDkxLjE3ODg4OTcxOTg.*_ga_D6MCMMKJ4H*czE3ODg4OTcxOTgkbzEkZzEkdDE3ODg4OTgzNDMkajE1JGwwJGgw" },
    ],
  },

  {
    heading: "Everyone else",
    intro: "If your team practices at Odyssey Climbing + Fitness, Climb @ the Loop, Greater Heights, Fond du Lac, New London, or anywhere else outside of Adventure Rock, select the option below to sign the WHSCL Code of Conduct and pay your $25 league fee.",
    buttons: [
      { label: "League Fee for Non-Adventure Rock based Teams", url: "https://portal.adventurerock.com/brookfield/memberships/WHSCLLeagueFeeM?_gl=1*1pyzwfk*_gcl_au*MjkzMDU2ODk4LjE3ODg4OTcxOTg.*_ga*NTMyOTk2MDkxLjE3ODg4OTcxOTg.*_ga_D6MCMMKJ4H*czE3ODg4OTcxOTgkbzEkZzEkdDE3ODg4OTgzNjQkajYwJGwwJGgw" },
    ],
  },

];


/* ---------------------------------------------------------------------------
   4. THE FEE TABLE
   ---------------------------------------------------------------------------
   amount is the bold red figure, detail is the sentence underneath.

   TO ADD A FEE, copy a line and change it. TO REMOVE ONE, delete its line.
   --------------------------------------------------------------------------- */
const WHSCL_FEES_SECTION = {
  eyebrow: "What it costs",
  heading: "All fees",
  intro: "Competition fees are paid to the host facility at registration. A membership or day pass to the host gym is also required on competition day.",
};

const WHSCL_FEES = [
  { label: "League fee", amount: "$25 / year", detail: "Annual fee paid by each student athlete to cover league-wide expenses." },
  { label: "Competition fee", amount: "$20 / competition", detail: "Price per competitor per competition for all qualifying competitions." },
  { label: "State Finals", amount: "$50 / competitor", detail: "Price per competitor. Students must compete in two competitions to qualify for State Finals." },
  { label: "Practice access", amount: "Varies by facility", detail: "Contact your coach or home facility about membership and day-pass options." },
  { label: "Clinics", amount: "Free \u2013 $5", detail: "Belaying and knot tying classes are free; other instruction is $5 per person. Both need at least six participants registered one week before the class." },
];


/* ---------------------------------------------------------------------------
   5. THE HELP BOX AT THE BOTTOM
   --------------------------------------------------------------------------- */
const WHSCL_REGISTRATION_HELP = {
  eyebrow: "Questions",
  heading: "Not sure which option to pick?",
  intro: "Your coach can confirm which facility your team registers through. The League Director can help with anything else.",
  buttons: [
    { label: "Email the League Director", url: "mailto:lizzy@adventurerock.com" },
    { label: "262-790-6800 x105", url: "tel:+12627906800,105" },
  ],
};

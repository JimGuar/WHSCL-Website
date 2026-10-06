/* ============================================================================
   TEAMS AND PRACTICE TIMES
   ============================================================================

   This file holds every team in the league. Edit it in any plain text editor
   (Notepad, TextEdit, VS Code). Save the file, then refresh the web page.

   ---------------------------------------------------------------------------
   THE RULES (there are only four)
   ---------------------------------------------------------------------------
   1. Text goes inside "double quotes".
   2. Every line ends with a comma.
   3. Leave a value empty by using "" — never delete the line.
   4. If you need a quote mark inside text, write it as \"

   If the page goes blank after an edit, you missed a quote or a comma.
   Undo your change (Ctrl+Z / Cmd+Z), save, and refresh.

   ---------------------------------------------------------------------------
   HOW TO ADD A NEW TEAM
   ---------------------------------------------------------------------------
   Copy this template, paste it in with the other teams, and fill it in.
   Alphabetical order is nice but not required — the site sorts them for you.

     {
       name: "Example High School",
       conference: "A",
       region: "",
       facility: "Adventure Rock Brookfield",
       practiceDay: "Tuesday",
       practiceTime: "4:00-6:00 PM",
       instagram: "",
       notes: "",
       coaches: [
         { name: "Coach Name", role: "Coach", email: "coach@school.org", photo: "" },
       ],
     },

   FIELD BY FIELD
     name ............ School or team name, exactly as it should appear.
     conference ...... "A" or "B". Leave "" if not yet assigned.
     region .......... Leave "" for now. Regions are not decided yet. When they
                       are, fill this in and a Region filter appears by itself.
     facility ........ Where the team practices. Type it EXACTLY the same way
                       for every team at that gym, or you will get two tabs.
     practiceDay ..... "Monday", "Tuesday", etc. Leave "" if not set yet.
     practiceTime .... "4:00-6:00 PM". Leave "" if not set yet.
                       Empty day and time show as "To be confirmed".
     instagram ....... Full web address, or "".
     notes ........... One sentence shown on the team's detail panel, or "".
     coaches ......... One line per coach. role can be "Coach",
                       "Assistant Coach", "Faculty Advisor", or anything else.
                       photo is the image file name sitting in this same
                       folder. Leave "" and the site shows initials instead.

   ---------------------------------------------------------------------------
   HOW TO REMOVE A TEAM
   ---------------------------------------------------------------------------
   Delete from its opening { down to its closing }, including the comma.

   ---------------------------------------------------------------------------
   HOW A NEW GYM GETS ITS OWN PRACTICE TAB
   ---------------------------------------------------------------------------
   Automatically. Give a team a new facility name — say "Boulders Climbing Gym,
   La Crosse" — and a tab for it appears on the Teams page with no other work.
   To control where it sits in the tab order, add it to the list below too.
   ========================================================================= */


/* Optional. Controls the order of the practice tabs and shows the city under
   each gym name. Any gym you forget still appears, just at the end. */
const WHSCL_FACILITIES = [
  { name: "Adventure Rock Brookfield", city: "Brookfield", note: "" },
  { name: "Adventure Rock Milwaukee", city: "Milwaukee", note: "" },
  { name: "Adventure Rock Walker's Point", city: "Milwaukee", note: "" },
  { name: "Odyssey Climbing + Fitness Appleton", city: "Appleton", note: "" },
  { name: "Odyssey Climbing + Fitness Green Bay", city: "Green Bay", note: "" },
  { name: "Greater Heights", city: "Madison", note: "" },
  { name: "Climb @ the Loop", city: "Burlington", note: "" },
  { name: "Fond Du Lac High School", city: "Fond du Lac", note: "" },
  { name: "New London High School", city: "New London", note: "" },
];


const WHSCL_TEAMS = [

  {
    name: "Appleton East",
    conference: "A",
    region: "",
    facility: "Odyssey Climbing + Fitness Appleton",
    practiceDay: "Monday",
    practiceTime: "4:00–6:00 PM",
    instagram: "https://www.instagram.com/aasd.climbingteam/",
    notes: "",
    coaches: [
      { name: "Saurav Rana", role: "Coach", email: "ranasaurav@aasd.k12.wi.us", photo: "Appleton_East_Coach__Saurav_Rana_square.jpg" },
    ],
  },
  {
    name: "Appleton North",
    conference: "A",
    region: "",
    facility: "Odyssey Climbing + Fitness Appleton",
    practiceDay: "",
    practiceTime: "",
    instagram: "https://www.instagram.com/appleton_north_climbing_team/",
    notes: "",
    coaches: [
      { name: "Mitch Nichols", role: "Coach", email: "nicholsmitchel@aasd.k12.wi.us", photo: "Appleton_North_Coach__Mitch_Nichols_square.jpg" },
    ],
  },
  {
    name: "Appleton West",
    conference: "A",
    region: "",
    facility: "Odyssey Climbing + Fitness Appleton",
    practiceDay: "Monday",
    practiceTime: "4:00–6:00 PM",
    instagram: "https://www.instagram.com/aasd.climbingteam/",
    notes: "",
    coaches: [
      { name: "Christopher Stratton", role: "Coach", email: "strattonchrist@aasd.k12.wi.us", photo: "Appleton_West_Coach__Chris_Stratton.jpg" },
    ],
  },
  {
    name: "Arrowhead",
    conference: "A",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "Monday",
    practiceTime: "6:00–8:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Greg Ohme", role: "Coach", email: "greg.ohme@gmail.com", photo: "Arrowhead_Coach__Greg_Ohme.jpg" },
    ],
  },
  {
    name: "Bay Port",
    conference: "B",
    region: "",
    facility: "Odyssey Climbing + Fitness Green Bay",
    practiceDay: "Tuesday",
    practiceTime: "5:30–7:30 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Betsy Ferrebee", role: "Coach", email: "elizferr@hssdschools.org", photo: "Bay_Port_Coach__Betsy_Ferrebee_square.jpeg" },
    ],
  },
  {
    name: "Brookfield Academy",
    conference: "B",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "Monday",
    practiceTime: "3:30–5:30 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Dave Reiner", role: "Coach", email: "dave.reiner@brookfieldacademy.org", photo: "Brookfield_Academy_Coach__Dave_Reiner_square.jpg" },
      { name: "Trevor Russell", role: "Coach", email: "trevor.russell@brookfieldacademy.org", photo: "Brookfield_Academy_Coach__Trevor_Russell_square.jpg" },
    ],
  },
  {
    name: "Brookfield Central",
    conference: "B",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "Monday",
    practiceTime: "3:30–5:30 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Riley Brewer", role: "Coach", email: "brewerr@elmbrookschools.org", photo: "Brookfield_East_Coach_Fall_2023__Riley_Brewer_square.jpg" },
    ],
  },
  {
    name: "Brookfield East",
    conference: "B",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "Monday",
    practiceTime: "3:30–5:30 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Riley Brewer", role: "Coach", email: "brewerr@elmbrookschools.org", photo: "Brookfield_East_Coach_Fall_2023__Riley_Brewer_square.jpg" },
    ],
  },
  {
    name: "Climb @ the Loop",
    conference: "B",
    region: "",
    facility: "Climb @ the Loop",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "Composite team for Burlington-area high schools.",
    coaches: [
      { name: "Bevin Dawson", role: "Coach", email: "climbattheloop@gmail.com", photo: "Climb__the_Loop_Coach__Bevin_Dawson_square.jpg" },
    ],
  },
  {
    name: "De Pere",
    conference: "B",
    region: "",
    facility: "Odyssey Climbing + Fitness Green Bay",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Sam Johnson", role: "Coach", email: "samuel.johnson.wi@gmail.com", photo: "De_Pere_Coach__Sam_Johnson_square.jpg" },
    ],
  },
  {
    name: "Dominican",
    conference: "B",
    region: "",
    facility: "Adventure Rock Milwaukee",
    practiceDay: "Friday",
    practiceTime: "4:00–6:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Patrick Linn", role: "Coach", email: "patjlinn@gmail.com", photo: "Dominican_Coach_Fall_2023__Patrick_Linn_square.jpg" },
    ],
  },
  {
    name: "Edgewood",
    conference: "B",
    region: "",
    facility: "Greater Heights",
    practiceDay: "Friday",
    practiceTime: "7:00–9:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Natalie Koblenski", role: "Coach", email: "natalie.koblenski@edgewoodhs.org", photo: "Edgewood_Coach__Natalie_Koblenski_square.jpg" },
    ],
  },
{
    name: "Fond Du Lac",
    conference: "B",
    region: "",
    facility: "Fond Du Lac High School",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Linda Diedrich", role: "Coach", email: "diedrichl@fonddulac.k12.wi.us", photo: "Fond_Du_Lac_Coach__Linda_Diedrich_square.jpg" },
      { name: "Rayelle Diedrich", role: "Coach", email: "diedrichr@fonddulac.k12.wi.us", photo: "" },
    ],
  },
  {
    name: "Fox Valley Lutheran",
    conference: "A",
    region: "",
    facility: "Odyssey Climbing + Fitness Appleton",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Ben Stern", role: "Coach", email: "bstern@fvlhs.org", photo: "Fox_Valley_Lutheran_Coach__Ben_Stern.jpg" },
      { name: "Jason Barber", role: "Coach", email: "jasonbarber20@gmail.com", photo: "" },
    ],
  },
  {
    name: "Green Bay Preble",
    conference: "B",
    region: "",
    facility: "Odyssey Climbing + Fitness Green Bay",
    practiceDay: "Thursday",
    practiceTime: "6:00–8:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Andrew Bobholz", role: "Coach", email: "abobholz@gbaps.org", photo: "Green_Bay_Preble_Coach__Andy_Bobholz.png" },
    ],
  },
  {
    name: "Green Bay Southwest",
    conference: "B",
    region: "",
    facility: "Odyssey Climbing + Fitness Green Bay",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Patrick Thornton", role: "Coach", email: "pmthornton@gbaps.org", photo: "Green_Bay_Southwest_Coach__Patrick_Thornton.jpeg" },
    ],
  },
  {
    name: "Homeschool",
    conference: "B",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "Wednesday",
    practiceTime: "4:00–6:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Nick Olig", role: "Coach", email: "n.f.olig@gmail.com", photo: "Homeschool_South_Coach__Nick_Olig.jpg" },
    ],
  },
  {
    name: "Homestead",
    conference: "A",
    region: "",
    facility: "Adventure Rock Milwaukee",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Danielle Gagliano", role: "Coach", email: "danielle.gagliano@gmail.com", photo: "Homestead_Coach__Danielle_Gagliano_square.jpg" },
    ],
  },
  {
    name: "Hortonville",
    conference: "A",
    region: "",
    facility: "Odyssey Climbing + Fitness Appleton",
    practiceDay: "Thursday",
    practiceTime: "5:00–7:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Alaina Nesbitt", role: "Coach", email: "alainanesbitt@hasd.org", photo: "Hortonville_Coach__Alaina_Nesbitt_square.jpg" },
      { name: "Laura Kuether", role: "Coach", email: "laurakuether@hasd.org", photo: "Hortonville_Coach__Laura_Kuether_square.jpg" },
    ],
  },
  {
    name: "Kettle Moraine",
    conference: "A",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "Wednesday",
    practiceTime: "7:30–9:30 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Andy Cassini", role: "Coach", email: "cassinia@kmsd.edu", photo: "Kettle_Moraine_Coach_Fall_2022__Andy_Cassini_square.jpg" },
      { name: "David Wentworth", role: "Assistant Coach", email: "", photo: "" },
    ],
  },
  {
    name: "Kimberly",
    conference: "A",
    region: "",
    facility: "Odyssey Climbing + Fitness Appleton",
    practiceDay: "Monday",
    practiceTime: "6:00–8:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Holly Geyer", role: "Coach", email: "hgeyer@kimberly.k12.wi.us", photo: "Kimberly_Coach__Holly_Geyer_square.jpg" },
    ],
  },
  {
    name: "Lake Country Lutheran",
    conference: "B",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Allison Hertel", role: "Coach", email: "allisonhertel777@gmail.com", photo: "" },
    ],
  },
  {
    name: "Little Chute",
    conference: "A",
    region: "",
    facility: "Odyssey Climbing + Fitness Green Bay",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Timothy Bruce", role: "Coach", email: "deacsoft@gmail.com", photo: "" },
    ],
  }, 
 {
    name: "Marquette University High School / DSHA",
    conference: "B",
    region: "",
    facility: "Adventure Rock Milwaukee",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "Marquette University High School and Divine Savior Holy Angels practice and compete as one team.",
    coaches: [
      { name: "Chris Reis", role: "Coach", email: "reis@muhs.edu", photo: "MUHS__DSHA_Coach__Chris_Reis_square.png" },
      { name: "Linda Reis", role: "Coach", email: "skiel@yahoo.com", photo: "MUHS__DSHA_Coach__Linda_Reis_square.jpeg" },
    ],
  },
  {
    name: "Menomonee Falls",
    conference: "A",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "Coach listed as TBD in the 2026–2027 binder.",
    coaches: [
      { name: "Coach position open", role: "Coach", email: "", photo: "" },
    ],
  },
  {
    name: "Milwaukee School of Languages",
    conference: "A",
    region: "",
    facility: "Adventure Rock Milwaukee",
    practiceDay: "Wednesday",
    practiceTime: "6:00–8:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Hunter Resler", role: "Coach", email: "reslerhm@milwaukee.k12.wi.us", photo: "MSL_Coach__Hunter_Resler_square.jpg" },
      { name: "Sarah Fadness", role: "Coach", email: "sarahfad68@icloud.com", photo: "" },
    ],
  },
  {
    name: "Mukwonago",
    conference: "B",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "Friday",
    practiceTime: "4:00–6:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Dan Mayer", role: "Coach", email: "mayer.dan@gmail.com", photo: "Mukwonago_Coach__Dan_Mayer.jpg" },
    ],
  },
  {
    name: "NEWCHAA",
    conference: "B",
    region: "",
    facility: "Odyssey Climbing + Fitness Green Bay",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "Northeast Wisconsin Christian Homeschool Athletic Association.",
    coaches: [
      { name: "Cara Lederer", role: "Coach", email: "caralederer@gmail.com", photo: "Homeschool_North_Coach__Cara_Lederer_square.jpg" },
    ],
  },
  {
    name: "Nathan Hale",
    conference: "B",
    region: "",
    facility: "Adventure Rock Milwaukee",
    practiceDay: "Monday",
    practiceTime: "4:00–6:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Skye LeFay", role: "Coach", email: "frankmanns@wawmsd.org", photo: "Nathan_Hale_Coach__Skye_LeFay_square.jpg" },
    ],
  },
  {
    name: "New London",
    conference: "B",
    region: "",
    facility: "New London High School",
    practiceDay: "Monday",
    practiceTime: "3:30–5:30 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Tiffany Schulz", role: "Coach", email: "tschulz@newlondon.k12.wi.us", photo: "New_London_Coach_Fall_2023__Tiffany_Schulz_square.jpg" },
      { name: "Matt Radtke", role: "Assistant Coach", email: "", photo: "New_London_Coach__Matthew_Radtke_square.JPG" },
    ],
  },
  {
    name: "Nicolet",
    conference: "A",
    region: "",
    facility: "Adventure Rock Milwaukee",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Dan Herwig", role: "Coach", email: "climbnicolet@gmail.com", photo: "Nicolet_Coach__Dan_Herwig_square.jpeg" },
      { name: "Sarah Richter", role: "Faculty Advisor", email: "sarah.richter@nicolet.us", photo: "" },
    ],
  },
  {
    name: "Notre Dame Academy",
    conference: "B",
    region: "",
    facility: "Odyssey Climbing + Fitness Green Bay",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Jen Foster", role: "Coach", email: "jennifer.foster@emplifyhealth.org", photo: "Notre_Dame_Academy_Coach__Jen_Foster_square.jpeg" },
    ],
  },
  {
    name: "Oconomowoc",
    conference: "A",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "Friday",
    practiceTime: "5:00–7:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Abigail Cridelich", role: "Coach", email: "cridelicha@oasd.org", photo: "Oconomowoc_Coach__Abigail_Cridelich_square.jpg" },
    ],
  },
  {
    name: "Pewaukee",
    conference: "A",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "Wednesday",
    practiceTime: "3:00–5:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "James Sevens", role: "Coach", email: "sevejam@pewaukeeschools.org", photo: "Pewaukee_Coach_Fall_2022__James_Sevens_square.jpg" },
      { name: "Nadine Sevens", role: "Coach", email: "sevenad@pewaukeeschools.org", photo: "Pewaukee_Coach__Nadine_Sevens_square.jpg" },
    ],
  },
  {
    name: "Ronald Reagan",
    conference: "A",
    region: "",
    facility: "Adventure Rock Walker's Point",
    practiceDay: "Thursday",
    practiceTime: "6:00–8:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Matt Sanders", role: "Coach", email: "sanderm1@milwaukee.k12.wi.us", photo: "Ronald_Reagan_Coach__Matt_Sanders.jpg" },
    ],
  },
  {
    name: "Rufus King",
    conference: "A",
    region: "",
    facility: "Adventure Rock Milwaukee",
    practiceDay: "Monday",
    practiceTime: "7:00–9:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Tory Kress", role: "Coach", email: "tory.kress@gmail.com", photo: "Rufus_King_Coach__Tory_Kress_square.jpg" },
      { name: "Hannah Murphy", role: "Coach", email: "", photo: "Rufus_King_Coach__Hannah_Murphy_square.jpg" },
      { name: "Vicente Delgado", role: "Coach", email: "", photo: "Rufus_King_Coach__Vicente_Delgado_square.jpg" },
    ],
  },
  {
    name: "Shorewood",
    conference: "B",
    region: "",
    facility: "Adventure Rock Milwaukee",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "",
    coaches: [
      { name: "John Hayes", role: "Coach", email: "shs.compclimbteam@gmail.com", photo: "Shorewood_Coach__John_Hayes_square.jpg" },
    ],
  },
  {
    name: "Sussex Hamilton",
    conference: "B",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "Thursday",
    practiceTime: "3:30–5:30 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Molly Dederich", role: "Coach", email: "dedemo@hamilton.k12.wi.us", photo: "Sussex_Hamilton_Coach_Fall_2022__Molly_Dederich_square.jpg" },
      { name: "Savannah Brant", role: "Coach", email: "sbrant2018@gmail.com", photo: "Sussex_Hamilton_Coach__Savannah_Brant_square.jpeg" },
    ],
  },
  {
    name: "University School of Milwaukee",
    conference: "B",
    region: "",
    facility: "Adventure Rock Milwaukee",
    practiceDay: "Monday",
    practiceTime: "5:00–7:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Dr. Sun Lee", role: "Coach", email: "slee@usm.org", photo: "USM_Coach__Sun_Lee_square.jpg" },
    ],
  },
  {
    name: "Valley Christian",
    conference: "A",
    region: "",
    facility: "Odyssey Climbing + Fitness Appleton",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Alex Niemi", role: "Coach", email: "adniemi98@gmail.com", photo: "" },
      { name: "Jesse Peterson", role: "Coach", email: "jessepeterson33@gmail.com", photo: "" },
    ],
  },
  {
    name: "Verona",
    conference: "A",
    region: "",
    facility: "Greater Heights",
    practiceDay: "Monday",
    practiceTime: "7:00–9:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Ilana Hoffer", role: "Coach", email: "hofferi@verona.k12.wi.us", photo: "Verona_Coach__Ilana_Hoffer_square.JPG" },
    ],
  },
  {
    name: "Waukesha North",
    conference: "A",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "Coach listed as TBD in the 2026–2027 binder. Practices with Waukesha South and Waukesha West.",
    coaches: [
      { name: "Coach position open", role: "Coach", email: "", photo: "" },
    ],
  },
  {
    name: "Waukesha South",
    conference: "A",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "Practices with Waukesha North and Waukesha West.",
    coaches: [
      { name: "Codey Gallas", role: "Coach", email: "cgallas@waukesha.k12.wi.us", photo: "Waukesha_South_Coach_Fall_2022__Codey_Gallas_square.jpg" },
    ],
  },
  {
    name: "Waukesha West",
    conference: "A",
    region: "",
    facility: "Adventure Rock Brookfield",
    practiceDay: "",
    practiceTime: "",
    instagram: "",
    notes: "Practices with Waukesha North and Waukesha South.",
    coaches: [
      { name: "Mitchell Mueller", role: "Coach", email: "mitchellmllr5@gmail.com", photo: "Waukesha_West_Coach_Fall_2022__Mitchell_Mueller_square.jpg" },
      { name: "Kat Mueller", role: "Coach", email: "kmueller@waukesha.k12.wi.us", photo: "Waukesha_West_Coach_Fall_2022__Kat_Enderby_square.jpg" },
    ],
  },
  {
    name: "Wauwatosa East",
    conference: "B",
    region: "",
    facility: "Adventure Rock Milwaukee",
    practiceDay: "Tuesday",
    practiceTime: "5:00–7:00 PM",
    instagram: "",
    notes: "Practices with Wauwatosa West.",
    coaches: [
      { name: "Noah Manke", role: "Coach", email: "mankeno@wauwatosa.k12.wi.us", photo: "Wauwatosa_East_West_Coach_Fall_2023__Noah_Manke_square.jpg" },
      { name: "Sean Hickey", role: "Coach", email: "hickeyse@wauwatosa.k12.wi.us", photo: "Wauwatosa_East_West_Coach_Fall_2023__Sean_Hickey_square.jpg" },
    ],
  },
  {
    name: "Wauwatosa West",
    conference: "B",
    region: "",
    facility: "Adventure Rock Milwaukee",
    practiceDay: "Tuesday",
    practiceTime: "5:00–7:00 PM",
    instagram: "",
    notes: "Practices with Wauwatosa East.",
    coaches: [
      { name: "Noah Manke", role: "Coach", email: "mankeno@wauwatosa.k12.wi.us", photo: "Wauwatosa_East_West_Coach_Fall_2023__Noah_Manke_square.jpg" },
      { name: "Sean Hickey", role: "Coach", email: "hickeyse@wauwatosa.k12.wi.us", photo: "Wauwatosa_East_West_Coach_Fall_2023__Sean_Hickey_square.jpg" },
    ],
  },
  {
    name: "Whitefish Bay",
    conference: "B",
    region: "",
    facility: "Adventure Rock Milwaukee",
    practiceDay: "Thursday",
    practiceTime: "6:00–8:00 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Brad Ferguson", role: "Coach", email: "brad.ferguson@wfbschools.com", photo: "Whitefish_Bay_Coach__Brad_Ferguson.jpg" },
      { name: "Drew Barnes", role: "Coach", email: "", photo: "" },
    ],
  },
  {
    name: "Wisconsin Lutheran",
    conference: "A",
    region: "",
    facility: "Adventure Rock Milwaukee",
    practiceDay: "Tuesday",
    practiceTime: "6:30–8:30 PM",
    instagram: "",
    notes: "",
    coaches: [
      { name: "Rachel Rosenberg", role: "Coach", email: "rachel.rosenberg@wlhs.org", photo: "Wisconsin_Lutheran_Coach_Fall_2023__Rachel_Rosenberg_square.jpg" },
      { name: "Tim Meister", role: "Coach", email: "", photo: "Wisconsin_Lutheran_Coach_Fall_2023__Tim_Meister_square.jpg" },
      { name: "Mical Schaffer", role: "Coach", email: "", photo: "Wisconsin_Lutheran_Coach_Fall_2023__Mical_Schaffer_square.jpg" },
      { name: "Bekah Schaffer", role: "Coach", email: "", photo: "Wisconsin_Lutheran_Coach_Fall_2023__Bekah_Schaffer_square.jpg" },
    ],
  },

];



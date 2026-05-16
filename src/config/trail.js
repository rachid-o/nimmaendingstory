// ============================================================
//  CONFIGURATIE — pas hier alles aan voor jullie tocht
// ============================================================

export const DEBUG_MODE = true; // ← zet op false vóór je deployt

export const PIN = "2006"; // PIN-code om de app te openen

export const WELCOME = {
  title: "20 Jaar Samen! 🗺️",
  message:
    "Lieve avonturiers,\n\nVandaag gaan jullie op pad langs plekken die er toe doen. Los de raadsels op, volg het kompas en geniet van elke stap samen.\n\nVeel plezier en succes!",
  photo: null, // Zet hier het pad naar een foto, bijv. "/photo.jpg"
};

export const STOPS = [
  {
    name: "Tijgerstraat",
    lat: 51.8282174,
    lng: 5.8433054,
    arrivalRadius: 30,
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Goed gedaan! Op naar de volgende stop.",
  },
  {
    name: "Multatuliplaats",
    lat: 51.8318952,
    lng: 5.8576368,
    arrivalRadius: 30,
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Goed gedaan! Op naar de volgende stop.",
  },
  {
    name: "Erasmusgebouw",
    lat: 51.819329,
    lng: 5.865646,
    arrivalRadius: 30,
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Goed gedaan! Op naar de volgende stop.",
  },
  {
    name: "LUX",
    lat: 51.8451501,
    lng: 5.867057,
    arrivalRadius: 10,
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Goed gedaan! Op naar de volgende stop.",
  },
  {
    name: "Hertogstraat",
    lat: 51.845777,
    lng: 5.8686818,
    arrivalRadius: 10,
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Goed gedaan! Op naar de volgende stop.",
  },
  {
    name: "Valkhof",
    lat: 51.847563,
    lng: 5.8705543,
    arrivalRadius: 30,
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Goed gedaan! Op naar de volgende stop.",
  },
  {
    name: "Speeltuin Planetenpark",
    lat: 51.838921,
    lng: 5.832842,
    arrivalRadius: 10,
    puzzle: {
      type: "riddle",
      question: "1 + 1 = ?",
      answer: "2",
      hints: ["Gebruik een rekenmachine"],
    },
    completeMessage: "Geweldig! Jullie eerste stop zit erop! 🎉",
  },
  {
    name: "Bankje Planetenpark",
    lat: 51.840211,
    lng: 5.833155,
    arrivalRadius: 20,
    puzzle: {
      type: "riddle",
      question:
        "Ik sta stil maar loop altijd door,\nIk heb wijzers maar geen handen.\nIk tick, ik tok, elk uur opnieuw —\nwat ben ik?",
      answer: "klok",
      hints: [
        "Ik heb geen mond, toch spreek ik de tijd.",
        "Je vindt me in bijna elke kamer thuis — aan de muur.",
      ],
    },
    completeMessage: "Geweldig! Jullie eerste stop zit erop! 🎉",
  },
  {
    name: "Midden in Planetenpark",
    lat: 51.838292,
    lng: 5.830611,
    arrivalRadius: 20,
    puzzle: {
      type: "memory",
      question:
        "Jullie eerste echte vakantie samen — welke stad was dat? Voer de naam van de stad in.",
      answer: "amsterdam",
      hints: [
        "De stad staat bekend om zijn grachten en fietsen.",
        "Het was ergens in Nederland — de hoofdstad.",
      ],
    },
    completeMessage:
      "Wat een mooie herinnering! Jullie zijn er bijna... ✨",
  },
  {
    name: "Speeltuin 2",
    lat: 51.8373541,
    lng: 5.8295025,
    arrivalRadius: 20,
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Goed gedaan! Op naar de volgende stop.",
  },
  {
    name: "Vogeltjes",
    lat: 51.8383303,
    lng: 5.8280723,
    arrivalRadius: 20,
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Goed gedaan! Op naar de volgende stop.",
  },
  {
    name: "Filimo",
    lat: 51.836357039896214,
    lng: 5.824969690886946,
    arrivalRadius: 20,
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Goed gedaan! Op naar de volgende stop.",
  },
  {
    name: "Steegje",
    lat: 51.835570,
    lng: 5.823362,
    arrivalRadius: 15,
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Goed gedaan! Op naar de volgende stop.",
  },
];

export const FINAL = {
  lat: 51.8376845,
  lng: 5.8325001,
  arrivalRadius: 30,
  title: "Jullie zijn er! 🥂",
  message:
    "20 jaar geleden begon het mooiste avontuur van jullie leven. Bedankt dat jullie samen zo'n inspirerend stel zijn.\n\nGefeliciteerd met jullie jubileum!",
};

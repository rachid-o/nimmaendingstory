// ============================================================
//  CONFIGURATIE — pas hier alles aan voor jullie tocht
// ============================================================

export const DEBUG_MODE = false;

export const PIN = "2006";
export const DEBUG_PIN = "12369874";

export const WELCOME = {
  title: "20 Jaar Samen! 🗺️",
  message:
    "Lieve avonturiers,\n\nVandaag gaan jullie op pad langs plekken die er toe doen. Volg het kompas, los puzzels op.\n\n"
    + "Neem fiets, pen en papier mee. Laat ons weten wanneer je gaat > hulplijn bellen\n"
    + "De route fietsen duurt 45 minuten. Je kunt elke dag gaan, zolang het licht is.\n\n"
    + "Veel plezier en succes!",
  photo: null, // Zet hier het pad naar een foto, bijv. "/photo.jpg"
};

export const STOPS = [
  {
    name: "Tijgerstraat 89",
    lat: 51.8280866,
    lng: 5.8431979,
    arrivalRadius: 20,
    showCat: true,
    cheatCode: "r2e9",
    arrivalMessage: "Jullie staan voor nummer 89. Een adres dat voor altijd een plekje in jullie hart heeft.\n\nDe tijd vliegt voorbij — maar herinneringen blijven.",
    puzzle: {
      type: "photo-order",
      question: "Zet de foto's in de juiste chronologische volgorde.\n\nKlik op de foto om te vergroten. Klik nog een keer om het weer te verkleinen",
      photos: [
        { label: "A", url: `${import.meta.env.BASE_URL}tijdvliegt/A.jpg` },
        { label: "B", url: `${import.meta.env.BASE_URL}tijdvliegt/B.jpg` },
        { label: "C", url: `${import.meta.env.BASE_URL}tijdvliegt/C.jpg` },
        { label: "D", url: `${import.meta.env.BASE_URL}tijdvliegt/D.jpg` },
        { label: "E", url: `${import.meta.env.BASE_URL}tijdvliegt/E.jpg` },
        { label: "F", url: `${import.meta.env.BASE_URL}tijdvliegt/F.jpg` },
        { label: "G", url: `${import.meta.env.BASE_URL}tijdvliegt/G.jpg` },
        { label: "H", url: `${import.meta.env.BASE_URL}tijdvliegt/H.jpg` },
      ],
      answer: "GECAFHBD",
      hints: ["hint 1", "hint 2"],
    },
    completeMessage: "Dit was de Tijgerstraat! Op naar de volgende stop.",
  },
  {
    name: "Café Hop en Heivuur",
    lat: 51.8154819,
    lng: 5.851123,
    arrivalRadius: 20,
    showCat: true,
    cheatCode: "c5h6",
    arrivalMessage: "Welkom bij Café Hop en Heivuur! Een gezellige plek voor een quiz",
    puzzle: {
      type: "multi-choice",
      question: "Beantwoord de 5 vragen.",
      questions: [
        {
          question: "Vraag 1?",
          options: ["Optie A", "Optie B", "Optie C", "Optie D", "Optie E", "Optie F"],
          answer: "A",
        },
        {
          question: "Vraag 2?",
          options: ["Optie A", "Optie B", "Optie C", "Optie D", "Optie E", "Optie F"],
          answer: "B",
        },
        {
          question: "Vraag 3?",
          options: ["Optie A", "Optie B", "Optie C", "Optie D", "Optie E", "Optie F"],
          answer: "C",
        },
        {
          question: "Vraag 4?",
          options: ["Optie A", "Optie B", "Optie C", "Optie D", "Optie E", "Optie F"],
          answer: "D",
        },
        {
          question: "Vraag 5?",
          options: ["Optie A", "Optie B", "Optie C", "Optie D", "Optie E", "Optie F"],
          answer: "E",
        },
      ],
      hints: ["hint 1", "hint 2"],
    },
    completeMessage: "Dit was Café Hop en Heivuur. Op naar de volgende stop.",
  }, 
  {
    name: "Erasmusplein",
    lat: 51.819329,
    lng: 5.865646,
    arrivalRadius: 15,
    showCat: true,
    cheatCode: "8ks4",
    arrivalMessage: "Jullie staan op het Erasmusplein. ",
    puzzle: {
      type: "multi",
      question: "Beantwoord de vragen bij de muurschilderingen. Blijf op het Erasmusplein (niet voorbij cultuur cafe of spar lopen)",
      questions: [
        { question: "Wat mag alleen hier in?'", answers: ["krant"] },
        { question: "Wat moet je doen?", answers: ["toe doe"] },
        { question: "Wie denkt anders dan ze doen?", answers: ["volt"] },
        { question: "Wat is voor elkaar?", answers: ["rookvrij terrein", "rookvrij"] },
      ],
      hints: ["hint 1", "hint 2"],
    },
    completeMessage: "Dit was het Erasmusgebouw.",
  },
  {
    name: "RSC",
    lat: 51.8185806,
    lng: 5.8669618,
    arrivalRadius: 20,
    showCat: true,
    cheatCode: "b9x4",
    arrivalMessage: "Hier is het RSC.",
    puzzle: {
      type: "text",
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" 
      +"\n\nHoe eindigt jullie reis?",
      answer: "Samen",
      hints: ["Het antwoord bestaat uit 5 karakters", "Het antwoord bestaat alleen uit letters"],
    },
    completeMessage: "Dit was het RSC (waar ANS zit) Op naar de volgende stop.",
  },  
  {
    name: "LUX",
    lat: 51.8451501,
    lng: 5.867057,
    arrivalRadius: 10,
    showCat: true,
    cheatCode: "p3n7",
    arrivalMessage: "Welkom bij LUX! Hét filmhuis van Nijmegen.\n\nHoeveel films kennen jullie eigenlijk?",
    puzzle: {
      type: "photo-quiz",
      question: "Welke film zie je op elke foto?",
      photos: [
        { url: `${import.meta.env.BASE_URL}filmquiz/1.jpg`, answer: "Lion King" },
        { url: `${import.meta.env.BASE_URL}filmquiz/2.jpg`, answer: "Terminator" },
        { url: `${import.meta.env.BASE_URL}filmquiz/3.jpg`, answer: "Life of Pi" },
        { url: `${import.meta.env.BASE_URL}filmquiz/4.jpg`, answer: "Godzilla" },
        { url: `${import.meta.env.BASE_URL}filmquiz/5.jpg`, answer: "E.T." },
        { url: `${import.meta.env.BASE_URL}filmquiz/6.jpg`, answer: "shining" },
        { url: `${import.meta.env.BASE_URL}filmquiz/7.jpg`, answer: "Madagascar" },
        { url: `${import.meta.env.BASE_URL}filmquiz/8.jpg`, answer: "Neverending Story" },
      ],
      hints: ["hint 1", "hint 2"],
    },
    completeMessage: "Dat was LUX!",
  },
  {
    name: "Hertogstraat",
    lat: 51.845777,
    lng: 5.8686818,
    arrivalRadius: 10,
    showCat: true,
    cheatCode: "6fq2",
    arrivalMessage: "Jullie zijn in de Hertogstraat, vlakbij het hart van Nijmegen. Een rustige straat met karakter.\n\nKijk eens goed om je heen.",
    puzzle: {
      type: "photo-authentic",
      question: "Welke foto's zijn origineel en welke zijn bewerkt?\n\nTik op een foto om hem te vergroten.",
      photos: [
        { url: `${import.meta.env.BASE_URL}hertogstraat/1.jpg`, authentic: true },
        { url: `${import.meta.env.BASE_URL}hertogstraat/2.jpg`, authentic: false },
        { url: `${import.meta.env.BASE_URL}hertogstraat/1.jpg`, authentic: true },
        { url: `${import.meta.env.BASE_URL}hertogstraat/1.jpg`, authentic: true },
        { url: `${import.meta.env.BASE_URL}hertogstraat/2.jpg`, authentic: false },
        { url: `${import.meta.env.BASE_URL}hertogstraat/2.jpg`, authentic: false },
      ],
      hints: ["TODO", "TODO"],
    },
    completeMessage: "Dit was de Hertogstraat. Op naar de volgende stop.",
  },
  {
    name: "Valkhof",
    lat: 51.847563,
    lng: 5.8705543,
    arrivalRadius: 30,
    showCat: true,
    cheatCode: "9mw5",
    arrivalMessage: "Jullie staan op het Valkhof — een van de mooiste en oudste plekken van Nijmegen. Hier kruisen de Waal, de Romeinse geschiedenis en het heden elkaar.\n\nNeem even de tijd om te kijken. En lees.",
    puzzle: {
      type: "multi",
      question: "Beantwoord de vragen bij het Valkhof.",
      questions: [
        {
          question: "Wie keek knarsetandend toe, hoe wrekende Romeinse legers naderen?",
          answers: ["claudius"],
        },
        {
          question: "Welke kleur heeft de circusachtige tent van het podium van de Kaaij?",
          answers: ["blauw wit", "wit blauw", "blauw en wit", "wit en blauw"],
        },
        {
          question: "Zoek de plek waarvan de tekst vrij vertaald is: 'Weet ge mij een plaats te noemen, die op zooveel schoons kan roemen'? Geniet van het uitzicht van de Waal en vertel me: wat is Nijmegen?",
          answers: ["gastvrij"],
        },
        {
          question: "TODO 1",
          answers: ["1"],
        },
        {
          question: "TODO 2",
          answers: ["2"],
        },
      ],
      hints: ["Vraag 4: Antw 1", "Vraag 5: Antw 2"],
    },
    completeMessage: "Dit was het Valkhof. Op naar de volgende stop.",
  },
  {
    name: "Café de Burgemeester",
    lat: 51.8476145,
    lng: 5.8648496,
    arrivalRadius: 10,
    showCat: true,
    cheatCode: "k3p7",
    arrivalMessage: `
De donderdag is date night! Een mooie traditie.

Eén keer was het zelfs zo gezellig, dat het een date driedaagse werd! Herinneren jullie dat nog?
Vast niet, want door alle drank zijn jullie bijna alles vergeten...

Een paar dingen weten jullie nog wel:
- Jullie gingen drie dagen na elkaar uit.
- Elke dag deden jullie een drankje in een cafe en vervolgens een activiteit op een andere locatie
- Het drankje, het cafe en de activiteit op locatie waren elke dag anders.

Maar dit is nog niet genoeg om de alles te kunnen reconstrueren.
Gelukkig komen er nog meer herinneringen terug nu jullie op locatie zijn.

Tips:
- Alleen logisch nadenken is niet genoeg. Kijk ook heel goed om jullie heen, om jullie herinneringen te kunnen plaatsen.
- Bekijk eerst alle aanwijzingen. Het antwoordoverzicht vul je het makkelijkste in door de aanwijzingen op volgorde af te gaan. Maak aantekeningen als je iets vindt wat je lastig in kunt vullen.
- Onthoud goed waar jullie deze activiteiten deden: 
   - Dansen bij Dollars
   -  Karaoke bij Roxy's 
   -  Spellen bij de Witte Raaf

Wil je dit nog even nalezen als de puzzel is gestart? Klik dan op Instructies.

Veel succes!    
    `,
    puzzle: {
      type: "logic-grid",
      question: "Gebruik ✓ (groen) voor een match, ✗ (rood) om iets uit te sluiten.",
      clues: [
        "Anouk dronk geen wijn, toen ze zich afvroeg wie J.W. Tilleman was.",
        "Ruud stak ook z'n tong uit, maar zingen deed ie een andere keer.",
        "Na te veel apekoppen lokten de pijlen jullie naar binnen.",
        "De wijntjes bij de hoge bi bevallen goed!",
        "Op de laatste avond bewonderden jullie Keith Haring.",
        "De cocktailavond kwam voor de spelletjesavond.",
      ],
      columns: ["dansen", "karaoke", "spellen"],
      rowGroups: [
        { label: "dag",     rows: ["donderdag", "vrijdag", "zaterdag"] },
        { label: "locatie", rows: ["tikibar", "café de kroeg", "de Burgemeester"] },
        { label: "drank",   rows: ["wijn", "cocktail", "shotjes"] },
      ],
      // answer[groep][rij][kolom]: true = groene cel (match)
      // donderdag=dansen, vrijdag=spellen, zaterdag=karaoke
      // tikibar=dansen, café de kroeg=karaoke, de Burgemeester=spellen
      // wijn=spellen, cocktail=dansen, shotjes=karaoke
      answer: [
        [[true,false,false],[false,false,true],[false,true,false]],
        [[true,false,false],[false,true,false],[false,false,true]],
        [[false,false,true],[true,false,false],[false,true,false]],
      ],
      hints: ["hint 1", "hint 2"],
    },
    completeMessage: "Dit was Café de Burgemeester. Op naar huis",
  },  

];

export const FINAL = {
  lat: 51.8376845,
  lng: 5.8325001,
  arrivalRadius: 5,
  title: "Jullie zijn er! 🥂",
  message:
    "20 jaar geleden begon het mooiste avontuur van jullie leven. Bedankt dat jullie samen zo'n inspirerend stel zijn.\n\nGefeliciteerd met jullie jubileum!",
};

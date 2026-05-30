// ============================================================
//  CONFIGURATIE — pas hier alles aan voor jullie tocht
// ============================================================

export const DEBUG_MODE = false;

export const PIN = "2006";
export const DEBUG_PIN = "9000";

export const WELCOME = {
  title: "The Nimma Ending Story!",
  message:
    "Lieve Anouk en Ruud,\n\nJullie quest voert jullie langs niet-exotische locaties, waar jullie zonder gevaar voor eigen leven onbelangrijke opdrachten dienen te vervullen. Volg het kompas om de eerste locatie te vinden.\n\n"
    + "BELANGRIJK:\n"
    + "Het kompas moet in het begin kalibreren. Het kan dan de verkeerde richting op wijzen of minder nauwkeurig zijn.\n"
    + "Loop eerst een tiental meters MET DE APP OPEN OP HET SCHERM. Eenmaal gekalibreerd blijft het kompas werken. Jullie hoeven dit dus alleen voor de eerste locatie te doen.\n"
    + "Vanaf dat moment hoef je de app niet continu open te hebben om batterij te besparen.\n"
    + "Onder het kompas staat hoe ver de locatie is. De afstand is vanaf het begin nauwkeurig. Wordt de afstand groter, dan lopen jullie de verkeerde kant op.\n"
    + "Hoe dichter jullie bij jullie doel zijn, hoe nauwkeuriger het kompas wordt.\n\n"
    + "Opent de locatie niet, terwijl jullie wel goed zitten, dan kunnen jullie bij ons een noodcode opvragen om de opdracht te openen.\n\n"
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
    arrivalMessage: "De tijd vliegt!\n\nDeze Vos verliest noch zn haren, noch zn streken. En ook Anouk ziet er niet 20 jaar ouder uit. Dat kan de eerste opdracht wel eens wat lastiger maken...\n\n"
      + "Zet de foto's in de juiste volgorde. Begin met de oudste foto en eindig met de meest recente.\n"
      + "Je krijgt te zien hoeveel antwoorden je goed hebt.\n"
      + "Klik op de foto om te vergroten.Klik nog een keer om het weer te verkleinen.\n\n"
      + "Komen jullie er niet uit?\n"
      + "Onder 'Hint tonen' staat op willekeurige volgorde bij welke gelegenheden de foto's zijn genomen\n",
     
    puzzle: {
      type: "photo-order",
      question: "Zet de foto's in de juiste chronologische volgorde van oudste naar meest recent.\n\n",
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
      hints: ["2x Weekendje weg; Carnaval Escharen; Verjaardag Anouk; Efteling; Vrijgezellenweekend; Kunstnacht; Maffiafeest"],
    },
    completeMessage: "Dit was de Tijgerstraat! \n\nOp juiste volgorde: Maffiafeest (2006), Carnaval Escharen (2008), Efteling (2009), Kunstnacht (2014), Weekendje (2019), Verjaardag Anouk (2020), Vrijgezellenweekendje (2021), Weekendje (2025).\n\nHierbij een heel oude foto van Henk en Hobbes als beloning.\nOp naar de volgende stop.",
  },
  {
    name: "Café Hop en Heivuur",
    lat: 51.8154819,
    lng: 5.851123,
    arrivalRadius: 20,
    showCat: true,
    cheatCode: "c5h6",
    arrivalMessage: "Beste backwards talking roze dwergzebra's,\n\nHet is ergens op de wereld klokslag 20:00, dus we gaan beginnen met de Porseleinen Pubquiz. En zoals gewoonlijk wordt het weer vreselijk spannend! Want om door te gaan naar de volgende stop, moeten jullie alle vragen goed beantwoorden. Dat kan nog wel eens tegenvallen. Maar wees gerust: hoe vaker jullie verkeerd antwoorden, hoe meer informatie jullie krijgen.\n\nMeedoen is leuker dan vastzitten, dus veel succes!",
    puzzle: {
      type: "multi-choice",
      question: "Jullie mogen zo vaak raden als je wilt. De categoriën zijn: 1. Cultuur, 2. Geschiedenis, 3. Wetenschap, 4. Muziek en 5. Thuis. Succes!",
      questions: [
        {
          question: "Hoe wordt een porseleinen huwelijk ook wel genoemd?",
          options: ["Koperen huwelijk", "Kristallen huwelijk", "Zilveren huwelijk", "Houten huwelijk", "Aardewerken huwelijk", "Eiken huwelijk"],
          answer: "B",
        },
        {
          question: "Wanneer begon de productie van porselein in Europa?",
          options: ["15e eeuw", "16e eeuw", "17e eeuw", "18e eeuw", "19e eeuw", "20e eeuw"],
          answer: "D",
        },
        {
          question: "Welke grondstof is essentieel voor de productie van porselein?",
          options: ["Bentoniet", "Porfier", "Kalksteen", "Chamotte", "Kaolien", "Zand"],
          answer: "E",
        },
        {
          question: "Welke artiest heeft GEEN nummer met porselein in de titel?",
          options: ["The National", "Moby", "Baxter Dury", "Courtney Barnett", "Sef", "Red Hot Chili Peppers"],
          answer: "A",
        },
        {
          question: "Welke beeldjes kwamen op bezoek?",
          options: ["2 kleuters, 5 dwergen en een duif", "3 honden, een varken en 2 clowns", "6 dwergen, een Buddha en een schildpad", "Een olifant, 5 honden en een theepot", "4 dwergen, een aap en een koe ", "Een katje, 4 honden en een paard"],
          answer: "E",
        },
      ],
      hints: ["Dit is een variant op Mastermind. Belangrijk: de bolletjes geven alleen aan hoeveel antwoorden jullie goed hebben of op de verkeerde plek staan, maar ze geven niet aan om WELKE antwoorden het gaat. Tip als het te lastig is: vul eerst bij alle vragen antwoord A in. Kijk hoeveel er goed zijn. Doe vervolgens hetzelfde voor antwoord B, antwoord C, etc. Op die manier kun je achterhalen welke letters in het goede antwoord zitten."],
    },
    completeMessage: "Dit was Café Hop en Heivuur. Goed gedaan: jullie zijn slimmer dan Hobbes met een cone om haar nek! Op naar de volgende stop.",
  }, 
  {
    name: "Erasmusplein",
    lat: 51.819329,
    lng: 5.865646,
    arrivalRadius: 15,
    showCat: true,
    cheatCode: "8ks4",
    arrivalMessage: "De Radboud Universiteit: hier hebben jullie meer dan genoeg tijd doorgebracht. Het heeft wel twee slimmerikken opgeleverd die kritisch nadenken en overal een antwoord op hebben. Weten jullie ook het antwoord te vinden op de volgende vragen?",
    puzzle: {
      type: "multi",
      question: "Tip! Blijf op het Erasmusplein; ga niet niet voorbij Cultuurcafé of de Spar.",
      questions: [
        { question: "Wat mag alleen hier in?", answers: ["krant"] },
        { question: "Wat moet je doen?", answers: ["toe doe"] },
        { question: "Wie denkt anders dan ze doen?", answers: ["volt"] },
        { question: "Wat is voor elkaar?", answers: ["rookvrij terrein", "rookvrij"] },
      ],
    },
    completeMessage: "Dit was het Erasmusgebouw! Op naar de volgende stop.",
  },
  {
    name: "RSC",
    lat: 51.8185806,
    lng: 5.8669618,
    arrivalRadius: 20,
    showCat: true,
    cheatCode: "b9x4",
    arrivalMessage: "Reis je rot!\n\nVan USA tot India, van Luxemburg tot Japan. Van veilig in een vliegtuig, bus en trein tot ongelukjes in huurauto's: jullie reizen flink wat af.\n\nJullie reis begon bij ANS, maar hoe gaan jullie eindigen?\n\nOpdracht: \n- Jullie gaan zo meteen een reis maken door van plek naar plek te lopen. \n- Alleen verenigingen/organisatie tellen als locatie/plek/plaats. \n- Tussendoor maken jullie 5 tussenstops. \n- Volg de routebeschrijving om de juiste locaties te vinden. \n- Jullie starten bij ANS. \n\nDit zijn de reislocaties van rechts naar links: \nANS, Dance fever, MSV, AIESEC, ESN, SOFV, RAGweek, NSSR, Akku, United Netherlands, FNV, VOX. \nVoorbeeld: vanuit FNV 1 plek naar links is naar Vox. ",
    puzzle: {
      type: "text",
      question: "Routebeschrijving:\n- Start bij ANS. Ga op bezoek bij de man die zijn schoen mist. Loop vervolgens 1 locatie met hem mee. Dit is tussenstop 1.\n- Start bij tussenstop 1. Hoeveel G's zitten er in de volledige naam? Loop dat aantal verenigingen naar rechts. Is het logo blauw? Ga dan 4 verenigingen naar links. Is het groen, ga dan 7 verenigingen naar links. Dit is tussenstop 2.\n- Start bij tussenstop 2. Schuif 5 plaatsen op; Palestina wijst de weg. Loop vervolgens 1 plekje met de mensen mee. Dit is tussenstop 3.\n- Start bij tussenstop 3. Loop 7 plaatsen naar links van wereld richting de maan. Loop het maximum aantal mensen naar rechts. Dit is tussenstop 4.\n- Start bij tussenstop 4. Ga het aantal blokjes op het boomblaadje richting roze streepje horizontaal. Ga vervolgens het aantal letters van de afkorting in de richting van de groene pijl. Dit is tussenstop 5.\n\n" 
      +"\n\nGeef met 5 letters antwoord op de grote vraag: Hoe eindigt jullie reis?",
      answer: "Samen",
      hints: ["Jullie hebben 5 tussenstops gemaakt en het antwoord bestaat uit 5 letters. Toevallig, hè?", "Misschien helpt het om jullie tussenstops een op een rijtje te zetten. Kijk eens of je er dan een woord uit kunt halen. Kijk vooral naar het begin van de woorden."],
    },
    completeMessage: "Dit was het RSC! Op naar de volgende stop.",
  },  
  {
    name: "LUX",
    lat: 51.8451501,
    lng: 5.867057,
    arrivalRadius: 10,
    showCat: true,
    cheatCode: "p3n7",
    arrivalMessage: " We love... The diaper smell of filmquiz!\n\nAan deze filmquiz zit zeker een luchtje. Kunnen jullie raden welke films hier uitgebeeld worden?\n\nKlik op de foto om te vergroten.\nKom je er echt niet uit, dan staat onder hints een lijst met films, waar de goede antwoorden tussen zitten.\n\nDisclaimer: No babies were harmed in the making of this quiz.",
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
      hints: ["Alladin, Beethoven, Bolt, Catnado, Chicago, Chronicles of Narnia, Creature from the black lagoon, Cube, E.T., Eurovision Song Contest: The story of Fire Saga, Frankenstein, Garfield, George of the jungle, Godzilla, How to train your dragon, Jaws, Jumanji, Jungle Book, Jurassic Park, Life of Pi, Lion King, Madagascar, Men in Black, Monster Inc, Okja, Predator, Psycho, Rango, Shrek, The Goonies, The Hulk, The Matrix, The Never Ending Story, The Shining, The Sound of Music, The Terminator, The Tigger movie, The Wizard of Ozz, They live, Turks Fruit"],
    },
    completeMessage: "Dat was LUX! Op naar de volgende stop.",
  },
  {
    name: "Hertogstraat",
    lat: 51.845777,
    lng: 5.8686818,
    arrivalRadius: 10,
    showCat: true,
    cheatCode: "6fq2",
    arrivalMessage: "Jullie eerste plekje samen, waarvan niemand snapt dat er zoveel dvd's in pasten. Wel perfect om Vierdaagse te vieren! Lopers aanmoedigen, concerten bekijken, karaoke in de ballenbak en een graffiti tour. En die steegjes die de Imker liet zien, daar moeten jullie nu zijn.\n\nIn de twee steegjes in de buurt zijn 8 foto's gemaakt. Een deel van die foto's zijn bewerkt. Zoek de plek op waar de foto is gemaakt en geef per foto aan of die bewerkt (fout) of origineel (goed) is.\n\nTips:\nDe hint geeft aan hoeveel foto's bewerkt zijn.\nAlleen permanente zaken zijn bewerkt, dus die fiets die er niet staat, telt niet mee.\nAls je een fout ziet, dan is het gelijk duidelijk. Twijfel je, dan is het waarschijnlijk een speling van het licht. \n\nSucces!",
    puzzle: {
      type: "photo-authentic",
      question: "Welke foto's zijn origineel (goed/groen) en welke zijn bewerkt (fout/rood)?\n\nTik op een foto om hem te vergroten.",
      photos: [
        { url: `${import.meta.env.BASE_URL}hertogstraat/1.jpg`, authentic: true },
        { url: `${import.meta.env.BASE_URL}hertogstraat/2.jpg`, authentic: false },
        { url: `${import.meta.env.BASE_URL}hertogstraat/3.jpg`, authentic: false },
        { url: `${import.meta.env.BASE_URL}hertogstraat/4.jpg`, authentic: true },
        { url: `${import.meta.env.BASE_URL}hertogstraat/5.jpg`, authentic: false },
        { url: `${import.meta.env.BASE_URL}hertogstraat/6.jpg`, authentic: false },
        { url: `${import.meta.env.BASE_URL}hertogstraat/7.jpg`, authentic: true },
        { url: `${import.meta.env.BASE_URL}hertogstraat/8.jpg`, authentic: false },
      ],
      hints: ["Er zijn 5 foto's bewerkt."],
    },
    completeMessage: "Dat was de Hertogstraat! Op naar de volgende stop.",
  },
  {
    name: "Valkhof",
    lat: 51.847563,
    lng: 5.8705543,
    arrivalRadius: 30,
    showCat: true,
    cheatCode: "9mw5",
    arrivalMessage: "Het valkhof is één van de mooiste en oudste plekken van Nijmegen, vol geschiedenis, natuur en natuurlijk de leukste plek tijdens de Feesten!.\n\nMaar hebben jullie wel eens goed rond gekeken? Lees zo eerst de vragen en loop vervolgens een rondje. Jullie hoeven niet het valkhof af en geen trappen naar beneden te nemen.",
    puzzle: {
      type: "multi",
      question: "Beantwoord de vragen. Kijk bij de hint om te zien op welke plekken je moet zoeken.",
      questions: [
        {
          question: "Welke kleur, naast wit, heeft de circusachtige tent van het podium van de Kaaij?",
          answers: ["blauw"],
        },
        {
          question: "Wie keek knarsetandend toe, hoe wrekende Romeinse legers naderden?",
          answers: ["claudius"],
        },
        {
          question: "Zet de Nijmeegse geschiedenis op volgorde. Vul alleen de cijfers in: 1. Adelaar; 2. Leeuw; 3. Dubbelkoppige adelaar; 4. Drie leeuwen",
          answers: ["1432"],
        },
        {
          question: "Op welke route vind je een brandende kaars?",
          answers: ["Liberation route Europe"],
        },
        {
          question: "Zoek de plek waarvan de tekst vrij vertaald is: 'Weet ge mij een plaats te noemen, die op zooveel schoons kan roemen'? Geniet van het uitzicht van de Waal en vertel me: wat is Nijmegen?",
          answers: ["gastvrij"],
        },
      ],
      hints: [{ image: "valkhof/hint1.jpg" }],
    },
    completeMessage: "Dat was het Valkhof! Op naar de volgende stop.",
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
      question: "Gebruik ✓ (groen) voor een match (1x klikken), ✗ (rood) om iets uit te sluiten (2x klikken).",
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
      // hints: ["hint 1", "hint 2"],
    },
    completeMessage: "Dat was Café de Burgemeester.\n\nGefeliciteerd! jullie hebben de laatste opdracht ontgrendeld.\nOp naar huis, waar het kistje op jullie wacht en jullie de allerlaatste aanwijzing krijgen.",
  },
  {
    name: "Eindlocatie",
    lat: 51.8376845,
    lng: 5.8325001,
    arrivalRadius: 5,
    hints: ["De code ligt verborgen waar wijsheid en onzin komen en gaan."],
    arrivalMessage: "Niet alleen het kistje ligt bij jullie thuis.\nDe code ligt al die tijd verstopt voor jullie huis.\nErgens verborgen in een geocache.\nDus ga maar snel zoeken en veel succes!",
    showCat: true,
    isFinal: true,
  },

];

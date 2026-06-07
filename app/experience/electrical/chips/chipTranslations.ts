export const chipTranslations = {
  EN: {
    title: "Digital Chips & Physical Design Preview",
    intro:
      "Discover how engineers create real computer chips used in phones, processors, GPUs, cars, and AI systems.",

    timeLabel: "⏱ Estimated Time",
    time: "15 minutes",
    levelLabel: "🎯 Level",
    level: "Beginner Friendly",
    fieldLabel: "📚 Field",
    field: "Electrical Engineering / Semiconductor",

    whatTitle: "What is Chip Design?",
    whatText:
      "Chip design is the process of creating billions of tiny electronic circuits that work together to perform calculations and run modern technology.",

    whyTitle: "Why engineers learn this:",
    whyItems: [
      "Understand how processors and hardware work",
      "Create faster and smaller electronic devices",
      "Optimize chip speed, power, and area",
      "Transform ideas into manufactured silicon chips",
    ],

    lecture: "📖 Lecture",
    hideExplanation: "Hide explanation ▲",
    keyConcepts: "🧠 Key Concepts",


    logicTitle: "Module 1 — Digital Logic",
    logicText:
      "Computers understand only electrical states represented as 0 and 1. Engineers combine these values using logic gates.",
    logicCode: `0 / 1
 ↓
Logic Gates
 ↓
Digital Circuits

Example:

A = 1
B = 0

A AND B = 0`,

    explainLogic: "Explain digital logic ▼",

    zeroOneTitle: "Zeros and Ones",
    zeroOneText:
      "Digital circuits use two states: 0 and 1. These states represent electrical signals inside the chip.",

    gatesTitle: "Logic Gates",
    gatesText:
      "Logic gates such as AND, OR, and NOT are the basic building blocks of processors.",

    circuitTitle: "Digital Circuits",
    circuitText:
      "Millions or billions of gates combine together to create CPUs, GPUs, and other chips.",

    logicConcepts: [
      "Binary",
      "Logic gates",
      "Digital circuits",
      "Hardware thinking",
    ],


    flowTitle: "Module 2 — How Chips Are Created",
    flowText:
      "Creating a chip requires multiple engineering steps, from code to a physical layout.",
    flowCode: `Idea
 ↓
RTL Code (Verilog)
 ↓
Synthesis
 ↓
Logic Gates
 ↓
Physical Design
 ↓
Manufactured Chip`,

    explainFlow: "Explain chip flow ▼",

    rtlTitle: "RTL Design",
    rtlText:
      "Engineers describe hardware behavior using languages like Verilog or VHDL.",

    synthesisTitle: "Synthesis",
    synthesisText:
      "Synthesis converts RTL code into real logic gates that can be built on silicon.",

    layoutTitle: "Physical Layout",
    layoutText:
      "The logical design becomes a physical structure containing cells, wires, and layers.",


    physicalTitle: "Module 3 — Physical Design ⭐",
    physicalText:
      "Physical Design transforms logic gates into an actual chip layout ready for manufacturing.",

    physicalCode: `Netlist
 ↓
Floorplan
 ↓
Placement
 ↓
Clock Tree (CTS)
 ↓
Routing
 ↓
Timing Closure
 ↓
GDS File`,

    explainPhysical: "Explain Physical Design ▼",

    placementTitle: "Placement",
    placementText:
      "Millions of standard cells are positioned on the chip while considering timing, power, and area.",

    routingTitle: "Routing",
    routingText:
      "Electrical connections are created between cells using metal layers.",

    timingClosureTitle: "Timing Closure",
    timingClosureText:
      "Engineers fix timing violations so the chip works correctly at the target frequency.",

    physicalConcepts: [
      "Floorplan",
      "Placement",
      "CTS",
      "Routing",
      "Timing Closure",
    ],


    timingTitle: "Module 4 — Timing Analysis",
    timingText:
      "A chip must move data between registers before the next clock edge arrives.",

    timingCode: `Launch FF
    |
    ↓
 Logic
    |
    ↓
Capture FF


Data Delay < Clock Period

PASS ✅`,

    explainTiming: "Explain timing ▼",

    setupTitle: "Setup Timing",
    setupText:
      "Setup checks that data arrives early enough before the clock edge.",

    holdTitle: "Hold Timing",
    holdText:
      "Hold checks that data does not change too quickly after the clock edge.",

    frequencyTitle: "Frequency",
    frequencyText:
      "Higher frequency gives better performance but makes timing harder to close.",


    realTitle: "🌍 Real Engineering Application",
    realText:
      "Chip engineers design processors, AI accelerators, GPUs, smartphones, automotive chips, and advanced computing hardware.",


    interviewTitle: "💼 Interview Challenge",
    interviewQuestion:
      "A chip works at 1GHz but fails at 2GHz. What could be the reason?",

    interviewAnswer:
      "The chip may have setup timing violations. Signals cannot travel through logic fast enough before the next clock edge. Physical Design engineers optimize placement, routing, and timing paths to fix this.",


    back: "Back to Electrical Engineering Overview",
  },
   HE: {
    title: "הצצה לשבבים דיגיטליים ו־Physical Design",
    intro:
      "גלה כיצד מהנדסים יוצרים שבבים אמיתיים שנמצאים בטלפונים, מעבדים, כרטיסים גרפיים, רכבים ומערכות AI.",

    timeLabel: "⏱ זמן משוער",
    time: "15 דקות",
    levelLabel: "🎯 רמה",
    level: "מתאים למתחילים",
    fieldLabel: "📚 תחום",
    field: "הנדסת חשמל / מוליכים למחצה",

    whatTitle: "מהו תכנון שבבים?",
    whatText:
      "תכנון שבבים הוא תהליך יצירת מיליארדי מעגלים אלקטרוניים קטנים שעובדים יחד כדי לבצע חישובים ולהפעיל טכנולוגיה מודרנית.",

    whyTitle: "למה מהנדסים לומדים את זה:",
    whyItems: [
      "להבין איך מעבדים וחומרה עובדים",
      "ליצור מכשירים מהירים וקטנים יותר",
      "לשפר מהירות, הספק ושטח של שבבים",
      "להפוך רעיון לשבב סיליקון אמיתי",
    ],

    lecture: "📖 הרצאה",
    hideExplanation: "הסתר הסבר ▲",
    keyConcepts: "🧠 מושגים מרכזיים",


    logicTitle: "מודול 1 — לוגיקה דיגיטלית",
    logicText:
      "מחשבים מבינים מצבים חשמליים שמיוצגים כ־0 ו־1. מהנדסים משלבים אותם באמצעות שערים לוגיים.",

    logicCode: `0 / 1
 ↓
Logic Gates
 ↓
Digital Circuits

Example:

A = 1
B = 0

A AND B = 0`,

    explainLogic: "הסבר לוגיקה דיגיטלית ▼",

    zeroOneTitle: "אפסים ואחדים",
    zeroOneText:
      "מעגלים דיגיטליים משתמשים בשני מצבים: 0 ו־1 שמייצגים אותות חשמליים בתוך השבב.",

    gatesTitle: "שערים לוגיים",
    gatesText:
      "שערים כמו AND, OR ו־NOT הם אבני הבניין הבסיסיות של מעבדים.",

    circuitTitle: "מעגלים דיגיטליים",
    circuitText:
      "מיליוני ומיליארדי שערים מתחברים יחד ליצירת CPU, GPU ושבבים נוספים.",

    logicConcepts: [
      "בינארי",
      "שערים לוגיים",
      "מעגלים דיגיטליים",
      "חשיבה חומרתית",
    ],


    flowTitle: "מודול 2 — איך יוצרים שבב",
    flowText:
      "יצירת שבב דורשת שלבים הנדסיים רבים, מתיאור הקוד ועד מבנה פיזי.",

    flowCode: `Idea
 ↓
RTL Code (Verilog)
 ↓
Synthesis
 ↓
Logic Gates
 ↓
Physical Design
 ↓
Manufactured Chip`,

    explainFlow: "הסבר תהליך יצירת שבב ▼",

    rtlTitle: "תכנון RTL",
    rtlText:
      "מהנדסים מתארים התנהגות חומרה באמצעות שפות כמו Verilog או VHDL.",

    synthesisTitle: "סינתזה",
    synthesisText:
      "סינתזה הופכת קוד RTL לשערים לוגיים שניתן לבנות בסיליקון.",

    layoutTitle: "מבנה פיזי",
    layoutText:
      "התכנון הלוגי הופך למבנה פיזי עם תאים, חוטים ושכבות מתכת.",


    physicalTitle: "מודול 3 — Physical Design ⭐",
    physicalText:
      "Physical Design הופך שערים לוגיים לפריסה פיזית של שבב שמוכנה לייצור.",

    physicalCode: `Netlist
 ↓
Floorplan
 ↓
Placement
 ↓
Clock Tree (CTS)
 ↓
Routing
 ↓
Timing Closure
 ↓
GDS File`,

    explainPhysical: "הסבר Physical Design ▼",

    placementTitle: "Placement",
    placementText:
      "מיליוני תאים ממוקמים על השבב תוך התחשבות בתזמון, הספק ושטח.",

    routingTitle: "Routing",
    routingText:
      "יוצרים חיבורים חשמליים בין התאים באמצעות שכבות מתכת.",

    timingClosureTitle: "Timing Closure",
    timingClosureText:
      "מהנדסים מתקנים בעיות Timing כדי שהשבב יעבוד בתדר הרצוי.",

    physicalConcepts: [
      "Floorplan",
      "Placement",
      "CTS",
      "Routing",
      "Timing Closure",
    ],


    timingTitle: "מודול 4 — ניתוח Timing",
    timingText:
      "השבב חייב להעביר מידע בין רגיסטרים לפני שמגיע מחזור השעון הבא.",

    timingCode: `Launch FF
    |
    ↓
 Logic
    |
    ↓
Capture FF


Data Delay < Clock Period

PASS ✅`,

    explainTiming: "הסבר Timing ▼",

    setupTitle: "Setup Timing",
    setupText:
      "Setup בודק שהמידע מגיע מספיק מוקדם לפני קצה השעון.",

    holdTitle: "Hold Timing",
    holdText:
      "Hold בודק שהמידע לא משתנה מהר מדי אחרי קצה השעון.",

    frequencyTitle: "תדר",
    frequencyText:
      "תדר גבוה יותר נותן ביצועים טובים יותר אבל מקשה על סגירת Timing.",


    realTitle: "🌍 שימוש הנדסי אמיתי",
    realText:
      "מהנדסי שבבים מתכננים מעבדים, מאיצי AI, כרטיסים גרפיים, שבבים לרכב וחומרת מחשוב מתקדמת.",


    interviewTitle: "💼 אתגר ראיון",

    interviewQuestion:
      "שבב עובד ב־1GHz אבל נכשל ב־2GHz. מה יכולה להיות הסיבה?",

    interviewAnswer:
      "ייתכן שיש בעיית Setup Timing. האות לא מספיק לעבור דרך הלוגיקה לפני מחזור השעון הבא. מהנדסי Physical Design משפרים מיקום, חיווט ונתיבי Timing כדי לפתור זאת.",


    back: "חזרה לסקירת הנדסת חשמל",
  },
};
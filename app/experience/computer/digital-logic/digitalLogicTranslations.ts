export const digitalLogicTranslations = {
  EN: {
    title: "Digital Logic Preview",
    intro:
      "Learn how computers make decisions using 0 and 1. Digital Logic explains how simple electronic signals become logic, circuits, and eventually real computer systems.",

    timeLabel: "⏱ Estimated Time",
    time: "10 minutes",
    levelLabel: "🎯 Level",
    level: "Beginner Friendly",
    fieldLabel: "📚 Field",
    field: "Computer Engineering",

    whatTitle: "What is Digital Logic?",
    whatText:
      "Digital Logic is the foundation of how computers think. It uses binary values, logic gates, and circuits to process information.",
    whyTitle: "Why engineers learn this:",
    whyItems: [
      "Understand how computers are built from simple logic blocks",
      "Design digital circuits and processors",
      "Connect electronics with computing concepts",
    ],

    lecture: "📖 Lecture",
    keyConcepts: "🧠 Key Concepts",
    exampleTitle: "📝 Example",
    hideExplanation: "Hide explanation ▲",

    binaryTitle: "Module 1 — Binary Decisions",
    binaryText:
      "Computers use binary because electronic circuits can easily represent two states:",
    binaryCode: `0 = OFF / No / False
1 = ON  / Yes / True`,
    explainBinary: "Explain binary values ▼",
    whyBinaryTitle: "Why only 0 and 1?",
    whyBinaryText:
      "Electronic circuits work well with two clear states: low voltage and high voltage. These states are represented as 0 and 1.",
    whyMatterTitle: "Why this matters",
    whyMatterText:
      "Everything in a computer — numbers, letters, images, sound, and programs — is represented using combinations of 0s and 1s.",
    binaryConcepts: [
      "Binary values",
      "True / False logic",
      "Digital signals",
    ],
    binaryExampleText:
      "A light switch is a simple binary system:",
    binaryExampleCode: `Switch OFF → 0
Switch ON  → 1`,

    gatesTitle: "Module 2 — Logic Gates",
    gatesText:
      "Logic gates are small building blocks that take binary inputs and produce a binary output.",
    gatesCode: `AND gate:
Output is 1 only if both inputs are 1

OR gate:
Output is 1 if at least one input is 1

NOT gate:
Output is the opposite of the input`,
    explainGates: "Explain logic gates ▼",

    andTitle: "AND Gate",
    andText:
      "Think of AND as needing all conditions to be true. Example: a machine starts only if the power is on AND the safety button is pressed.",

    orTitle: "OR Gate",
    orText:
      "OR means at least one condition is enough. Example: a warning light turns on if the temperature is high OR the pressure is high.",

    notTitle: "NOT Gate",
    notText:
      "NOT flips the value. If the input is 1, the output becomes 0. If the input is 0, the output becomes 1.",

    gatesConcepts: [
      "AND / OR / NOT gates",
      "Inputs and outputs",
      "Boolean logic",
    ],
    gatesExampleText: "For an AND gate:",
    gatesExampleCode: `Input A = 1
Input B = 0

Output = 0`,

    circuitsTitle: "Module 3 — Building Digital Circuits",
    circuitsText:
      "Engineers combine logic gates to build circuits that can add numbers, store information, and make decisions.",
    circuitsCode: `Binary values
      ↓
Logic gates
      ↓
Digital circuits
      ↓
Processors and computers`,
    explainCircuits: "Explain digital circuits ▼",

    buildTitle: "How circuits are built",
    buildText:
      "A single gate is simple, but many gates together can perform useful operations such as addition, comparison, and memory storage.",

    powerTitle: "Why this becomes powerful",
    powerText:
      "CPUs are built from millions or billions of small electronic logic components. Digital Logic explains the first step toward understanding processors.",

    circuitsConcepts: [
      "Combining gates",
      "Simple decision circuits",
      "How logic becomes hardware",
    ],

    realTitle: "🌍 Real Engineering Application",
    realText:
      "Digital Logic is used in processors, memory chips, calculators, embedded systems, phones, cars, and almost every modern electronic device.",

    interviewTitle: "💼 Interview Challenge",
    interviewQuestion:
      "Why is binary used in computers instead of decimal numbers?",
    interviewAnswer:
      "Binary is used because electronic circuits can reliably represent two states: low voltage and high voltage. This makes systems easier to design, more reliable, and less sensitive to small electrical noise.",

    back: "Back to Computer Engineering Overview",
  },

  HE: {
    title: "הצצה ללוגיקה ספרתית",
    intro:
      "למד כיצד מחשבים מקבלים החלטות באמצעות 0 ו־1. לוגיקה ספרתית מסבירה איך אותות אלקטרוניים פשוטים הופכים ללוגיקה, מעגלים ובסוף למערכות מחשב אמיתיות.",

    timeLabel: "⏱ זמן משוער",
    time: "10 דקות",
    levelLabel: "🎯 רמה",
    level: "מתאים למתחילים",
    fieldLabel: "📚 תחום",
    field: "הנדסת מחשבים",

    whatTitle: "מהי לוגיקה ספרתית?",
    whatText:
      "לוגיקה ספרתית היא הבסיס לאופן שבו מחשבים חושבים. היא משתמשת בערכים בינאריים, שערים לוגיים ומעגלים כדי לעבד מידע.",
    whyTitle: "למה מהנדסים לומדים את זה:",
    whyItems: [
      "להבין איך מחשבים נבנים מבלוקים לוגיים פשוטים",
      "לתכנן מעגלים דיגיטליים ומעבדים",
      "לחבר בין אלקטרוניקה לבין מושגי מחשוב",
    ],

    lecture: "📖 הרצאה",
    keyConcepts: "🧠 מושגים מרכזיים",
    exampleTitle: "📝 דוגמה",
    hideExplanation: "הסתר הסבר ▲",

    binaryTitle: "מודול 1 — החלטות בינאריות",
    binaryText:
      "מחשבים משתמשים בבינארי כי מעגלים אלקטרוניים יכולים לייצג בקלות שני מצבים:",
    binaryCode: `0 = OFF / No / False
1 = ON  / Yes / True`,
    explainBinary: "הסבר ערכים בינאריים ▼",
    whyBinaryTitle: "למה רק 0 ו־1?",
    whyBinaryText:
      "מעגלים אלקטרוניים עובדים היטב עם שני מצבים ברורים: מתח נמוך ומתח גבוה. מצבים אלה מיוצגים כ־0 ו־1.",
    whyMatterTitle: "למה זה חשוב",
    whyMatterText:
      "כל דבר במחשב — מספרים, אותיות, תמונות, קול ותוכניות — מיוצג באמצעות שילובים של 0 ו־1.",
    binaryConcepts: [
      "ערכים בינאריים",
      "לוגיקה אמת / שקר",
      "אותות דיגיטליים",
    ],
    binaryExampleText:
      "מפסק אור הוא מערכת בינארית פשוטה:",
    binaryExampleCode: `Switch OFF → 0
Switch ON  → 1`,

    gatesTitle: "מודול 2 — שערים לוגיים",
    gatesText:
      "שערים לוגיים הם אבני בניין קטנות שמקבלות קלט בינארי ומייצרות פלט בינארי.",
    gatesCode: `AND gate:
Output is 1 only if both inputs are 1

OR gate:
Output is 1 if at least one input is 1

NOT gate:
Output is the opposite of the input`,
    explainGates: "הסבר שערים לוגיים ▼",

    andTitle: "שער AND",
    andText:
      "AND דורש שכל התנאים יהיו נכונים. לדוגמה: מכונה מתחילה לעבוד רק אם יש חשמל וגם כפתור הבטיחות לחוץ.",

    orTitle: "שער OR",
    orText:
      "OR אומר שמספיק שלפחות תנאי אחד יהיה נכון. לדוגמה: נורת אזהרה נדלקת אם הטמפרטורה גבוהה או אם הלחץ גבוה.",

    notTitle: "שער NOT",
    notText:
      "NOT הופך את הערך. אם הקלט הוא 1, הפלט הופך ל־0. אם הקלט הוא 0, הפלט הופך ל־1.",

    gatesConcepts: [
      "שערי AND / OR / NOT",
      "קלט ופלט",
      "לוגיקה בוליאנית",
    ],
    gatesExampleText: "עבור שער AND:",
    gatesExampleCode: `Input A = 1
Input B = 0

Output = 0`,

    circuitsTitle: "מודול 3 — בניית מעגלים דיגיטליים",
    circuitsText:
      "מהנדסים משלבים שערים לוגיים כדי לבנות מעגלים שיכולים לחבר מספרים, לשמור מידע ולקבל החלטות.",
    circuitsCode: `Binary values
      ↓
Logic gates
      ↓
Digital circuits
      ↓
Processors and computers`,
    explainCircuits: "הסבר מעגלים דיגיטליים ▼",

    buildTitle: "איך בונים מעגלים",
    buildText:
      "שער יחיד הוא פשוט, אבל הרבה שערים יחד יכולים לבצע פעולות שימושיות כמו חיבור, השוואה ושמירת מידע.",

    powerTitle: "למה זה נהיה חזק",
    powerText:
      "מעבדים בנויים ממיליוני או מיליארדי רכיבי לוגיקה אלקטרוניים קטנים. לוגיקה ספרתית היא הצעד הראשון להבנת מעבדים.",

    circuitsConcepts: [
      "שילוב שערים",
      "מעגלי החלטה פשוטים",
      "איך לוגיקה הופכת לחומרה",
    ],

    realTitle: "🌍 יישום הנדסי אמיתי",
    realText:
      "לוגיקה ספרתית משמשת במעבדים, שבבי זיכרון, מחשבונים, מערכות משובצות, טלפונים, רכבים וכמעט כל מכשיר אלקטרוני מודרני.",

    interviewTitle: "💼 אתגר ראיון",
    interviewQuestion:
      "למה מחשבים משתמשים בבינארי במקום במספרים עשרוניים?",
    interviewAnswer:
      "בינארי משמש כי מעגלים אלקטרוניים יכולים לייצג בצורה אמינה שני מצבים: מתח נמוך ומתח גבוה. זה הופך מערכות לפשוטות יותר לתכנון, אמינות יותר ופחות רגישות לרעש חשמלי קטן.",

    back: "חזרה לסקירת הנדסת מחשבים",
  },
};
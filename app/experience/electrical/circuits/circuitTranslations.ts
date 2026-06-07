export const circuitTranslations = {
  EN: {
    title: "Electric Circuits Preview",
    intro:
      "Learn how electricity moves through circuits and how engineers control voltage, current, and resistance to build safe and useful electronic systems.",

    timeLabel: "⏱ Estimated Time",
    time: "10 minutes",
    levelLabel: "🎯 Level",
    level: "Beginner Friendly",
    fieldLabel: "📚 Field",
    field: "Electrical Engineering",

    whatTitle: "What is an Electric Circuit?",
    whatText:
      "An electric circuit is a closed path that allows electric current to flow. Circuits are used in phones, computers, lights, cars, medical devices, and almost every electronic system.",
    whyTitle: "Why engineers learn this:",
    whyItems: [
      "Understand how electrical energy moves",
      "Design safe electronic devices",
      "Control voltage, current, and power",
      "Debug hardware problems",
    ],

    voltageTitle: "Module 1 — Voltage and Current",
    lecture: "📖 Lecture",
    voltageText:
      "Voltage and current are two of the most important ideas in electrical engineering.",
    voltageCode: `Voltage = electrical pressure
Current = flow of electric charge`,
    explainVoltage: "Explain voltage and current ▼",
    hideExplanation: "Hide explanation ▲",
    voltageSubTitle: "Voltage",
    voltageAnswer:
      "Voltage is like pressure that pushes electric charge through a circuit. Higher voltage can push charge more strongly.",
    currentSubTitle: "Current",
    currentAnswer:
      "Current is the amount of electric charge flowing through the circuit. More current means more charge is moving each second.",
    analogyTitle: "Simple analogy",
    analogyText:
      "Think of water in a pipe: voltage is like water pressure, and current is like the amount of water flowing.",
    keyConcepts: "🧠 Key Concepts",
    voltageConcepts: [
      "Voltage",
      "Current",
      "Charge flow",
      "Electrical pressure",
    ],

    ohmsTitle: "Module 2 — Ohm's Law",
    ohmsText:
      "Ohm's Law explains the relationship between voltage, current, and resistance.",
    ohmsCode: `Current = Voltage ÷ Resistance

I = V / R`,
    practiceTitle: "🔋 V = IR in Practice",
    practiceText:
      "Suppose the voltage is 6V and the resistor is 3Ω. We can calculate the current.",
    practiceCode: `
        Current (I) →
   ┌────────────────┐
   │                │
   │              ┌─┴─┐
 + │              │ R │  3Ω
 V │              └─┬─┘
6V │                │
 - │                │
   └────────────────┘


Ohm's Law:

V = I × R

I = V / R

I = 6V / 3Ω

I = 2A
`,
    explainOhms: "Explain Ohm's Law ▼",
    voltageIncreaseTitle: "Voltage increases",
    voltageIncreaseText:
      "If voltage increases and resistance stays the same, current increases.",
    resistanceIncreaseTitle: "Resistance increases",
    resistanceIncreaseText:
      "If resistance increases and voltage stays the same, current decreases.",
    whyCareTitle: "Why engineers care",
    whyCareText:
      "Engineers use Ohm's Law to choose components, protect circuits, and prevent too much current from damaging devices.",
    ohmsConcepts: [
      "Resistance",
      "Ohm's Law",
      "How voltage affects current",
      "How resistance limits current",
    ],
    exampleTitle: "📝 Example",
    exampleText: "If voltage is 10V and resistance is 5Ω:",
    exampleCode: `I = V / R
I = 10 / 5
I = 2A`,

    componentsTitle: "Module 3 — Circuit Components",
    componentsText:
      "Electrical engineers use components to control how electricity behaves inside a circuit.",
    componentsCode: `Battery     → provides voltage
Resistor    → limits current
Capacitor   → stores energy
Switch      → opens or closes the circuit`,
    explainComponents: "Explain circuit components ▼",
    batteryTitle: "Battery",
    batteryText:
      "A battery provides voltage, which pushes current through the circuit.",
    resistorTitle: "Resistor",
    resistorText:
      "A resistor limits current and protects components from too much electrical flow.",
    capacitorTitle: "Capacitor",
    capacitorText:
      "A capacitor stores electrical energy for a short time and can release it when needed.",
    switchTitle: "Switch",
    switchText:
      "A switch controls whether the circuit is connected or disconnected.",
    componentsConcepts: ["Batteries", "Resistors", "Capacitors", "Switches"],

    realTitle: "🌍 Real Engineering Application",
    realText:
      "Electric circuits are used in chargers, sensors, phones, cars, computers, medical devices, home appliances, and power systems.",

    interviewTitle: "💼 Interview Challenge",
    interviewQuestion:
      "If a circuit is not turning on, what should an electrical engineer check first?",
    interviewAnswer:
      "The engineer should check if the circuit has power, whether the path is closed, whether components are connected correctly, and whether any component is damaged. Good debugging is systematic, not random.",

    back: "Back to Electrical Engineering Overview",
  },

  HE: {
    title: "הצצה למעגלים חשמליים",
    intro:
      "למד כיצד חשמל זורם במעגלים וכיצד מהנדסים שולטים במתח, זרם והתנגדות כדי לבנות מערכות אלקטרוניות בטוחות ושימושיות.",

    timeLabel: "⏱ זמן משוער",
    time: "10 דקות",
    levelLabel: "🎯 רמה",
    level: "מתאים למתחילים",
    fieldLabel: "📚 תחום",
    field: "הנדסת חשמל",

    whatTitle: "מהו מעגל חשמלי?",
    whatText:
      "מעגל חשמלי הוא מסלול סגור שמאפשר לזרם חשמלי לזרום. מעגלים נמצאים בטלפונים, מחשבים, תאורה, רכבים, מכשירים רפואיים וכמעט כל מערכת אלקטרונית.",
    whyTitle: "למה מהנדסים לומדים את זה:",
    whyItems: [
      "להבין כיצד אנרגיה חשמלית זורמת",
      "לתכנן מכשירים אלקטרוניים בטוחים",
      "לשלוט במתח, זרם והספק",
      "לדבג בעיות חומרה",
    ],

    voltageTitle: "מודול 1 — מתח וזרם",
    lecture: "📖 הרצאה",
    voltageText:
      "מתח וזרם הם שני רעיונות מרכזיים מאוד בהנדסת חשמל.",
    voltageCode: `Voltage = electrical pressure
Current = flow of electric charge`,
    explainVoltage: "הסבר מתח וזרם ▼",
    hideExplanation: "הסתר הסבר ▲",
    voltageSubTitle: "מתח",
    voltageAnswer:
      "מתח הוא כמו לחץ שדוחף מטען חשמלי דרך מעגל. מתח גבוה יותר יכול לדחוף מטען בצורה חזקה יותר.",
    currentSubTitle: "זרם",
    currentAnswer:
      "זרם הוא כמות המטען החשמלי שזורם במעגל. זרם גדול יותר אומר שיותר מטען נע בכל שנייה.",
    analogyTitle: "אנלוגיה פשוטה",
    analogyText:
      "אפשר לחשוב על מים בצינור: מתח דומה ללחץ מים, וזרם דומה לכמות המים שזורמת.",
    keyConcepts: "🧠 מושגים מרכזיים",
    voltageConcepts: [
      "מתח",
      "זרם",
      "זרימת מטען",
      "לחץ חשמלי",
    ],

    ohmsTitle: "מודול 2 — חוק אוהם",
    ohmsText:
      "חוק אוהם מסביר את הקשר בין מתח, זרם והתנגדות.",
    ohmsCode: `Current = Voltage ÷ Resistance

I = V / R`,
    practiceTitle: "🔋 V = IR בפועל",
    practiceText:
      "נניח שהמתח הוא 6V והנגד הוא 3Ω. אפשר לחשב את הזרם.",
    practiceCode: `
        Current (I) →
   ┌────────────────┐
   │                │
   │              ┌─┴─┐
 + │              │ R │  3Ω
 V │              └─┬─┘
6V │                │
 - │                │
   └────────────────┘


Ohm's Law:

V = I × R

I = V / R

I = 6V / 3Ω

I = 2A
`,
    explainOhms: "הסבר את חוק אוהם ▼",
    voltageIncreaseTitle: "כאשר המתח עולה",
    voltageIncreaseText:
      "אם המתח עולה וההתנגדות נשארת קבועה, הזרם עולה.",
    resistanceIncreaseTitle: "כאשר ההתנגדות עולה",
    resistanceIncreaseText:
      "אם ההתנגדות עולה והמתח נשאר קבוע, הזרם יורד.",
    whyCareTitle: "למה מהנדסים צריכים את זה",
    whyCareText:
      "מהנדסים משתמשים בחוק אוהם כדי לבחור רכיבים, להגן על מעגלים ולמנוע זרם גבוה מדי שעלול להזיק למכשירים.",
    ohmsConcepts: [
      "התנגדות",
      "חוק אוהם",
      "כיצד מתח משפיע על זרם",
      "כיצד התנגדות מגבילה זרם",
    ],
    exampleTitle: "📝 דוגמה",
    exampleText: "אם המתח הוא 10V וההתנגדות היא 5Ω:",
    exampleCode: `I = V / R
I = 10 / 5
I = 2A`,

    componentsTitle: "מודול 3 — רכיבי מעגל",
    componentsText:
      "מהנדסי חשמל משתמשים ברכיבים כדי לשלוט בהתנהגות החשמל בתוך מעגל.",
    componentsCode: `Battery     → provides voltage
Resistor    → limits current
Capacitor   → stores energy
Switch      → opens or closes the circuit`,
    explainComponents: "הסבר רכיבי מעגל ▼",
    batteryTitle: "סוללה",
    batteryText:
      "סוללה מספקת מתח, שדוחף זרם דרך המעגל.",
    resistorTitle: "נגד",
    resistorText:
      "נגד מגביל את הזרם ומגן על רכיבים מזרימה חשמלית חזקה מדי.",
    capacitorTitle: "קבל",
    capacitorText:
      "קבל אוגר אנרגיה חשמלית לזמן קצר ויכול לשחרר אותה בעת הצורך.",
    switchTitle: "מפסק",
    switchText:
      "מפסק קובע האם המעגל מחובר או מנותק.",
    componentsConcepts: ["סוללות", "נגדים", "קבלים", "מפסקים"],

    realTitle: "🌍 יישום הנדסי אמיתי",
    realText:
      "מעגלים חשמליים משמשים במטענים, חיישנים, טלפונים, רכבים, מחשבים, מכשירים רפואיים, מוצרי חשמל ביתיים ומערכות הספק.",

    interviewTitle: "💼 אתגר ראיון",
    interviewQuestion:
      "אם מעגל לא נדלק, מה מהנדס חשמל צריך לבדוק קודם?",
    interviewAnswer:
      "המהנדס צריך לבדוק אם יש למעגל מקור מתח, האם המסלול סגור, האם הרכיבים מחוברים נכון והאם רכיב כלשהו פגום. דיבוג טוב הוא שיטתי ולא אקראי.",

    back: "חזרה לסקירת הנדסת חשמל",
  },
};
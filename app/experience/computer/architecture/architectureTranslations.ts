export const architectureTranslations = {
  EN: {
    title: "Computer Architecture",
    intro:
      "Learn how computers actually work under the hood — how your code becomes instructions, how the CPU processes information, and how memory affects performance.",

    timeLabel: "⏱ Preview Time",
    time: "10 minutes",
    levelLabel: "🎯 Level",
    level: "Beginner Friendly",
    fieldLabel: "📚 Field",
    field: "Computer Engineering",

    whatTitle: "What is Computer Architecture?",
    whatText:
      "Computer Architecture is the study of how hardware components work together to execute programs. It connects software with the physical computer.",
    whyTitle: "Why engineers learn this:",
    whyItems: [
      "Understand why programs are fast or slow",
      "Design better software systems",
      "Understand CPUs, memory, and hardware limits",
    ],

    lecture: "📖 Lecture",
    keyConcepts: "🧠 Key Concepts",
    exampleTitle: "📝 Example",
    hideExplanation: "Hide explanation ▲",

    dataTitle: "Module 1 — Data Representation",
    dataText:
      "Computers store all information using binary numbers. A binary digit, called a bit, can only have two values:",
    dataCode: `0 = OFF
1 = ON`,
    dataExtra:
      "By combining millions or billions of bits, computers can represent numbers, text, images, videos, and programs.",
    dataConcepts: [
      "Bits and bytes",
      "Binary numbers",
      "How data is stored",
    ],
    exampleText: "What is binary 1010 in decimal?",
    exampleCode: `1×8 + 0×4 + 1×2 + 0×1 = 10`,

    cpuTitle: "Module 2 — How the CPU Works",
    cpuText:
      "The CPU is the brain of the computer. It follows a simple cycle billions of times per second:",
    cpuCode: `FETCH
  ↓
DECODE
  ↓
EXECUTE`,
    explainCpu: "Explain these steps ▼",
    fetchTitle: "FETCH",
    fetchText:
      "The CPU gets the next instruction from memory. For example, it may fetch an instruction that says: add two numbers.",
    decodeTitle: "DECODE",
    decodeText:
      "The CPU understands what the instruction means. It decides what action is needed, such as addition, loading data, or moving information.",
    executeTitle: "EXECUTE",
    executeText:
      "The CPU performs the action. The calculation happens, and the result is stored so the program can continue.",
    cpuConcepts: [
      "Processor instructions",
      "Registers",
      "CPU performance",
    ],
    cpuExample:
      "When your program calculates 5 + 3, the CPU loads the numbers, performs the addition, and stores the result.",

    memoryTitle: "Module 3 — Memory Systems",
    memoryText:
      "Computers use different types of memory. Faster memory is usually smaller and more expensive.",
    memoryCode: `CPU
 ↓
Cache (Fast)
 ↓
RAM
 ↓
Storage (Slow)`,
    explainMemory: "Explain memory levels ▼",
    cpuSubTitle: "CPU",
    cpuSubText:
      "The CPU is the part that executes instructions. It needs data quickly to keep working without waiting.",
    cacheTitle: "Cache",
    cacheText:
      "Cache is very fast memory located close to the CPU. It stores data the CPU is likely to use soon.",
    ramTitle: "RAM",
    ramText:
      "RAM is the main working memory of the computer. Programs and data are kept there while they are being used.",
    storageTitle: "Storage",
    storageText:
      "Storage keeps files and programs permanently, but it is slower than RAM and cache. Examples include SSDs and hard drives.",
    memoryConcepts: [
      "Cache memory",
      "RAM",
      "Storage",
      "Performance bottlenecks",
    ],

    realTitle: "🌍 Real Engineering Application",
    realText:
      "When engineers build high-performance applications, games, processors, or AI systems, they must understand how hardware limitations affect speed and efficiency.",

    interviewTitle: "💼 Interview Challenge",
    interviewQuestion:
      "What happens inside a computer when you open an application?",
    interviewAnswer:
      "The operating system loads the program into memory, creates a process, allocates resources, and the CPU begins executing instructions.",

    back: "Back to Computer Engineering Overview",
  },

  HE: {
    title: "ארכיטקטורת מחשבים",
    intro:
      "למד איך מחשבים באמת עובדים מבפנים — איך קוד הופך לפקודות, איך המעבד מעבד מידע ואיך זיכרון משפיע על ביצועים.",

    timeLabel: "⏱ זמן הצצה",
    time: "10 דקות",
    levelLabel: "🎯 רמה",
    level: "מתאים למתחילים",
    fieldLabel: "📚 תחום",
    field: "הנדסת מחשבים",

    whatTitle: "מהי ארכיטקטורת מחשבים?",
    whatText:
      "ארכיטקטורת מחשבים היא התחום שחוקר איך רכיבי חומרה עובדים יחד כדי להריץ תוכניות. היא מחברת בין תוכנה לבין המחשב הפיזי.",
    whyTitle: "למה מהנדסים לומדים את זה:",
    whyItems: [
      "להבין למה תוכניות מהירות או איטיות",
      "לתכנן מערכות תוכנה טובות יותר",
      "להבין מעבדים, זיכרון ומגבלות חומרה",
    ],

    lecture: "📖 הרצאה",
    keyConcepts: "🧠 מושגים מרכזיים",
    exampleTitle: "📝 דוגמה",
    hideExplanation: "הסתר הסבר ▲",

    dataTitle: "מודול 1 — ייצוג מידע",
    dataText:
      "מחשבים שומרים את כל המידע באמצעות מספרים בינאריים. ספרה בינארית, שנקראת ביט, יכולה לקבל רק שני ערכים:",
    dataCode: `0 = OFF
1 = ON`,
    dataExtra:
      "באמצעות שילוב של מיליוני או מיליארדי ביטים, מחשבים יכולים לייצג מספרים, טקסט, תמונות, וידאו ותוכניות.",
    dataConcepts: [
      "ביטים ובייטים",
      "מספרים בינאריים",
      "איך מידע נשמר",
    ],
    exampleText: "מה הערך העשרוני של המספר הבינארי 1010?",
    exampleCode: `1×8 + 0×4 + 1×2 + 0×1 = 10`,

    cpuTitle: "מודול 2 — איך המעבד עובד",
    cpuText:
      "המעבד הוא המוח של המחשב. הוא מבצע מחזור פשוט מיליארדי פעמים בשנייה:",
    cpuCode: `FETCH
  ↓
DECODE
  ↓
EXECUTE`,
    explainCpu: "הסבר את השלבים ▼",
    fetchTitle: "FETCH",
    fetchText:
      "המעבד מביא את הפקודה הבאה מהזיכרון. לדוגמה, פקודה שאומרת לחבר שני מספרים.",
    decodeTitle: "DECODE",
    decodeText:
      "המעבד מפרש את משמעות הפקודה ומחליט איזו פעולה לבצע, כמו חיבור, טעינת מידע או העברת נתונים.",
    executeTitle: "EXECUTE",
    executeText:
      "המעבד מבצע את הפעולה. החישוב מתבצע והתוצאה נשמרת כדי שהתוכנית תוכל להמשיך.",
    cpuConcepts: [
      "פקודות מעבד",
      "רגיסטרים",
      "ביצועי CPU",
    ],
    cpuExample:
      "כאשר תוכנית מחשבת 5 + 3, המעבד טוען את המספרים, מבצע חיבור ושומר את התוצאה.",

    memoryTitle: "מודול 3 — מערכות זיכרון",
    memoryText:
      "מחשבים משתמשים בסוגים שונים של זיכרון. זיכרון מהיר יותר בדרך כלל קטן ויקר יותר.",
    memoryCode: `CPU
 ↓
Cache (Fast)
 ↓
RAM
 ↓
Storage (Slow)`,
    explainMemory: "הסבר רמות זיכרון ▼",
    cpuSubTitle: "CPU",
    cpuSubText:
      "ה־CPU הוא הרכיב שמבצע פקודות. הוא צריך מידע במהירות כדי להמשיך לעבוד בלי להמתין.",
    cacheTitle: "Cache",
    cacheText:
      "Cache הוא זיכרון מהיר מאוד שנמצא קרוב למעבד ושומר מידע שהמעבד כנראה יצטרך בקרוב.",
    ramTitle: "RAM",
    ramText:
      "RAM הוא זיכרון העבודה המרכזי של המחשב. תוכניות ונתונים נשמרים בו בזמן השימוש.",
    storageTitle: "Storage",
    storageText:
      "Storage שומר קבצים ותוכניות לאורך זמן, אבל הוא איטי יותר מ־RAM ו־Cache. דוגמאות הן SSD וכוננים קשיחים.",
    memoryConcepts: [
      "זיכרון Cache",
      "RAM",
      "אחסון",
      "צווארי בקבוק בביצועים",
    ],

    realTitle: "🌍 יישום הנדסי אמיתי",
    realText:
      "כאשר מהנדסים בונים אפליקציות מהירות, משחקים, מעבדים או מערכות AI, הם חייבים להבין כיצד מגבלות חומרה משפיעות על מהירות ויעילות.",

    interviewTitle: "💼 אתגר ראיון",
    interviewQuestion:
      "מה קורה בתוך מחשב כאשר פותחים אפליקציה?",
    interviewAnswer:
      "מערכת ההפעלה טוענת את התוכנית לזיכרון, יוצרת תהליך, מקצה משאבים והמעבד מתחיל לבצע פקודות.",

    back: "חזרה לסקירת הנדסת מחשבים",
  },
};
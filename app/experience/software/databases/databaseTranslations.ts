export const databaseTranslations = {
  EN: {
    title: "Databases Preview",
    intro:
      "Learn how apps store, organize, search, and manage data. Databases are behind almost every modern app: Instagram, banks, online stores, hospitals, and university systems.",

    timeLabel: "⏱ Estimated Time",
    time: "10 minutes",
    levelLabel: "🎯 Level",
    level: "Beginner Friendly",
    fieldLabel: "📚 Field",
    field: "Software Engineering",

    whatTitle: "What is a Database?",
    whatText:
      "A database is a system used to store and manage information in an organized way. Instead of saving data randomly, databases help apps find, update, and protect information efficiently.",
    whyTitle: "Why software engineers learn this:",
    whyItems: [
      "Store user accounts, messages, orders, and results",
      "Search and filter information quickly",
      "Keep data consistent and reliable",
      "Build real apps that remember information",
    ],

    tablesTitle: "Module 1 — Tables, Rows, and Columns",
    lecture: "📖 Lecture",
    tablesText:
      "Many databases organize data using tables. A table is similar to a spreadsheet.",
    explainTables: "Explain tables ▼",
    hideExplanation: "Hide explanation ▲",
    tableTitle: "Table",
    tableText:
      "A table stores one type of information. For example, a Users table stores information about users.",
    rowTitle: "Row",
    rowText: "A row is one record. In the example, each row represents one user.",
    columnTitle: "Column",
    columnText: "A column describes one property, such as id, name, or age.",
    keyConcepts: "🧠 Key Concepts",
    tableConcepts: ["Tables", "Rows", "Columns", "Records"],

    sqlTitle: "Module 2 — SQL Queries",
    sqlText:
      "SQL is a language used to ask questions from a database. For example, you can ask: “Show me all users older than 18.”",
    explainSql: "Explain SQL query ▼",
    selectTitle: "SELECT",
    selectText: "Chooses which columns you want to see. Here we want name and age.",
    fromTitle: "FROM",
    fromText:
      "Tells the database which table to search. Here we search the users table.",
    whereTitle: "WHERE",
    whereText:
      "Filters the results. Here we only want users whose age is 18 or older.",
    sqlConcepts: ["SELECT", "FROM", "WHERE", "Filtering data"],

    indexesTitle: "Module 3 — Searching and Indexes",
    indexesText:
      "When a database has millions of records, searching one by one can be slow. Indexes help databases find data faster.",
    explainIndexes: "Explain indexes ▼",
    whatIndexTitle: "What is an index?",
    whatIndexText:
      "An index is like the index at the back of a book. Instead of reading every page, you can quickly find where a topic appears.",
    whyMattersTitle: "Why it matters",
    whyMattersText:
      "Good indexes can make searches much faster, especially when an app has many users, messages, or products.",
    indexConcepts: [
      "Search performance",
      "Indexes",
      "Large data sets",
      "Database optimization",
    ],

    exampleTitle: "🧪 Example — Find Active Students",
    exampleText:
      "This example shows how a database can filter students based on their status.",
    explainExample: "Explain this example ▼",
    dataTitle: "Data",
    dataText:
      "The program stores students as records. Each student has a name and an active status.",
    loopTitle: "Loop",
    loopText: "The loop checks each student one by one.",
    conditionTitle: "Condition",
    conditionText: "The condition only prints students whose active value is true.",
    exampleSummary:
      "In real databases, SQL can do this kind of filtering much more efficiently.",

    realTitle: "🌍 Real Engineering Application",
    realText:
      "Databases are used in social media apps, payment systems, school systems, medical records, delivery apps, and almost every software product that needs to remember information.",

    interviewTitle: "💼 Interview Challenge",
    interviewQuestion:
      "An app becomes slow when searching thousands of users. What could be the problem?",
    interviewAnswer:
      "The database may be searching inefficiently. Engineers may need better queries, indexes, or improved data structure. This tests whether you understand that software speed often depends on how data is stored and accessed.",

    back: "Back to Software Engineering Overview",
  },

  HE: {
    title: "הצצה לבסיסי נתונים",
    intro:
      "למד איך אפליקציות שומרות, מארגנות, מחפשות ומנהלות נתונים. בסיסי נתונים נמצאים מאחורי כמעט כל אפליקציה מודרנית: אינסטגרם, בנקים, חנויות אונליין, בתי חולים ומערכות אוניברסיטאיות.",

    timeLabel: "⏱ זמן משוער",
    time: "10 דקות",
    levelLabel: "🎯 רמה",
    level: "מתאים למתחילים",
    fieldLabel: "📚 תחום",
    field: "הנדסת תוכנה",

    whatTitle: "מהו בסיס נתונים?",
    whatText:
      "בסיס נתונים הוא מערכת לשמירה וניהול של מידע בצורה מסודרת. במקום לשמור נתונים באופן אקראי, בסיסי נתונים עוזרים לאפליקציות למצוא, לעדכן ולהגן על מידע ביעילות.",
    whyTitle: "למה מהנדסי תוכנה לומדים את זה:",
    whyItems: [
      "לשמור חשבונות משתמשים, הודעות, הזמנות ותוצאות",
      "לחפש ולסנן מידע במהירות",
      "לשמור על נתונים עקביים ואמינים",
      "לבנות אפליקציות אמיתיות שזוכרות מידע",
    ],

    tablesTitle: "מודול 1 — טבלאות, שורות ועמודות",
    lecture: "📖 הרצאה",
    tablesText:
      "הרבה בסיסי נתונים מארגנים מידע באמצעות טבלאות. טבלה דומה לגיליון אלקטרוני.",
    explainTables: "הסבר טבלאות ▼",
    hideExplanation: "הסתר הסבר ▲",
    tableTitle: "טבלה",
    tableText:
      "טבלה שומרת סוג אחד של מידע. לדוגמה, טבלת Users שומרת מידע על משתמשים.",
    rowTitle: "שורה",
    rowText: "שורה היא רשומה אחת. בדוגמה, כל שורה מייצגת משתמש אחד.",
    columnTitle: "עמודה",
    columnText: "עמודה מתארת מאפיין אחד, כמו id, name או age.",
    keyConcepts: "🧠 מושגים מרכזיים",
    tableConcepts: ["טבלאות", "שורות", "עמודות", "רשומות"],

    sqlTitle: "מודול 2 — שאילתות SQL",
    sqlText:
      "SQL היא שפה שמשמשת לשאול שאלות מבסיס נתונים. לדוגמה: “הצג לי את כל המשתמשים מעל גיל 18.”",
    explainSql: "הסבר שאילתת SQL ▼",
    selectTitle: "SELECT",
    selectText: "בוחר אילו עמודות רוצים לראות. כאן אנחנו רוצים name ו־age.",
    fromTitle: "FROM",
    fromText:
      "אומר לבסיס הנתונים באיזו טבלה לחפש. כאן מחפשים בטבלת users.",
    whereTitle: "WHERE",
    whereText:
      "מסנן את התוצאות. כאן רוצים רק משתמשים שהגיל שלהם 18 ומעלה.",
    sqlConcepts: ["SELECT", "FROM", "WHERE", "סינון נתונים"],

    indexesTitle: "מודול 3 — חיפוש ואינדקסים",
    indexesText:
      "כאשר בבסיס נתונים יש מיליוני רשומות, חיפוש אחת־אחת יכול להיות איטי. אינדקסים עוזרים לבסיסי נתונים למצוא מידע מהר יותר.",
    explainIndexes: "הסבר אינדקסים ▼",
    whatIndexTitle: "מהו אינדקס?",
    whatIndexText:
      "אינדקס הוא כמו מפתח בסוף ספר. במקום לקרוא כל עמוד, אפשר למצוא במהירות איפה נושא מסוים מופיע.",
    whyMattersTitle: "למה זה חשוב",
    whyMattersText:
      "אינדקסים טובים יכולים להפוך חיפושים למהירים בהרבה, במיוחד כאשר לאפליקציה יש הרבה משתמשים, הודעות או מוצרים.",
    indexConcepts: [
      "ביצועי חיפוש",
      "אינדקסים",
      "מאגרי מידע גדולים",
      "אופטימיזציית בסיסי נתונים",
    ],

    exampleTitle: "🧪 דוגמה — מציאת תלמידים פעילים",
    exampleText:
      "הדוגמה הזו מראה איך בסיס נתונים יכול לסנן תלמידים לפי הסטטוס שלהם.",
    explainExample: "הסבר את הדוגמה ▼",
    dataTitle: "נתונים",
    dataText:
      "התוכנית שומרת תלמידים כרשומות. לכל תלמיד יש שם וסטטוס פעיל.",
    loopTitle: "לולאה",
    loopText: "הלולאה בודקת כל תלמיד אחד אחרי השני.",
    conditionTitle: "תנאי",
    conditionText: "התנאי מדפיס רק תלמידים שהערך active שלהם הוא true.",
    exampleSummary:
      "בבסיסי נתונים אמיתיים, SQL יכול לבצע סינון כזה בצורה יעילה הרבה יותר.",

    realTitle: "🌍 יישום הנדסי אמיתי",
    realText:
      "בסיסי נתונים משמשים באפליקציות רשת חברתית, מערכות תשלום, מערכות בתי ספר, רשומות רפואיות, אפליקציות משלוחים וכמעט כל מוצר תוכנה שצריך לזכור מידע.",

    interviewTitle: "💼 אתגר ראיון",
    interviewQuestion:
      "אפליקציה נהיית איטית כאשר מחפשים בין אלפי משתמשים. מה יכולה להיות הבעיה?",
    interviewAnswer:
      "ייתכן שבסיס הנתונים מחפש בצורה לא יעילה. מהנדסים עשויים להזדקק לשאילתות טובות יותר, אינדקסים או מבנה נתונים משופר. זה בודק אם אתה מבין שמהירות תוכנה תלויה לעיתים בדרך שבה נתונים נשמרים ונגישים.",

    back: "חזרה לסקירת הנדסת תוכנה",
  },
};
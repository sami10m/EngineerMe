"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { programmingTranslations } from "./programmingTranslations";

const content = {
  EN: {
    title: "Programming Fundamentals Preview",
    intro:
      "Learn how software engineers turn ideas into instructions that computers can understand. This preview introduces the basic building blocks of programming.",

    timeLabel: "⏱ Estimated Time",
    time: "10 minutes",
    levelLabel: "🎯 Level",
    level: "Beginner Friendly",
    fieldLabel: "📚 Field",
    field: "Software Engineering",

    whatTitle: "What is Programming?",
    whatText:
      "Programming is the process of writing instructions for a computer. These instructions tell the computer what to do, how to make decisions, and how to repeat tasks.",

    variablesTitle: "Module 1 — Variables",
    variablesText: "Variables store information so a program can use it later.",
    explainVariables: "Explain variables ▼",
    hideExplanation: "Hide explanation ▲",
    variablesAnswer:
      "A variable is like a labeled box. The program can put information in it, read it later, and change it when needed.",

    conditionsTitle: "Module 2 — Conditions",
    conditionsText: "Conditions allow programs to make decisions.",
    explainConditions: "Explain conditions ▼",
    conditionsAnswer:
      "A condition checks whether something is true or false. Based on that, the program chooses what action to take.",

    loopsTitle: "Module 3 — Loops",
    loopsText:
      "Loops repeat instructions without writing the same code many times.",
    explainLoops: "Explain loops ▼",
    loopsAnswer:
      "A loop is useful when the same action needs to happen many times, such as checking every item in a list or showing every message.",

    codeTitle: "🧪 Code Example — Student Pass/Fail System",
    codeText:
      "This example combines variables, conditions, and loops in one small program.",
    explainCode: "Explain this code ▼",

    line1Title: "Line 1",
    line1:
      "The program stores several student scores inside a list called students.",
    line3Title: "Line 3",
    line3:
      "The loop goes through each score one by one. This means the same logic can be applied to many students without repeating the code manually.",
    line4Title: "Line 4",
    line4: "The condition checks if the score is greater than or equal to 60.",
    lines58Title: "Lines 5–8",
    lines58:
      "If the score is 60 or more, the student passes. Otherwise, the student fails.",
    lines1012Title: "Lines 10–12",
    lines1012:
      "The program prints the score, result, and a separator line to make the output easier to read.",
    codeSummary:
      "This is basic software engineering thinking: store data, repeat actions, make decisions, and show results clearly.",

    realTitle: "🌍 Real Engineering Application",
    realText:
      "Programming is used to build websites, apps, games, AI tools, banking systems, medical software, and almost every modern digital product.",

    interviewTitle: "💼 Interview Challenge",
    interviewQuestion:
      "Why is it important to break a large problem into smaller steps before coding?",
    interviewAnswer:
      "Because software engineers solve complex problems by dividing them into smaller, clearer tasks. This makes the solution easier to design, test, debug, and maintain.",

    back: "Back to Software Engineering Overview",
  },

  HE: {
    title: "הצצה ליסודות התכנות",
    intro:
      "למד איך מהנדסי תוכנה הופכים רעיונות להוראות שמחשב יכול להבין. ההצצה הזו מציגה את אבני הבניין הבסיסיות של תכנות.",

    timeLabel: "⏱ זמן משוער",
    time: "10 דקות",
    levelLabel: "🎯 רמה",
    level: "מתאים למתחילים",
    fieldLabel: "📚 תחום",
    field: "הנדסת תוכנה",

    whatTitle: "מה זה תכנות?",
    whatText:
      "תכנות הוא תהליך של כתיבת הוראות למחשב. ההוראות אומרות למחשב מה לעשות, איך לקבל החלטות ואיך לחזור על פעולות.",

    variablesTitle: "מודול 1 — משתנים",
    variablesText: "משתנים שומרים מידע כדי שהתוכנית תוכל להשתמש בו בהמשך.",
    explainVariables: "הסבר משתנים ▼",
    hideExplanation: "הסתר הסבר ▲",
    variablesAnswer:
      "משתנה הוא כמו קופסה עם שם. התוכנית יכולה לשים בתוכה מידע, לקרוא אותו בהמשך ולשנות אותו כשצריך.",

    conditionsTitle: "מודול 2 — תנאים",
    conditionsText: "תנאים מאפשרים לתוכניות לקבל החלטות.",
    explainConditions: "הסבר תנאים ▼",
    conditionsAnswer:
      "תנאי בודק אם משהו נכון או לא נכון. לפי התוצאה, התוכנית בוחרת איזו פעולה לבצע.",

    loopsTitle: "מודול 3 — לולאות",
    loopsText:
      "לולאות חוזרות על הוראות בלי לכתוב את אותו קוד שוב ושוב.",
    explainLoops: "הסבר לולאות ▼",
    loopsAnswer:
      "לולאה שימושית כאשר אותה פעולה צריכה לקרות הרבה פעמים, למשל בדיקה של כל איבר ברשימה או הצגה של כל הודעה.",

    codeTitle: "🧪 דוגמת קוד — מערכת עובר/נכשל לתלמידים",
    codeText:
      "הדוגמה הזו משלבת משתנים, תנאים ולולאות בתוכנית קטנה אחת.",
    explainCode: "הסבר את הקוד ▼",

    line1Title: "שורה 1",
    line1: "התוכנית שומרת כמה ציוני תלמידים בתוך רשימה בשם students.",
    line3Title: "שורה 3",
    line3:
      "הלולאה עוברת על כל ציון אחד אחרי השני. כך אפשר להפעיל את אותה לוגיקה על הרבה תלמידים בלי לשכפל קוד ידנית.",
    line4Title: "שורה 4",
    line4: "התנאי בודק אם הציון גדול או שווה ל־60.",
    lines58Title: "שורות 5–8",
    lines58:
      "אם הציון הוא 60 ומעלה, התלמיד עובר. אחרת, התלמיד נכשל.",
    lines1012Title: "שורות 10–12",
    lines1012:
      "התוכנית מדפיסה את הציון, התוצאה ושורת הפרדה כדי שהפלט יהיה קל לקריאה.",
    codeSummary:
      "זוהי חשיבה בסיסית בהנדסת תוכנה: שמירת נתונים, חזרה על פעולות, קבלת החלטות והצגת תוצאות בצורה ברורה.",

    realTitle: "🌍 יישום הנדסי אמיתי",
    realText:
      "תכנות משמש לבניית אתרים, אפליקציות, משחקים, כלי AI, מערכות בנקאות, תוכנות רפואיות וכמעט כל מוצר דיגיטלי מודרני.",

    interviewTitle: "💼 אתגר ראיון",
    interviewQuestion:
      "למה חשוב לחלק בעיה גדולה לשלבים קטנים לפני שמתחילים לכתוב קוד?",
    interviewAnswer:
      "כי מהנדסי תוכנה פותרים בעיות מורכבות על ידי חלוקה למשימות קטנות וברורות יותר. כך קל יותר לתכנן, לבדוק, לדבג ולתחזק את הפתרון.",

    back: "חזרה לסקירת הנדסת תוכנה",
  },
};

export default function ProgrammingFundamentalsPage() {
  const [showVariables, setShowVariables] = useState(false);
  const [showConditions, setShowConditions] = useState(false);
  const [showLoops, setShowLoops] = useState(false);
  const [showCodeExample, setShowCodeExample] = useState(false);
  const [language, setLanguage] = useState<"EN" | "AR" | "HE">("EN");

  useEffect(() => {
    const updateLanguage = () => {
      const savedLanguage = localStorage.getItem("language") as
        | "EN"
        | "AR"
        | "HE"
        | null;

      if (savedLanguage) setLanguage(savedLanguage);
    };

    updateLanguage();
    window.addEventListener("languageChange", updateLanguage);

    return () => {
      window.removeEventListener("languageChange", updateLanguage);
    };
  }, []);

  const courseLanguage = language === "HE" ? "HE" : "EN";
  const t = programmingTranslations[courseLanguage];
  const isRTL = courseLanguage === "HE";

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "70px 20px",
        direction: isRTL ? "rtl" : "ltr",
        textAlign: isRTL ? "right" : "left",
      }}
    >
      <h1 style={{ fontSize: "46px", color: "#0f172a" }}>{t.title}</h1>

      <p style={textStyle}>{t.intro}</p>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "25px" }}>
        <div style={infoCardStyle}>{t.timeLabel}<br /><strong>{t.time}</strong></div>
        <div style={infoCardStyle}>{t.levelLabel}<br /><strong>{t.level}</strong></div>
        <div style={infoCardStyle}>{t.fieldLabel}<br /><strong>{t.field}</strong></div>
      </div>

      <div style={sectionStyle}>
        <h2>{t.whatTitle}</h2>
        <p style={textStyle}>{t.whatText}</p>
      </div>

      <div style={sectionStyle}>
        <h2>{t.variablesTitle}</h2>
        <p style={textStyle}>{t.variablesText}</p>

        <pre style={codeStyle}>{`age = 18
name = "Carlos"`}</pre>

        <button onClick={() => setShowVariables(!showVariables)} style={linkButtonStyle}>
          {showVariables ? t.hideExplanation : t.explainVariables}
        </button>

        {showVariables && <div style={answerStyle}>{t.variablesAnswer}</div>}
      </div>

      <div style={sectionStyle}>
        <h2>{t.conditionsTitle}</h2>
        <p style={textStyle}>{t.conditionsText}</p>

        <pre style={codeStyle}>{`if score >= 60:
  pass
else:
  fail`}</pre>

        <button onClick={() => setShowConditions(!showConditions)} style={linkButtonStyle}>
          {showConditions ? t.hideExplanation : t.explainConditions}
        </button>

        {showConditions && <div style={answerStyle}>{t.conditionsAnswer}</div>}
      </div>

      <div style={sectionStyle}>
        <h2>{t.loopsTitle}</h2>
        <p style={textStyle}>{t.loopsText}</p>

        <pre style={codeStyle}>{`for item in list:
  check item`}</pre>

        <button onClick={() => setShowLoops(!showLoops)} style={linkButtonStyle}>
          {showLoops ? t.hideExplanation : t.explainLoops}
        </button>

        {showLoops && <div style={answerStyle}>{t.loopsAnswer}</div>}
      </div>

      <div style={sectionStyle}>
        <h2>{t.codeTitle}</h2>

        <p style={textStyle}>{t.codeText}</p>

        <pre style={codeStyle}>
{`students = [85, 42, 73, 59]

for score in students:
  if score >= 60:
    result = "Pass"
  else:
    result = "Fail"

  print("Score:", score)
  print("Result:", result)
  print("------")`}
        </pre>

        <button
          onClick={() => setShowCodeExample(!showCodeExample)}
          style={linkButtonStyle}
        >
          {showCodeExample ? t.hideExplanation : t.explainCode}
        </button>

        {showCodeExample && (
          <div style={answerStyle}>
            <h4>{t.line1Title}</h4>
            <p>{t.line1}</p>

            <h4>{t.line3Title}</h4>
            <p>{t.line3}</p>

            <h4>{t.line4Title}</h4>
            <p>{t.line4}</p>

            <h4>{t.lines58Title}</h4>
            <p>{t.lines58}</p>

            <h4>{t.lines1012Title}</h4>
            <p>{t.lines1012}</p>

            <p>{t.codeSummary}</p>
          </div>
        )}
      </div>

      <div style={sectionStyle}>
        <h2>{t.realTitle}</h2>
        <p style={textStyle}>{t.realText}</p>
      </div>

      <div style={sectionStyle}>
        <h2>{t.interviewTitle}</h2>
        <p style={textStyle}>{t.interviewQuestion}</p>

        <div style={answerStyle}>{t.interviewAnswer}</div>
      </div>

      <a href="/experience/software">
        <button style={buttonStyle}>{t.back}</button>
      </a>
    </main>
  );
}

const sectionStyle: CSSProperties = {
  backgroundColor: "white",
  borderRadius: "18px",
  padding: "30px",
  boxShadow: "0 8px 25px rgba(15,23,42,0.08)",
  marginTop: "30px",
};

const textStyle: CSSProperties = {
  color: "#475569",
  lineHeight: "1.8",
  fontSize: "18px",
};

const codeStyle: CSSProperties = {
  backgroundColor: "#0f172a",
  color: "white",
  padding: "18px",
  borderRadius: "12px",
  overflowX: "auto",
  direction: "ltr",
  textAlign: "left",
};

const answerStyle: CSSProperties = {
  backgroundColor: "#eff6ff",
  padding: "20px",
  borderRadius: "14px",
  color: "#1e3a8a",
  lineHeight: "1.7",
  marginTop: "15px",
};

const linkButtonStyle: CSSProperties = {
  marginTop: "15px",
  padding: "10px 14px",
  borderRadius: "10px",
  border: "1px solid #1e3a8a",
  backgroundColor: "white",
  color: "#1e3a8a",
  cursor: "pointer",
  fontWeight: "bold",
};

const buttonStyle: CSSProperties = {
  marginTop: "30px",
  padding: "12px 20px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#1e3a8a",
  color: "white",
  cursor: "pointer",
};

const infoCardStyle: CSSProperties = {
  backgroundColor: "#f8fafc",
  borderRadius: "14px",
  padding: "18px 22px",
  border: "1px solid #e5e7eb",
  color: "#334155",
  lineHeight: "1.8",
};
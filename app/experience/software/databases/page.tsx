"use client";

import { useEffect, useState } from "react";
import { databaseTranslations } from "./databaseTranslations";

export default function DatabasesPreviewPage() {
  const [showTables, setShowTables] = useState(false);
  const [showSql, setShowSql] = useState(false);
  const [showIndexes, setShowIndexes] = useState(false);
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
  const t = databaseTranslations[courseLanguage];
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

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "25px",
        }}
      >
        <div style={infoCardStyle}>
          {t.timeLabel}
          <br />
          <strong>{t.time}</strong>
        </div>

        <div style={infoCardStyle}>
          {t.levelLabel}
          <br />
          <strong>{t.level}</strong>
        </div>

        <div style={infoCardStyle}>
          {t.fieldLabel}
          <br />
          <strong>{t.field}</strong>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2>{t.whatTitle}</h2>

        <p style={textStyle}>{t.whatText}</p>

        <h3>{t.whyTitle}</h3>

        <ul style={listStyle}>
          {t.whyItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>{t.tablesTitle}</h2>

        <h3>{t.lecture}</h3>

        <p style={textStyle}>{t.tablesText}</p>

        <pre style={codeStyle}>
{`Users Table

id | name  | age
---|-------|----
1  | Dani  | 18
2  | Maya  | 19
3  | Adam  | 20`}
        </pre>

        <button
          onClick={() => setShowTables(!showTables)}
          style={linkButtonStyle}
        >
          {showTables ? t.hideExplanation : t.explainTables}
        </button>

        {showTables && (
          <div style={answerStyle}>
            <h4>{t.tableTitle}</h4>
            <p>{t.tableText}</p>

            <h4>{t.rowTitle}</h4>
            <p>{t.rowText}</p>

            <h4>{t.columnTitle}</h4>
            <p>{t.columnText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>

        <ul style={listStyle}>
          {t.tableConcepts.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>{t.sqlTitle}</h2>

        <h3>{t.lecture}</h3>

        <p style={textStyle}>{t.sqlText}</p>

        <pre style={codeStyle}>
{`SELECT name, age
FROM users
WHERE age >= 18;`}
        </pre>

        <button onClick={() => setShowSql(!showSql)} style={linkButtonStyle}>
          {showSql ? t.hideExplanation : t.explainSql}
        </button>

        {showSql && (
          <div style={answerStyle}>
            <h4>{t.selectTitle}</h4>
            <p>{t.selectText}</p>

            <h4>{t.fromTitle}</h4>
            <p>{t.fromText}</p>

            <h4>{t.whereTitle}</h4>
            <p>{t.whereText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>

        <ul style={listStyle}>
          {t.sqlConcepts.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>{t.indexesTitle}</h2>

        <p style={textStyle}>{t.indexesText}</p>

        <pre style={codeStyle}>
{`Without index:
Check many rows one by one

With index:
Jump faster to the matching data`}
        </pre>

        <button
          onClick={() => setShowIndexes(!showIndexes)}
          style={linkButtonStyle}
        >
          {showIndexes ? t.hideExplanation : t.explainIndexes}
        </button>

        {showIndexes && (
          <div style={answerStyle}>
            <h4>{t.whatIndexTitle}</h4>
            <p>{t.whatIndexText}</p>

            <h4>{t.whyMattersTitle}</h4>
            <p>{t.whyMattersText}</p>
          </div>
        )}
      </div>

      <div style={sectionStyle}>
        <h2>{t.exampleTitle}</h2>

        <p style={textStyle}>{t.exampleText}</p>

        <button
          onClick={() => setShowCodeExample(!showCodeExample)}
          style={linkButtonStyle}
        >
          {showCodeExample ? t.hideExplanation : t.explainExample}
        </button>

        {showCodeExample && (
          <div style={answerStyle}>
            <h4>{t.dataTitle}</h4>
            <p>{t.dataText}</p>

            <h4>{t.loopTitle}</h4>
            <p>{t.loopText}</p>

            <h4>{t.conditionTitle}</h4>
            <p>{t.conditionText}</p>

            <p>{t.exampleSummary}</p>
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

const sectionStyle = {
  backgroundColor: "white",
  borderRadius: "18px",
  padding: "30px",
  boxShadow: "0 8px 25px rgba(15,23,42,0.08)",
  border: "1px solid #e5e7eb",
  marginTop: "30px",
} as const;

const textStyle = {
  fontSize: "18px",
  color: "#475569",
  lineHeight: "1.8",
} as const;

const listStyle = {
  lineHeight: "2",
  color: "#475569",
} as const;

const infoCardStyle = {
  backgroundColor: "#eff6ff",
  border: "1px solid #bfdbfe",
  borderRadius: "14px",
  padding: "16px 20px",
  color: "#1e3a8a",
} as const;

const codeStyle = {
  backgroundColor: "#0f172a",
  color: "white",
  padding: "18px",
  borderRadius: "14px",
  overflowX: "auto",
  lineHeight: "1.7",
  whiteSpace: "pre-wrap",
} as const;

const answerStyle = {
  marginTop: "20px",
  backgroundColor: "#eff6ff",
  padding: "20px",
  borderRadius: "14px",
  color: "#1e3a8a",
  lineHeight: "1.7",
} as const;

const linkButtonStyle = {
  marginTop: "15px",
  padding: "10px 16px",
  borderRadius: "10px",
  border: "1px solid #1e3a8a",
  backgroundColor: "white",
  color: "#1e3a8a",
  cursor: "pointer",
  fontWeight: "bold",
} as const;

const buttonStyle = {
  marginTop: "30px",
  padding: "12px 20px",
  borderRadius: "10px",
  border: "1px solid #1e3a8a",
  backgroundColor: "white",
  color: "#1e3a8a",
  cursor: "pointer",
  fontWeight: "bold",
} as const;
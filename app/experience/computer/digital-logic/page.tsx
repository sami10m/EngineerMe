"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { digitalLogicTranslations } from "./digitalLogicTranslations";

export default function DigitalLogicPage() {
  const [showBinary, setShowBinary] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const [showCircuits, setShowCircuits] = useState(false);

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
  const t = digitalLogicTranslations[courseLanguage];
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

        <h3>{t.whyTitle}</h3>
        <ul style={listStyle}>
          {t.whyItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>{t.binaryTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.binaryText}</p>

        <pre style={codeStyle}>{t.binaryCode}</pre>

        <button onClick={() => setShowBinary(!showBinary)} style={linkButtonStyle}>
          {showBinary ? t.hideExplanation : t.explainBinary}
        </button>

        {showBinary && (
          <div style={answerStyle}>
            <h4>{t.whyBinaryTitle}</h4>
            <p>{t.whyBinaryText}</p>

            <h4>{t.whyMatterTitle}</h4>
            <p>{t.whyMatterText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.binaryConcepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>{t.exampleTitle}</h3>
        <p style={textStyle}>{t.binaryExampleText}</p>
        <pre style={codeStyle}>{t.binaryExampleCode}</pre>
      </div>

      <div style={sectionStyle}>
        <h2>{t.gatesTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.gatesText}</p>

        <pre style={codeStyle}>{t.gatesCode}</pre>

        <button onClick={() => setShowGates(!showGates)} style={linkButtonStyle}>
          {showGates ? t.hideExplanation : t.explainGates}
        </button>

        {showGates && (
          <div style={answerStyle}>
            <h4>{t.andTitle}</h4>
            <p>{t.andText}</p>

            <h4>{t.orTitle}</h4>
            <p>{t.orText}</p>

            <h4>{t.notTitle}</h4>
            <p>{t.notText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.gatesConcepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>{t.exampleTitle}</h3>
        <p style={textStyle}>{t.gatesExampleText}</p>
        <pre style={codeStyle}>{t.gatesExampleCode}</pre>
      </div>

      <div style={sectionStyle}>
        <h2>{t.circuitsTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.circuitsText}</p>

        <pre style={codeStyle}>{t.circuitsCode}</pre>

        <button onClick={() => setShowCircuits(!showCircuits)} style={linkButtonStyle}>
          {showCircuits ? t.hideExplanation : t.explainCircuits}
        </button>

        {showCircuits && (
          <div style={answerStyle}>
            <h4>{t.buildTitle}</h4>
            <p>{t.buildText}</p>

            <h4>{t.powerTitle}</h4>
            <p>{t.powerText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.circuitsConcepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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

      <a href="/experience/computer">
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

const listStyle: CSSProperties = {
  lineHeight: "2",
};

const codeStyle: CSSProperties = {
  backgroundColor: "#0f172a",
  color: "white",
  padding: "18px",
  borderRadius: "12px",
  overflowX: "auto",
  direction: "ltr",
  textAlign: "left",
  whiteSpace: "pre-wrap",
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
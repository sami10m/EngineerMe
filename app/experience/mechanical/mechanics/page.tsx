"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { mechanicsTranslations } from "./mechanicsTranslations";

export default function MechanicsPreviewPage() {
  const [showForces, setShowForces] = useState(false);
  const [showNewton, setShowNewton] = useState(false);
  const [showMotion, setShowMotion] = useState(false);
  const [showExample, setShowExample] = useState(false);

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
  const t = mechanicsTranslations[courseLanguage];
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
        <h2>{t.forcesTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.forcesText}</p>

        <pre style={codeStyle}>{t.forcesCode}</pre>

        <button onClick={() => setShowForces(!showForces)} style={linkButtonStyle}>
          {showForces ? t.hideExplanation : t.explainForces}
        </button>

        {showForces && (
          <div style={answerStyle}>
            <h4>{t.forceDoTitle}</h4>
            <p>{t.forceDoText}</p>

            <h4>{t.engineeringTitle}</h4>
            <p>{t.engineeringText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.forceConcepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>{t.newtonTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.newtonText}</p>

        <pre style={codeStyle}>{t.newtonCode}</pre>

        <button onClick={() => setShowNewton(!showNewton)} style={linkButtonStyle}>
          {showNewton ? t.hideExplanation : t.explainNewton}
        </button>

        {showNewton && (
          <div style={answerStyle}>
            <h4>{t.moreForceTitle}</h4>
            <p>{t.moreForceText}</p>

            <h4>{t.moreMassTitle}</h4>
            <p>{t.moreMassText}</p>

            <h4>{t.whyCareTitle}</h4>
            <p>{t.whyCareText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.newtonConcepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>{t.exampleTitle}</h3>
        <p style={textStyle}>{t.exampleText}</p>
        <pre style={codeStyle}>{t.exampleCode}</pre>
      </div>

      <div style={sectionStyle}>
        <h2>{t.motionTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.motionText}</p>

        <pre style={codeStyle}>{t.motionCode}</pre>

        <button onClick={() => setShowMotion(!showMotion)} style={linkButtonStyle}>
          {showMotion ? t.hideExplanation : t.explainMotion}
        </button>

        {showMotion && (
          <div style={answerStyle}>
            <h4>{t.speedTitle}</h4>
            <p>{t.speedText}</p>

            <h4>{t.velocityTitle}</h4>
            <p>{t.velocityText}</p>

            <h4>{t.accelerationTitle}</h4>
            <p>{t.accelerationText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.motionConcepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>{t.massExampleTitle}</h2>
        <p style={textStyle}>{t.massExampleText}</p>

        <pre style={codeStyle}>{t.massExampleCode}</pre>

        <button onClick={() => setShowExample(!showExample)} style={linkButtonStyle}>
          {showExample ? t.hideExplanation : t.explainExample}
        </button>

        {showExample && (
          <div style={answerStyle}>
            <p>{t.massExampleAnswer}</p>
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

      <a href="/experience/mechanical">
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
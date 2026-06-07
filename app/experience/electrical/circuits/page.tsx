"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { circuitTranslations } from "./circuitTranslations";

export default function ElectricCircuitsPreviewPage() {
  const [showVoltageCurrent, setShowVoltageCurrent] = useState(false);
  const [showOhmsLaw, setShowOhmsLaw] = useState(false);
  const [showComponents, setShowComponents] = useState(false);

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
  const t = circuitTranslations[courseLanguage];
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
        <h2>{t.voltageTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.voltageText}</p>

        <pre style={codeStyle}>{t.voltageCode}</pre>

        <button
          onClick={() => setShowVoltageCurrent(!showVoltageCurrent)}
          style={linkButtonStyle}
        >
          {showVoltageCurrent ? t.hideExplanation : t.explainVoltage}
        </button>

        {showVoltageCurrent && (
          <div style={answerStyle}>
            <h4>{t.voltageSubTitle}</h4>
            <p>{t.voltageAnswer}</p>

            <h4>{t.currentSubTitle}</h4>
            <p>{t.currentAnswer}</p>

            <h4>{t.analogyTitle}</h4>
            <p>{t.analogyText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.voltageConcepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>{t.ohmsTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.ohmsText}</p>

        <pre style={codeStyle}>{t.ohmsCode}</pre>

        <h3>{t.practiceTitle}</h3>
        <p style={textStyle}>{t.practiceText}</p>

        <div style={circuitStyle}>
          <pre>{t.practiceCode}</pre>
        </div>

        <button onClick={() => setShowOhmsLaw(!showOhmsLaw)} style={linkButtonStyle}>
          {showOhmsLaw ? t.hideExplanation : t.explainOhms}
        </button>

        {showOhmsLaw && (
          <div style={answerStyle}>
            <h4>{t.voltageIncreaseTitle}</h4>
            <p>{t.voltageIncreaseText}</p>

            <h4>{t.resistanceIncreaseTitle}</h4>
            <p>{t.resistanceIncreaseText}</p>

            <h4>{t.whyCareTitle}</h4>
            <p>{t.whyCareText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.ohmsConcepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>{t.exampleTitle}</h3>
        <p style={textStyle}>{t.exampleText}</p>

        <pre style={codeStyle}>{t.exampleCode}</pre>
      </div>

      <div style={sectionStyle}>
        <h2>{t.componentsTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.componentsText}</p>

        <pre style={codeStyle}>{t.componentsCode}</pre>

        <button
          onClick={() => setShowComponents(!showComponents)}
          style={linkButtonStyle}
        >
          {showComponents ? t.hideExplanation : t.explainComponents}
        </button>

        {showComponents && (
          <div style={answerStyle}>
            <h4>{t.batteryTitle}</h4>
            <p>{t.batteryText}</p>

            <h4>{t.resistorTitle}</h4>
            <p>{t.resistorText}</p>

            <h4>{t.capacitorTitle}</h4>
            <p>{t.capacitorText}</p>

            <h4>{t.switchTitle}</h4>
            <p>{t.switchText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.componentsConcepts.map((item) => (
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

      <a href="/experience/electrical">
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

const circuitStyle: CSSProperties = {
  backgroundColor: "#ecfdf5",
  border: "1px solid #bbf7d0",
  borderRadius: "16px",
  padding: "25px",
  marginTop: "20px",
  fontSize: "18px",
  overflowX: "auto",
  direction: "ltr",
  textAlign: "left",
};
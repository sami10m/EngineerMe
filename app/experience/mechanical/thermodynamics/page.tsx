"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { thermodynamicsTranslations } from "./thermodynamicsTranslations";

export default function ThermodynamicsPreviewPage() {
  const [showHeatEnergy, setShowHeatEnergy] = useState(false);
  const [showTemperature, setShowTemperature] = useState(false);
  const [showEngines, setShowEngines] = useState(false);
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
  const t = thermodynamicsTranslations[courseLanguage];
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
        <h2>{t.heatTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.heatText}</p>

        <pre style={codeStyle}>{t.heatCode}</pre>

        <button
          onClick={() => setShowHeatEnergy(!showHeatEnergy)}
          style={linkButtonStyle}
        >
          {showHeatEnergy ? t.hideExplanation : t.explainHeat}
        </button>

        {showHeatEnergy && (
          <div style={answerStyle}>
            <h4>{t.heatSubTitle}</h4>
            <p>{t.heatAnswer}</p>

            <h4>{t.energyTitle}</h4>
            <p>{t.energyText}</p>

            <h4>{t.engineeringTitle}</h4>
            <p>{t.engineeringText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.heatConcepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>{t.temperatureTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.temperatureText}</p>

        <pre style={codeStyle}>{t.temperatureCode}</pre>

        <button
          onClick={() => setShowTemperature(!showTemperature)}
          style={linkButtonStyle}
        >
          {showTemperature ? t.hideExplanation : t.explainTemperature}
        </button>

        {showTemperature && (
          <div style={answerStyle}>
            <h4>{t.temperatureSubTitle}</h4>
            <p>{t.temperatureAnswer}</p>

            <h4>{t.heatSubTitle}</h4>
            <p>{t.heatStoredText}</p>

            <h4>{t.simpleExampleTitle}</h4>
            <p>{t.simpleExampleText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.temperatureConcepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>{t.enginesTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.enginesText}</p>

        <pre style={codeStyle}>{t.enginesCode}</pre>

        <button onClick={() => setShowEngines(!showEngines)} style={linkButtonStyle}>
          {showEngines ? t.hideExplanation : t.explainEngines}
        </button>

        {showEngines && (
          <div style={answerStyle}>
            <h4>{t.workTitle}</h4>
            <p>{t.workText}</p>

            <h4>{t.enginesSubTitle}</h4>
            <p>{t.enginesAnswer}</p>

            <h4>{t.efficiencyTitle}</h4>
            <p>{t.efficiencyText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.enginesConcepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>{t.carExampleTitle}</h2>
        <p style={textStyle}>{t.carExampleText}</p>

        <pre style={codeStyle}>{t.carExampleCode}</pre>

        <button onClick={() => setShowExample(!showExample)} style={linkButtonStyle}>
          {showExample ? t.hideExplanation : t.explainExample}
        </button>

        {showExample && (
          <div style={answerStyle}>
            <p>{t.carExampleAnswer}</p>
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
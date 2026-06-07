"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { chipTranslations } from "./chipTranslations";

export default function ChipsPreviewPage() {
  const [showLogic, setShowLogic] = useState(false);
  const [showFlow, setShowFlow] = useState(false);
  const [showPhysical, setShowPhysical] = useState(false);
  const [showTiming, setShowTiming] = useState(false);

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
  const t = chipTranslations[courseLanguage];
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
        <h2>{t.logicTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.logicText}</p>

        <pre style={codeStyle}>{t.logicCode}</pre>

        <button onClick={() => setShowLogic(!showLogic)} style={linkButtonStyle}>
          {showLogic ? t.hideExplanation : t.explainLogic}
        </button>

        {showLogic && (
          <div style={answerStyle}>
            <h4>{t.zeroOneTitle}</h4>
            <p>{t.zeroOneText}</p>

            <h4>{t.gatesTitle}</h4>
            <p>{t.gatesText}</p>

            <h4>{t.circuitTitle}</h4>
            <p>{t.circuitText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.logicConcepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>{t.flowTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.flowText}</p>

        <pre style={codeStyle}>{t.flowCode}</pre>

        <button onClick={() => setShowFlow(!showFlow)} style={linkButtonStyle}>
          {showFlow ? t.hideExplanation : t.explainFlow}
        </button>

        {showFlow && (
          <div style={answerStyle}>
            <h4>{t.rtlTitle}</h4>
            <p>{t.rtlText}</p>

            <h4>{t.synthesisTitle}</h4>
            <p>{t.synthesisText}</p>

            <h4>{t.layoutTitle}</h4>
            <p>{t.layoutText}</p>
          </div>
        )}
      </div>

      <div style={sectionStyle}>
        <h2>{t.physicalTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.physicalText}</p>

        <pre style={codeStyle}>{t.physicalCode}</pre>

        <button
          onClick={() => setShowPhysical(!showPhysical)}
          style={linkButtonStyle}
        >
          {showPhysical ? t.hideExplanation : t.explainPhysical}
        </button>

        {showPhysical && (
          <div style={answerStyle}>
            <h4>{t.placementTitle}</h4>
            <p>{t.placementText}</p>

            <h4>{t.routingTitle}</h4>
            <p>{t.routingText}</p>

            <h4>{t.timingClosureTitle}</h4>
            <p>{t.timingClosureText}</p>
          </div>
        )}

        <h3>{t.keyConcepts}</h3>
        <ul style={listStyle}>
          {t.physicalConcepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>{t.timingTitle}</h2>
        <h3>{t.lecture}</h3>
        <p style={textStyle}>{t.timingText}</p>

        <pre style={codeStyle}>{t.timingCode}</pre>

        <button onClick={() => setShowTiming(!showTiming)} style={linkButtonStyle}>
          {showTiming ? t.hideExplanation : t.explainTiming}
        </button>

        {showTiming && (
          <div style={answerStyle}>
            <h4>{t.setupTitle}</h4>
            <p>{t.setupText}</p>

            <h4>{t.holdTitle}</h4>
            <p>{t.holdText}</p>

            <h4>{t.frequencyTitle}</h4>
            <p>{t.frequencyText}</p>
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
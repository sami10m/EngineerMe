"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { signalTranslations } from "./signalTranslations";

export default function SignalsSystemsPreviewPage() {
  const [showSignal, setShowSignal] = useState(false);
  const [showAnalogDigital, setShowAnalogDigital] = useState(false);
  const [showWaves, setShowWaves] = useState(false);
  const [showPhoneExample, setShowPhoneExample] = useState(false);

  const [language, setLanguage] =
    useState<"EN" | "AR" | "HE">("EN");

  useEffect(() => {
    const updateLanguage = () => {
      const savedLanguage =
        localStorage.getItem("language") as
          | "EN"
          | "AR"
          | "HE"
          | null;

      if (savedLanguage) setLanguage(savedLanguage);
    };

    updateLanguage();
    window.addEventListener("languageChange", updateLanguage);

    return () =>
      window.removeEventListener(
        "languageChange",
        updateLanguage
      );
  }, []);

  const courseLanguage =
    language === "HE" ? "HE" : "EN";

  const t =
    signalTranslations[courseLanguage];

  const isRTL =
    courseLanguage === "HE";

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

      <h1 style={{ fontSize: "46px", color: "#0f172a" }}>
        {t.title}
      </h1>

      <p style={textStyle}>{t.intro}</p>


      <div style={{
        display:"flex",
        gap:"15px",
        flexWrap:"wrap",
        marginTop:"25px"
      }}>
        <div style={infoCardStyle}>
          {t.timeLabel}<br/>
          <strong>{t.time}</strong>
        </div>

        <div style={infoCardStyle}>
          {t.levelLabel}<br/>
          <strong>{t.level}</strong>
        </div>

        <div style={infoCardStyle}>
          {t.fieldLabel}<br/>
          <strong>{t.field}</strong>
        </div>
      </div>


      <div style={sectionStyle}>
        <h2>{t.whatTitle}</h2>

        <p style={textStyle}>
          {t.whatText}
        </p>

        <h3>{t.whyTitle}</h3>

        <ul style={listStyle}>
          {t.whyItems.map((item)=>(
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>


      <div style={sectionStyle}>
        <h2>{t.signalTitle}</h2>

        <h3>{t.lecture}</h3>

        <p style={textStyle}>
          {t.signalText}
        </p>

        <pre style={codeStyle}>
          {t.signalCode}
        </pre>


        <button
          onClick={() =>
            setShowSignal(!showSignal)
          }
          style={linkButtonStyle}
        >
          {showSignal
            ? t.hideExplanation
            : t.explainSignal}
        </button>


        {showSignal && (
          <div style={answerStyle}>

            <h4>{t.simpleTitle}</h4>
            <p>{t.simpleText}</p>

            <h4>{t.engineeringTitle}</h4>
            <p>{t.engineeringText}</p>

          </div>
        )}

        <h3>{t.keyConcepts}</h3>

        <ul style={listStyle}>
          {t.signalConcepts.map((item)=>(
            <li key={item}>{item}</li>
          ))}
        </ul>

      </div>


      <div style={sectionStyle}>

        <h2>{t.digitalTitle}</h2>

        <h3>{t.lecture}</h3>

        <p style={textStyle}>
          {t.digitalText}
        </p>

        <pre style={codeStyle}>
          {t.digitalCode}
        </pre>


        <button
          onClick={() =>
            setShowAnalogDigital(!showAnalogDigital)
          }
          style={linkButtonStyle}
        >
          {showAnalogDigital
            ? t.hideExplanation
            : t.explainDigital}
        </button>


        {showAnalogDigital && (
          <div style={answerStyle}>

            <h4>{t.analogTitle}</h4>
            <p>{t.analogText}</p>

            <h4>{t.digitalSubTitle}</h4>
            <p>{t.digitalSubText}</p>

            <h4>{t.whyMatterTitle}</h4>
            <p>{t.whyMatterText}</p>

          </div>
        )}

      </div>


      <div style={sectionStyle}>

        <h2>{t.wavesTitle}</h2>

        <h3>{t.lecture}</h3>

        <p style={textStyle}>
          {t.wavesText}
        </p>

        <pre style={codeStyle}>
          {t.wavesCode}
        </pre>


        <button
          onClick={() =>
            setShowWaves(!showWaves)
          }
          style={linkButtonStyle}
        >
          {showWaves
            ? t.hideExplanation
            : t.explainWaves}
        </button>


        {showWaves && (
          <div style={answerStyle}>

            <h4>{t.amplitudeTitle}</h4>
            <p>{t.amplitudeText}</p>

            <h4>{t.frequencyTitle}</h4>
            <p>{t.frequencyText}</p>

            <h4>{t.noiseTitle}</h4>
            <p>{t.noiseText}</p>

          </div>
        )}

      </div>


      <div style={sectionStyle}>

        <h2>{t.phoneTitle}</h2>

        <p style={textStyle}>
          {t.phoneText}
        </p>

        <pre style={codeStyle}>
          {t.phoneCode}
        </pre>

        <button
          onClick={() =>
            setShowPhoneExample(!showPhoneExample)
          }
          style={linkButtonStyle}
        >
          {showPhoneExample
            ? t.hideExplanation
            : t.explainPhone}
        </button>


        {showPhoneExample && (
          <div style={answerStyle}>

            <h4>{t.phoneWhyTitle}</h4>
            <p>{t.phoneWhyText}</p>

            <h4>{t.thinkingTitle}</h4>
            <p>{t.thinkingText}</p>

          </div>
        )}

      </div>


      <div style={sectionStyle}>
        <h2>{t.realTitle}</h2>
        <p style={textStyle}>{t.realText}</p>
      </div>


      <div style={sectionStyle}>
        <h2>{t.interviewTitle}</h2>

        <p style={textStyle}>
          {t.interviewQuestion}
        </p>

        <div style={answerStyle}>
          {t.interviewAnswer}
        </div>
      </div>


      <a href="/experience/electrical">
        <button style={buttonStyle}>
          {t.back}
        </button>
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
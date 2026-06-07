"use client";

import { useEffect, useState } from "react";
import { translations } from "../../translations";

export default function RiddlePage() {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [showSolution, setShowSolution] = useState(false);
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

  const t = translations[language].riddle;
  const isRTL = language === "AR" || language === "HE";

  const checkAnswer = () => {
    if (answer.trim() === "7") {
      setMessage(t.correct);
      setShowSolution(true);
    } else {
      setMessage(t.wrong);
      setShowSolution(false);
    }
  };

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "70px 20px",
        direction: isRTL ? "rtl" : "ltr",
        textAlign: isRTL ? "right" : "left",
      }}
    >
      <h1 style={{ fontSize: "44px", color: "#0f172a" }}>
        🧠 {t.title}
      </h1>

      <p style={textStyle}>{t.subtitle}</p>

      <div style={cardStyle}>
        <h2>🐎 {t.difficulty}</h2>

        <p style={textStyle}>{t.question}</p>

        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={t.placeholder}
          style={inputStyle}
        />

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          <button onClick={checkAnswer} style={buttonStyle}>
            {t.check}
          </button>

          <button
            style={secondaryButton}
            onClick={() => {
              setMessage(t.solutionTitle);
              setShowSolution(true);
            }}
          >
            {t.giveUp}
          </button>
        </div>

        {message && <h3 style={{ color: "#1e3a8a" }}>{message}</h3>}

        {showSolution && (
          <div style={solutionStyle}>
            <h2>{t.solutionTitle}</h2>

            <p>{t.solution}</p>

            <pre style={codeStyle}>{`A1 > B1 > C1 > D1 > E1`}</pre>

            <pre style={codeStyle}>{`A2, A3, B1, B2, C1`}</pre>
          </div>
        )}
      </div>

      <a href="/experience">
        <button style={backButtonStyle}>← {t.back}</button>
      </a>
    </main>
  );
}

const cardStyle = {
  marginTop: "30px",
  backgroundColor: "white",
  padding: "35px",
  borderRadius: "22px",
  border: "1px solid #e5e7eb",
  boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
} as const;

const textStyle = {
  color: "#475569",
  lineHeight: "1.8",
  fontSize: "18px",
} as const;

const inputStyle = {
  marginTop: "20px",
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  fontSize: "16px",
} as const;

const buttonStyle = {
  padding: "12px 20px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#1e3a8a",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
} as const;

const secondaryButton = {
  padding: "12px 20px",
  borderRadius: "10px",
  border: "1px solid #1e3a8a",
  backgroundColor: "white",
  color: "#1e3a8a",
  cursor: "pointer",
  fontWeight: "bold",
} as const;

const solutionStyle = {
  marginTop: "30px",
  backgroundColor: "#eff6ff",
  padding: "25px",
  borderRadius: "18px",
  lineHeight: "1.8",
} as const;

const codeStyle = {
  backgroundColor: "#0f172a",
  color: "white",
  padding: "15px",
  borderRadius: "12px",
} as const;

const backButtonStyle = {
  marginTop: "30px",
  padding: "12px 20px",
  borderRadius: "10px",
  border: "1px solid #1e3a8a",
  backgroundColor: "white",
  color: "#1e3a8a",
  cursor: "pointer",
  fontWeight: "bold",
} as const;
"use client";

import { useEffect, useState } from "react";
import { translations } from "../../translations";

type Field = "software" | "computer" | "electrical" | "mechanical";

export default function EngineeringMatchPage() {
  const [language, setLanguage] = useState<"EN" | "AR" | "HE">("EN");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<Field, number>>({
    software: 0,
    computer: 0,
    electrical: 0,
    mechanical: 0,
  });

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


  
  const t = translations[language].match;
  const isRTL = language === "AR" || language === "HE";
  const questions = t.questions;
  const finished = currentQuestion >= questions.length;

  const handleAnswer = (field: Field) => {
  const updatedScores = {
    ...scores,
    [field]: scores[field] + 1,
  };

  const nextQuestion = currentQuestion + 1;

  setScores(updatedScores);
  setCurrentQuestion(nextQuestion);

  
};
  const results = [
  {
    field: "software" as Field,
    icon: "💻",
    name: t.fields.software,
    score: scores.software,
    link: "/experience/software",
  },
  {
    field: "computer" as Field,
    icon: "🖥️",
    name: t.fields.computer,
    score: scores.computer,
    link: "/experience/computer",
  },
  {
    field: "electrical" as Field,
    icon: "⚡",
    name: t.fields.electrical,
    score: scores.electrical,
    link: "/experience/electrical",
  },
  {
    field: "mechanical" as Field,
    icon: "⚙️",
    name: t.fields.mechanical,
    score: scores.mechanical,
    link: "/experience/mechanical",
  },
].sort((a, b) => b.score - a.score);
  const bestMatches = results.filter(
  (field) => field.score === results[0].score
);

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
      <h1 style={{ fontSize: "46px", color: "#0f172a" }}>{t.title}</h1>

      {!finished ? (
        <div style={cardStyle}>
          <p style={{ color: "#1e3a8a", fontWeight: "bold" }}>
            {t.question} {currentQuestion + 1} {t.of} {questions.length}
          </p>

          <h2>{questions[currentQuestion].question}</h2>

          {questions[currentQuestion].options.map((option) => (
            <button
              key={option.text}
              onClick={() => handleAnswer(option.field as Field)}
              style={{
                ...buttonStyle,
                textAlign: isRTL ? "right" : "left",
              }}
            >
              {option.text}
            </button>
          ))}
        </div>
      ) : (
        <div style={cardStyle}>
          <h2>{t.resultTitle}</h2>

          <div
            style={{
              backgroundColor: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "16px",
              padding: "25px",
              marginTop: "20px",
            }}
          >
            <h2 style={{ marginTop: 0 }}>
  🏆 {t.bestMatch}
</h2>

{bestMatches.map((field) => (
  <a
    key={field.name}
    href={field.link}
    style={{
      textDecoration: "none",
      color: "inherit",
    }}
  >
    <div style={resultStyle}>
      <div>
        <span style={{ fontSize: "28px", marginInlineEnd: "10px" }}>
          {field.icon}
        </span>

        <strong>
          {field.name}
        </strong>
      </div>

      <strong style={{ color: "#1e3a8a" }}>
        Explore →
      </strong>
    </div>
  </a>
))}

            <p style={{ color: "#475569", lineHeight: "1.7" }}>
              {t.resultText}
            </p>
          <div
  style={{
    marginTop: "20px",
    backgroundColor: "white",
    borderRadius: "14px",
    padding: "20px",
    border: "1px solid #dbeafe",
  }}
>
  <h3 style={{ marginTop: 0, color: "#1e3a8a" }}>
    {t.whyTitle}
  </h3>

  <ul style={{ lineHeight: "1.9", color: "#475569" }}>
    {t.why[bestMatches[0].field].map((item) => (
  <li key={item}>{item}</li>
))}
  </ul>
</div>
           {bestMatches.length === 1 && (
  <a href={results[0].link}>
    <button style={backButtonStyle}>
      {t.exploreBest}
    </button>
  </a>
)}
          </div>

          {results.map((field) => (
            <a
              key={field.name}
              href={field.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div style={resultStyle}>
                <div>
                  <span style={{ fontSize: "28px", marginInlineEnd: "10px" }}>
                    {field.icon}
                  </span>
                  <strong>{field.name}</strong>
                </div>

                <strong style={{ color: "#1e3a8a" }}>
                 {Math.round((field.score / results[0].score) * 100)}%
                </strong>
              </div>
            </a>
          ))}

          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScores({
                software: 0,
                computer: 0,
                electrical: 0,
                mechanical: 0,
              });
            }}
            style={{
              ...buttonStyle,
              textAlign: isRTL ? "right" : "left",
            }}
          >
            {t.retake}
          </button>
        </div>
      )}

      <a href="/experience">
        <button style={backButtonStyle}>{t.back}</button>
      </a>
    </main>
  );
}

const cardStyle = {
  backgroundColor: "white",
  borderRadius: "18px",
  padding: "30px",
  boxShadow: "0 8px 25px rgba(15,23,42,0.08)",
  border: "1px solid #e5e7eb",
  marginTop: "30px",
} as const;

const buttonStyle = {
  display: "block",
  width: "100%",
  marginTop: "12px",
  padding: "15px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  backgroundColor: "#f8fafc",
  cursor: "pointer",
  fontSize: "16px",
} as const;

const resultStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px",
  borderRadius: "14px",
  border: "1px solid #e5e7eb",
  marginTop: "14px",
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
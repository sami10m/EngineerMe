"use client";

import { useEffect, useState } from "react";
import { translations } from "../translations";

export default function AssessmentPage() {
  const [language, setLanguage] = useState<"EN" | "AR" | "HE">("EN");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateLanguage = () => {
      const savedLanguage = localStorage.getItem("language") as
        | "EN"
        | "AR"
        | "HE"
        | null;

      if (savedLanguage) setLanguage(savedLanguage);
    };

    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    updateLanguage();
    checkMobile();

    window.addEventListener("languageChange", updateLanguage);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("languageChange", updateLanguage);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const t = translations[language].assessment;
  const isRTL = language === "AR" || language === "HE";

  const progress = ((currentQuestion + 1) / t.questions.length) * 100;

  const options = t.options.map((text, index) => ({
    text,
    value: 5 - index,
  }));

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion < t.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const total = newAnswers.reduce((a, b) => a + b, 0);
      const percentage = Math.round((total / (t.questions.length * 5)) * 100);

      localStorage.setItem("engineeringScore", percentage.toString());
      localStorage.setItem("engineeringAnswers", JSON.stringify(newAnswers));

      window.location.href = "/results";
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: isMobile ? "42px 18px 60px" : "70px 20px",
        background:
          "linear-gradient(135deg, #ffffff 0%, #eff6ff 55%, #dbeafe 100%)",
        direction: isRTL ? "rtl" : "ltr",
        textAlign: isRTL ? "right" : "left",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        <div style={badgeStyle}>🧠 Engineering Readiness</div>

        <div
          style={{
            ...cardStyle,
            padding: isMobile ? "24px" : "38px",
          }}
        >
          <h1
            style={{
              marginTop: 0,
              marginBottom: "12px",
              fontSize: isMobile ? "34px" : "44px",
              lineHeight: "1.15",
              color: "#0f172a",
            }}
          >
            {t.title}
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: "1.7",
              marginBottom: "28px",
            }}
          >
            {t.question} {currentQuestion + 1} {t.of} {t.questions.length}
          </p>

          <div style={progressOuterStyle}>
            <div
              style={{
                ...progressInnerStyle,
                width: `${progress}%`,
              }}
            />
          </div>

          <p
            style={{
              marginTop: "10px",
              color: "#1e3a8a",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            {Math.round(progress)}%
          </p>

          <div
            style={{
              ...questionBoxStyle,
              padding: isMobile ? "22px" : "30px",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: isMobile ? "22px" : "28px",
                lineHeight: "1.5",
                color: "#0f172a",
              }}
            >
              {t.questions[currentQuestion]}
            </h2>
          </div>

          <div style={{ marginTop: "24px" }}>
            {options.map((option) => {
              const isSelected = answers[currentQuestion] === option.value;

              return (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  style={{
                    ...optionButtonStyle,
                    border: isSelected
                      ? "2px solid #1e3a8a"
                      : "1px solid #d1d5db",
                    backgroundColor: isSelected ? "#eff6ff" : "white",
                    textAlign: isRTL ? "right" : "left",
                    fontSize: isMobile ? "15px" : "16px",
                  }}
                >
                  {option.text}
                </button>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: currentQuestion > 0 ? "space-between" : "flex-end",
              alignItems: "center",
              marginTop: "25px",
              gap: "12px",
              flexDirection: isMobile ? "column-reverse" : "row",
            }}
          >
            {currentQuestion > 0 && (
              <button
                onClick={goBack}
                style={{
                  ...backButtonStyle,
                  width: isMobile ? "100%" : "auto",
                }}
              >
                ← Back
              </button>
            )}

            <p
              style={{
                color: "#64748b",
                margin: 0,
                fontSize: "14px",
              }}
            >
              Your result will appear after the last question.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

const badgeStyle = {
  display: "inline-block",
  backgroundColor: "#dbeafe",
  color: "#1e3a8a",
  padding: "9px 16px",
  borderRadius: "999px",
  fontWeight: "bold",
  marginBottom: "18px",
  border: "1px solid #bfdbfe",
} as const;

const cardStyle = {
  backgroundColor: "rgba(255,255,255,0.92)",
  borderRadius: "26px",
  boxShadow: "0 18px 45px rgba(15,23,42,0.12)",
  border: "1px solid #dbeafe",
} as const;

const progressOuterStyle = {
  width: "100%",
  height: "12px",
  backgroundColor: "#e5e7eb",
  borderRadius: "999px",
  overflow: "hidden",
} as const;

const progressInnerStyle = {
  height: "100%",
  background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
  borderRadius: "999px",
  transition: "width 0.25s ease",
} as const;

const questionBoxStyle = {
  marginTop: "28px",
  backgroundColor: "#f8fafc",
  border: "1px solid #e5e7eb",
  borderRadius: "20px",
} as const;

const optionButtonStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "12px",
  borderRadius: "14px",
  color: "#0f172a",
  cursor: "pointer",
  fontWeight: "bold",
  lineHeight: "1.5",
} as const;

const backButtonStyle = {
  padding: "12px 20px",
  borderRadius: "12px",
  border: "1px solid #1e3a8a",
  backgroundColor: "white",
  color: "#1e3a8a",
  cursor: "pointer",
  fontWeight: "bold",
} as const;
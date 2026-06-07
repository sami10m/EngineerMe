"use client";

import { useEffect, useState } from "react";
import { translations } from "../translations";

export default function ResultsPage() {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [language, setLanguage] = useState<"EN" | "AR" | "HE">("EN");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const savedScore = localStorage.getItem("engineeringScore");
    const savedAnswers = localStorage.getItem("engineeringAnswers");

    if (savedScore) {
      setScore(Number(savedScore));
    }

    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }

    const updateLanguage = () => {
      const savedLanguage = localStorage.getItem("language") as
        | "EN"
        | "AR"
        | "HE"
        | null;

      if (savedLanguage) setLanguage(savedLanguage);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateLanguage();
    checkMobile();

    window.addEventListener("languageChange", updateLanguage);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("languageChange", updateLanguage);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const t = translations[language].results;
  const isRTL = language === "AR" || language === "HE";

  const calculateCategory = (start: number, end: number) => {
    if (answers.length === 0) return 0;

    const selected = answers.slice(start, end);
    const total = selected.reduce((a, b) => a + b, 0);

    return Math.round((total / (selected.length * 5)) * 100);
  };

  const technicalScore = calculateCategory(0, 4);
  const logicalScore = calculateCategory(4, 8);
  const persistenceScore = calculateCategory(8, 12);
  const learningScore = calculateCategory(12, 16);

  const recommendedFields = [
    {
      icon: "🖥️",
      name: "Software Engineering",
      match: Math.min(100, logicalScore + 6),
      link: "/experience/software",
    },
    {
      icon: "💻",
      name: "Computer Engineering",
      match: Math.min(100, technicalScore + 4),
      link: "/experience/computer",
    },
    {
      icon: "⚡",
      name: "Electrical Engineering",
      match: Math.max(0, technicalScore - 2),
      link: "/experience/electrical",
    },
    {
      icon: "⚙️",
      name: "Mechanical Engineering",
      match: Math.max(0, persistenceScore - 1),
      link: "/experience/mechanical",
    },
  ].sort((a, b) => b.match - a.match);

  let message = "";
  let advice = "";

  if (score >= 86) {
    message = t.messages.high;
    advice = t.advice.high;
  } else if (score >= 71) {
    message = t.messages.good;
    advice = t.advice.good;
  } else if (score >= 41) {
    message = t.messages.medium;
    advice = t.advice.medium;
  } else {
    message = t.messages.low;
    advice = t.advice.low;
  }

  const skills = [
    {
      name: t.skillItems.logical.name,
      value: logicalScore,
      description: t.skillItems.logical.description,
      example: t.skillItems.logical.example,
    },
    {
      name: t.skillItems.persistence.name,
      value: persistenceScore,
      description: t.skillItems.persistence.description,
      example: t.skillItems.persistence.example,
    },
    {
      name: t.skillItems.technical.name,
      value: technicalScore,
      description: t.skillItems.technical.description,
      example: t.skillItems.technical.example,
    },
    {
      name: t.skillItems.learning.name,
      value: learningScore,
      description: t.skillItems.learning.description,
      example: t.skillItems.learning.example,
    },
  ];

  return (
    <main
      style={{
        padding: isMobile ? "40px 16px 60px" : "60px 20px",
        fontFamily: "Arial",
        maxWidth: "950px",
        margin: "0 auto",
        direction: isRTL ? "rtl" : "ltr",
        textAlign: isRTL ? "right" : "left",
      }}
    >
      <h1
        style={{
          fontSize: isMobile ? "34px" : "42px",
          marginBottom: "10px",
          color: "#0f172a",
          lineHeight: "1.15",
        }}
      >
        {t.title}
      </h1>

      <p
        style={{
          color: "#555",
          fontSize: isMobile ? "16px" : "18px",
          lineHeight: "1.7",
        }}
      >
        {t.subtitle}
      </p>

      <div
        style={{
          ...cardStyle,
          padding: isMobile ? "24px" : "35px",
          marginTop: "30px",
        }}
      >
        <h2>{t.overall}</h2>

        <div
          style={{
            fontSize: isMobile ? "52px" : "64px",
            fontWeight: "bold",
            color: "#1e3a8a",
            margin: "20px 0",
          }}
        >
          {score}%
        </div>

        <p style={{ fontSize: isMobile ? "16px" : "18px", lineHeight: "1.7" }}>
          {message}
        </p>
      </div>

      <div
        style={{
          ...cardStyle,
          padding: isMobile ? "24px" : "35px",
          marginTop: "25px",
        }}
      >
        <h2>{t.skills}</h2>

        {skills.map((skill) => (
          <div key={skill.name} style={{ marginTop: "22px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                marginBottom: "8px",
                fontWeight: "500",
              }}
            >
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>

            <div style={barOuterStyle}>
              <div
                style={{
                  ...barInnerStyle,
                  width: `${skill.value}%`,
                }}
              />
            </div>

            <p
              style={{
                color: "#555",
                marginTop: "12px",
                lineHeight: "1.6",
              }}
            >
              {skill.description}
            </p>

            <p
              style={{
                color: "#1e3a8a",
                fontStyle: "italic",
                lineHeight: "1.6",
              }}
            >
              {skill.example}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "22px",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            ...cardStyle,
            padding: isMobile ? "22px" : "30px",
            borderTop: "5px solid #16a34a",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>{t.strengths}</h2>

          {t.strengthsList.map((item) => (
            <div key={item} style={listItemStyle}>
              <span style={successIconStyle}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            ...cardStyle,
            padding: isMobile ? "22px" : "30px",
            borderTop: "5px solid #f59e0b",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>{t.improve}</h2>

          {t.improvementsList.map((item) => (
            <div key={item} style={listItemStyle}>
              <span style={warningIconStyle}>!</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          ...cardStyle,
          padding: isMobile ? "22px" : "30px",
          marginTop: "25px",
        }}
      >
        <h2>Recommended Engineering Paths</h2>

        <p style={{ color: "#555", lineHeight: "1.7" }}>
          Based on your readiness indicators, these engineering fields may be
          worth exploring first.
        </p>

        {recommendedFields.map((field) => (
          <a
            key={field.name}
            href={field.link}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "center",
                gap: "12px",
                padding: "18px",
                borderRadius: "14px",
                border: "1px solid #e5e7eb",
                marginTop: "14px",
                cursor: "pointer",
                backgroundColor: "#f8fafc",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <span style={{ fontSize: "28px" }}>{field.icon}</span>
                <strong>{field.name}</strong>
              </div>

              <strong style={{ color: "#1e3a8a" }}>
                {field.match}% Match
              </strong>
            </div>
          </a>
        ))}
      </div>

      <div
        style={{
          ...cardStyle,
          padding: isMobile ? "22px" : "30px",
          marginTop: "25px",
        }}
      >
        <h2>{t.recommendation}</h2>

        <p
          style={{
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: "1.7",
          }}
        >
          {advice}
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#1e3a8a",
          color: "white",
          borderRadius: "16px",
          padding: isMobile ? "26px 20px" : "35px",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <h2>{t.experienceTitle}</h2>

        <p
          style={{
            fontSize: isMobile ? "16px" : "18px",
            opacity: 0.9,
            lineHeight: "1.7",
          }}
        >
          {t.experienceText}
        </p>

        <a href="/experience" style={{ width: isMobile ? "100%" : "auto" }}>
          <button
            style={{
              marginTop: "20px",
              padding: "15px 25px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              backgroundColor: "white",
              color: "#1e3a8a",
              width: isMobile ? "100%" : "auto",
            }}
          >
            {t.experienceButton}
          </button>
        </a>
      </div>
    </main>
  );
}

const cardStyle = {
  backgroundColor: "white",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
} as const;

const barOuterStyle = {
  width: "100%",
  height: "10px",
  backgroundColor: "#e5e7eb",
  borderRadius: "999px",
  overflow: "hidden",
} as const;

const barInnerStyle = {
  height: "100%",
  backgroundColor: "#1e3a8a",
} as const;

const listItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "14px",
  fontSize: "17px",
} as const;

const successIconStyle = {
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  backgroundColor: "#dcfce7",
  color: "#16a34a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  flexShrink: 0,
} as const;

const warningIconStyle = {
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  backgroundColor: "#fef3c7",
  color: "#d97706",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  flexShrink: 0,
} as const;
"use client";

import { useEffect, useState } from "react";
import { translations } from "../translations";

export default function ExperiencePage() {
  const [language, setLanguage] = useState<"EN" | "AR" | "HE">("EN");
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

  const t = translations[language].experience;
  const isRTL = language === "AR" || language === "HE";

  const links = [
    "/experience/software",
    "/experience/computer",
    "/experience/electrical",
    "/experience/mechanical",
  ];

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: isMobile ? "42px 18px 60px" : "70px 20px",
        direction: isRTL ? "rtl" : "ltr",
        textAlign: isRTL ? "right" : "left",
      }}
    >
      <h1
        style={{
          fontSize: isMobile ? "40px" : "50px",
          color: "#0f172a",
          marginBottom: "15px",
          lineHeight: "1.15",
        }}
      >
        {t.title}
      </h1>

      <p
        style={{
          fontSize: isMobile ? "18px" : "21px",
          color: "#475569",
          lineHeight: "1.8",
          maxWidth: "800px",
        }}
      >
        {t.subtitle}
      </p>

      <div
        style={{
          ...advisorStyle,
          padding: isMobile ? "22px" : "30px",
          marginTop: isMobile ? "32px" : "45px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>🚀 {t.advisorTitle}</h2>

        <p
          style={{
            color: "#475569",
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: "1.7",
          }}
        >
          {t.advisorText}
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "20px",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <a href="/experience/match" style={{ width: isMobile ? "100%" : "auto" }}>
            <button
              style={{
                ...primaryButtonStyle,
                width: isMobile ? "100%" : "auto",
              }}
            >
              🧭 {t.matchButton}
            </button>
          </a>

          <a href="/experience/compare" style={{ width: isMobile ? "100%" : "auto" }}>
            <button
              style={{
                ...secondaryButtonStyle,
                width: isMobile ? "100%" : "auto",
              }}
            >
              ⚖️ {t.compareButton}
            </button>
          </a>
        </div>
      </div>

      <div
        style={{
          ...howItWorksStyle,
          padding: isMobile ? "22px" : "30px",
          marginTop: isMobile ? "32px" : "45px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>{t.howTitle} 🚀</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
            marginTop: "25px",
          }}
        >
          {t.steps.map((step, index) => (
            <div key={step.title} style={stepCardStyle}>
              <h3>
                {index + 1}️⃣ {step.title}
              </h3>
              <p style={{ color: "#475569", lineHeight: "1.7" }}>{step.text}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            ...sectionStyle,
            padding: isMobile ? "22px" : "30px",
            marginTop: isMobile ? "30px" : "45px",
          }}
        >
          <h2>🧠 {t.riddleTitle}</h2>

          <p
            style={{
              color: "#475569",
              lineHeight: "1.7",
              fontSize: isMobile ? "16px" : "17px",
            }}
          >
            {t.riddleText}
          </p>

          <a href="/experience/riddle" style={{ width: isMobile ? "100%" : "auto" }}>
            <button
              style={{
                ...buttonStyle,
                width: isMobile ? "100%" : "auto",
              }}
            >
              {t.riddleButton}
            </button>
          </a>

          <p style={{ color: "#64748b", marginTop: "12px" }}>{t.riddleNote}</p>
        </div>
      </div>

      <h2
        style={{
          marginTop: isMobile ? "38px" : "50px",
          fontSize: isMobile ? "28px" : "32px",
        }}
      >
        {t.choose}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(260px, 1fr))",
          gap: isMobile ? "18px" : "25px",
          marginTop: "30px",
        }}
      >
        {t.fields.map((field, index) => (
          <div
            key={field.title}
            style={{
              ...fieldCardStyle,
              padding: isMobile ? "24px" : "30px",
            }}
          >
            <div style={{ fontSize: isMobile ? "40px" : "45px" }}>
              {field.icon}
            </div>

            <h2>{field.title}</h2>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.7",
              }}
            >
              {field.text}
            </p>

            <h3>{t.study}</h3>

            <ul style={{ paddingInlineStart: isRTL ? "0" : "22px" }}>
              {field.subjects.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <a href={links[index]} style={{ width: isMobile ? "100%" : "auto" }}>
              <button
                style={{
                  ...primaryButtonStyle,
                  width: isMobile ? "100%" : "auto",
                }}
              >
                {t.button}
              </button>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

const advisorStyle = {
  backgroundColor: "#eff6ff",
  border: "1px solid #bfdbfe",
  borderRadius: "22px",
};

const fieldCardStyle = {
  backgroundColor: "white",
  borderRadius: "22px",
  boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
  border: "1px solid #e5e7eb",
};

const primaryButtonStyle = {
  marginTop: "20px",
  padding: "12px 20px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#1e3a8a",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};

const secondaryButtonStyle = {
  marginTop: "20px",
  padding: "12px 20px",
  borderRadius: "10px",
  border: "1px solid #1e3a8a",
  backgroundColor: "white",
  color: "#1e3a8a",
  cursor: "pointer",
  fontWeight: "bold",
};

const howItWorksStyle = {
  backgroundColor: "white",
  border: "1px solid #e5e7eb",
  borderRadius: "22px",
  boxShadow: "0 8px 25px rgba(15,23,42,0.08)",
};

const stepCardStyle = {
  backgroundColor: "#f8fafc",
  borderRadius: "16px",
  padding: "22px",
  border: "1px solid #e5e7eb",
};

const sectionStyle = {
  backgroundColor: "white",
  borderRadius: "22px",
  boxShadow: "0 8px 25px rgba(15,23,42,0.08)",
  border: "1px solid #e5e7eb",
} as const;

const buttonStyle = {
  marginTop: "20px",
  padding: "12px 22px",
  borderRadius: "12px",
  border: "none",
  backgroundColor: "#1e3a8a",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
} as const;
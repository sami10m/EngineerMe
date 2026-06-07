"use client";

import { useEffect, useState } from "react";
import { translations } from "../../translations";

export default function CompareEngineeringFieldsPage() {
  const [language, setLanguage] =
    useState<"EN" | "AR" | "HE">("EN");

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
      window.removeEventListener(
        "languageChange",
        updateLanguage
      );
    };
  }, []);

  const t = translations[language].compare;
  const isRTL = language === "AR" || language === "HE";

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

      <p style={{ fontSize: "20px", color: "#475569", lineHeight: "1.8" }}>
       {t.subtitle}
      </p>

      {t.sections.map((section) => (
  <div key={section.title} style={sectionStyle}>

    <h2
      style={{
        color: "#1e3a8a",
        marginBottom: "25px",
      }}
    >
      {section.title}
    </h2>


    <div
      style={{
        display: "grid",
        gap: "15px",
      }}
    >

      {section.points.map((point, index) => (
        <div
          key={point}
          style={{
            backgroundColor:
              index < 2 ? "#f8fafc" : "#eff6ff",

            border:
              index < 2
                ? "1px solid #e5e7eb"
                : "1px solid #bfdbfe",

            padding: "18px",
            borderRadius: "14px",
            lineHeight: "1.7",
            color: "#334155",
          }}
        >

          {index < 2 ? "📘 " : "✅ "}
          {point}

        </div>
      ))}

    </div>

  </div>
))}



      <a href="/experience">
        <button style={buttonStyle}>
         {t.back}
        </button>
      </a>

    </main>
  );
}


// 👇 Styles always AFTER the component

const sectionStyle = {
  backgroundColor: "white",
  borderRadius: "18px",
  padding: "30px",
  boxShadow: "0 8px 25px rgba(15,23,42,0.08)",
  border: "1px solid #e5e7eb",
  marginTop: "30px",
};


const buttonStyle = {
  marginTop: "30px",
  padding: "12px 20px",
  borderRadius: "10px",
  border: "1px solid #1e3a8a",
  backgroundColor: "white",
  color: "#1e3a8a",
  cursor: "pointer",
  fontWeight: "bold",
};
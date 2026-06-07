"use client";

import { useEffect, useState } from "react";
import { translations } from "../translations";

export default function AboutPage() {
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

  const t = translations[language].about;
  const isRTL = language === "AR" || language === "HE";

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #ffffff 0%, #eff6ff 55%, #dbeafe 100%)",
        padding: isMobile ? "42px 18px 60px" : "70px 20px",
        direction: isRTL ? "rtl" : "ltr",
        textAlign: isRTL ? "right" : "left",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={badgeStyle}>🚀 EngineerMe</div>

        <h1
          style={{
            fontSize: isMobile ? "38px" : "52px",
            color: "#0f172a",
            lineHeight: "1.15",
            marginBottom: "18px",
          }}
        >
          {t.title}
        </h1>

        <p
          style={{
            ...textStyle,
            fontSize: isMobile ? "17px" : "20px",
            maxWidth: "780px",
          }}
        >
          {t.p1}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "22px",
            marginTop: "35px",
          }}
        >
          <div style={{ ...sectionStyle, padding: isMobile ? "22px" : "30px" }}>
            <h2>{t.goalTitle}</h2>
            <p style={textStyle}>{t.p2}</p>
          </div>

          <div style={{ ...sectionStyle, padding: isMobile ? "22px" : "30px" }}>
            <h2>🎯 Mission</h2>
            <p style={textStyle}>{t.p3}</p>
          </div>
        </div>

        <div
          style={{
            ...highlightStyle,
            padding: isMobile ? "26px 22px" : "36px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>{t.goalTitle}</h2>

          <p
            style={{
              ...textStyle,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            {t.goalText}
          </p>

          <h3
            style={{
              color: "white",
              fontSize: isMobile ? "24px" : "30px",
              lineHeight: "1.35",
              marginBottom: 0,
            }}
          >
            {t.question}
          </h3>
        </div>

        <div
          style={{
            ...sectionStyle,
            padding: isMobile ? "22px" : "30px",
            marginTop: "25px",
          }}
        >
          <h2>{t.helpTitle}</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: "16px",
    marginTop: "20px",
  }}
>
  {t.helpItems.map((item) => (
    <div key={item} style={miniCardStyle}>
      {item}
    </div>
  ))}
</div>
        </div>
      </div>
    </main>
  );
}

const badgeStyle = {
  display: "inline-block",
  padding: "9px 18px",
  borderRadius: "999px",
  backgroundColor: "#dbeafe",
  color: "#1e3a8a",
  fontWeight: "bold",
  marginBottom: "22px",
  border: "1px solid #bfdbfe",
} as const;

const sectionStyle = {
  backgroundColor: "white",
  borderRadius: "22px",
  boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
  border: "1px solid #e5e7eb",
} as const;

const highlightStyle = {
  marginTop: "28px",
  background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
  color: "white",
  borderRadius: "26px",
  boxShadow: "0 18px 40px rgba(30,58,138,0.22)",
} as const;

const textStyle = {
  lineHeight: "1.8",
  color: "#475569",
} as const;

const miniCardStyle = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e5e7eb",
  borderRadius: "16px",
  padding: "18px",
  fontWeight: "bold",
  color: "#1e3a8a",
} as const;
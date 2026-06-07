"use client";

import { useEffect, useState } from "react";

const exploreMoreTranslations = {
  EN: {
    title: "Continue Exploring 🚀",
    text:
      "Continue discovering engineering fields, compare paths, or find the field that matches you best.",
    match: "🧭 Find Your Match",
    compare: "⚖️ Compare Fields",
    otherFields: "Explore Other Fields",
    software: "💻 Software",
    computer: "🖥 Computer",
    electrical: "⚡ Electrical",
    mechanical: "⚙ Mechanical",
    back: "Back to Engineering Experience",
  },

  AR: {
    title: "تابع الاستكشاف 🚀",
    text:
      "تابع اكتشاف مجالات الهندسة، قارن بين المسارات، أو اكتشف المجال الأنسب لك.",
    match: "🧭 اكتشف المجال المناسب",
    compare: "⚖️ قارن بين المجالات",
    otherFields: "استكشف مجالات أخرى",
    software: "💻 البرمجيات",
    computer: "🖥 الحاسوب",
    electrical: "⚡ الكهرباء",
    mechanical: "⚙ الميكانيكا",
    back: "العودة إلى التجربة الهندسية",
  },

  HE: {
    title: "המשך לחקור 🚀",
    text:
      "המשך לגלות תחומי הנדסה, להשוות בין מסלולים או למצוא את התחום שמתאים לך ביותר.",
    match: "🧭 מצא את ההתאמה שלך",
    compare: "⚖️ השווה תחומים",
    otherFields: "חקור תחומים נוספים",
    software: "💻 תוכנה",
    computer: "🖥 מחשבים",
    electrical: "⚡ חשמל",
    mechanical: "⚙ מכונות",
    back: "חזרה לחוויית ההנדסה",
  },
};

export default function ExploreMore() {
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

  const t = exploreMoreTranslations[language];
  const isRTL = language === "AR" || language === "HE";

  return (
    <div
      style={{
        ...sectionStyle,
        padding: isMobile ? "22px" : "30px",
        direction: isRTL ? "rtl" : "ltr",
        textAlign: isRTL ? "right" : "left",
      }}
    >
      <h2 style={{ marginTop: 0 }}>{t.title}</h2>

      <p
        style={{
          color: "#475569",
          lineHeight: "1.7",
          fontSize: isMobile ? "16px" : "17px",
        }}
      >
        {t.text}
      </p>

      <div
        style={{
          ...buttonContainer,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <a href="/experience/match" style={{ width: isMobile ? "100%" : "auto" }}>
          <button style={{ ...primaryButton, width: isMobile ? "100%" : "auto" }}>
            {t.match}
          </button>
        </a>

        <a href="/experience/compare" style={{ width: isMobile ? "100%" : "auto" }}>
          <button style={{ ...secondaryButton, width: isMobile ? "100%" : "auto" }}>
            {t.compare}
          </button>
        </a>
      </div>

      <h3 style={{ marginTop: "30px" }}>{t.otherFields}</h3>

      <div
        style={{
          ...gridStyle,
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(160px, 1fr))",
        }}
      >
        <a href="/experience/software">
          <button style={fieldButton}>{t.software}</button>
        </a>

        <a href="/experience/computer">
          <button style={fieldButton}>{t.computer}</button>
        </a>

        <a href="/experience/electrical">
          <button style={fieldButton}>{t.electrical}</button>
        </a>

        <a href="/experience/mechanical">
          <button style={fieldButton}>{t.mechanical}</button>
        </a>
      </div>

      <a href="/experience" style={{ width: isMobile ? "100%" : "auto" }}>
        <button style={{ ...homeButton, width: isMobile ? "100%" : "auto" }}>
          {t.back}
        </button>
      </a>
    </div>
  );
}

const sectionStyle = {
  backgroundColor: "white",
  borderRadius: "18px",
  boxShadow: "0 8px 25px rgba(15,23,42,0.08)",
  border: "1px solid #e5e7eb",
  marginTop: "40px",
} as const;

const buttonContainer = {
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
  marginTop: "20px",
} as const;

const primaryButton = {
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

const gridStyle = {
  display: "grid",
  gap: "15px",
} as const;

const fieldButton = {
  width: "100%",
  padding: "15px",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  backgroundColor: "#f8fafc",
  cursor: "pointer",
  fontWeight: "bold",
} as const;

const homeButton = {
  marginTop: "25px",
  padding: "12px 20px",
  borderRadius: "10px",
  border: "1px solid #1e3a8a",
  backgroundColor: "white",
  color: "#1e3a8a",
  cursor: "pointer",
  fontWeight: "bold",
} as const;
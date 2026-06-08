"use client";

import { useEffect, useState } from "react";
import { translations } from "./translations";

export default function Home() {
  const [language, setLanguage] = useState<"EN" | "AR" | "HE">("EN");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateLanguage = () => {
      const savedLanguage = localStorage.getItem("language") as
        | "EN"
        | "AR"
        | "HE"
        | null;

      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
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

  const t = translations[language].home;
  const isRTL = language === "AR" || language === "HE";

  return (
    <main
      style={{
        minHeight: "100vh",
        direction: isRTL ? "rtl" : "ltr",
        background:
          "radial-gradient(circle at 15% 15%, #bfdbfe 0, transparent 28%), radial-gradient(circle at 85% 10%, #dbeafe 0, transparent 25%), linear-gradient(135deg, #ffffff 0%, #eff6ff 55%, #dbeafe 100%)",
        overflowX: "hidden",
      }}
    >
      <section
        style={{
          ...heroSectionStyle,
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(340px, 1fr))",
          gap: isMobile ? "34px" : "60px",
          padding: isMobile ? "42px 18px 35px" : "85px 20px 55px",
        }}
      >
        <div>
          <div style={labelStyle}>🚀 {t.label}</div>

          <h1
            style={{
              ...heroTitleStyle,
              fontSize: isMobile ? "42px" : "66px",
              lineHeight: isMobile ? "1.15" : "1.08",
              letterSpacing: isMobile ? "-0.6px" : "-1.5px",
            }}
          >
            {t.title}
          </h1>

          <p
            style={{
              ...heroTextStyle,
              fontSize: isMobile ? "18px" : "22px",
              lineHeight: isMobile ? "1.7" : "1.8",
              marginTop: isMobile ? "20px" : "26px",
            }}
          >
            {t.subtitle}
          </p>

          <div
            style={{
              ...buttonRowStyle,
              flexDirection: isMobile ? "column" : "row",
              marginTop: isMobile ? "26px" : "35px",
            }}
          >
            <a href="/assessment" style={{ width: isMobile ? "100%" : "auto" }}>
  <button
    style={{
      ...primaryButtonStyle,
      width: isMobile ? "100%" : "auto",
      padding: isMobile ? "16px 22px" : "18px 34px",
    }}
  >
    🧭 {t.assessmentButton}
  </button>
</a>

<a href="/experience" style={{ width: isMobile ? "100%" : "auto" }}>
  <button
    style={{
      ...secondaryButtonStyle,
      width: isMobile ? "100%" : "auto",
      padding: isMobile ? "16px 22px" : "18px 34px",
    }}
  >
    🚀 {t.button}
  </button>
</a>
          </div>

          <div
            style={{
              ...experienceHighlightStyle,
              padding: isMobile ? "17px" : "20px",
              marginTop: isMobile ? "22px" : "25px",
            }}
          >
            <strong>🧠 {t.highlightTitle}</strong>

            <p style={{ marginBottom: 0 }}>{t.highlightText}</p>

            <div
              style={{
                ...riddleHighlightStyle,
                fontSize: isMobile ? "15px" : "16px",
              }}
            >
              🔥 {t.riddleTitle}
              <br />
              <span>{t.riddleText}</span>
            </div>
          </div>

          <div
            style={{
              ...statsContainerStyle,
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, minmax(130px, 1fr))",
              gap: isMobile ? "10px" : "14px",
            }}
          >
            <div style={{ ...statStyle, minWidth: 0 }}>
              <strong>4</strong>
              <span>{t.stats.fields}</span>
            </div>

            <div style={{ ...statStyle, minWidth: 0 }}>
              <strong>8</strong>
              <span>{t.stats.previews}</span>
            </div>

            <div style={{ ...statStyle, minWidth: 0 }}>
              <strong>1</strong>
              <span>{t.stats.quiz}</span>
            </div>

            <div style={{ ...statStyle, minWidth: 0 }}>
              <strong>1</strong>
              <span>{t.stats.compare}</span>
            </div>

            <div style={{ ...statStyle, minWidth: 0 }}>
              <strong>16</strong>
              <span>{t.stats.questions}</span>
            </div>

            <div style={{ ...statStyle, minWidth: 0 }}>
              <strong>{t.stats.multiple}</strong>
              <span>{t.stats.careers}</span>
            </div>
          </div>
        </div>

        <div
          style={{
            ...visualCardStyle,
            padding: isMobile ? "18px" : "30px",
            borderRadius: isMobile ? "24px" : "32px",
          }}
        >
          <div
            style={{
              ...dashboardHeaderStyle,
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? "12px" : "0",
            }}
          >
            <div>
              <strong>{t.dashboardTitle}</strong>
              <p style={{ margin: "6px 0 0", color: "#64748b" }}>
                {t.dashboardSubtitle}
              </p>
            </div>

            <div style={miniBadgeStyle}>{t.live}</div>
          </div>

          <div
            style={{
              ...fieldGridStyle,
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            }}
          >
            <div style={fieldMiniCardStyle}>💻 Software</div>
            <div style={fieldMiniCardStyle}>🖥 Computer</div>
            <div style={fieldMiniCardStyle}>⚡ Electrical</div>
            <div style={fieldMiniCardStyle}>⚙ Mechanical</div>
          </div>

          <div
            style={{
              ...highlightPanelStyle,
              padding: isMobile ? "20px" : "24px",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{t.whatStudentsCanDo}</h3>

            {t.dashboardItems.map((item) => (
              <div key={item} style={checkItemStyle}>
                ✅ {item}
              </div>
            ))}
          </div>

          <div style={floatingCardStyle}>
            <strong>{t.recommendedStart}</strong>
            <p style={{ margin: "8px 0 0", color: "#475569" }}>
              {t.recommendedText}
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          ...featuresSectionStyle,
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(260px, 1fr))",
          padding: isMobile ? "10px 18px 60px" : "20px 20px 90px",
          gap: isMobile ? "18px" : "26px",
        }}
      >
        {t.features.map((item, index) => (
          <div
            key={item.title}
            style={{
              ...featureCardStyle,
              padding: isMobile ? "24px" : "34px",
            }}
          >
            <div style={numberStyle}>0{index + 1}</div>

            <h3
              style={{
                ...featureTitleStyle,
                fontSize: isMobile ? "21px" : "24px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                ...featureTextStyle,
                fontSize: isMobile ? "16px" : "17px",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

const heroSectionStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  alignItems: "center",
} as const;

const labelStyle = {
  display: "inline-block",
  padding: "9px 18px",
  borderRadius: "999px",
  backgroundColor: "#dbeafe",
  color: "#1e3a8a",
  fontWeight: "bold",
  marginBottom: "22px",
  border: "1px solid #bfdbfe",
} as const;

const heroTitleStyle = {
  margin: 0,
  color: "#0f172a",
  fontWeight: 900,
} as const;

const heroTextStyle = {
  color: "#475569",
  maxWidth: "650px",
} as const;

const buttonRowStyle = {
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
} as const;

const primaryButtonStyle = {
  fontSize: "18px",
  background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
  color: "white",
  border: "none",
  borderRadius: "14px",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 12px 25px rgba(30,58,138,0.3)",
} as const;

const secondaryButtonStyle = {
  fontSize: "18px",
  backgroundColor: "white",
  color: "#1e3a8a",
  border: "1px solid #1e3a8a",
  borderRadius: "14px",
  cursor: "pointer",
  fontWeight: "bold",
} as const;

const statsContainerStyle = {
  marginTop: "30px",
} as const;

const statStyle = {
  backgroundColor: "rgba(255,255,255,0.85)",
  border: "1px solid #dbeafe",
  borderRadius: "14px",
  padding: "14px 16px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  color: "#1e3a8a",
  fontWeight: "bold",
} as const;

const visualCardStyle = {
  position: "relative",
  backgroundColor: "rgba(255,255,255,0.86)",
  boxShadow: "0 25px 60px rgba(15,23,42,0.16)",
  border: "1px solid #dbeafe",
  overflow: "hidden",
} as const;

const dashboardHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  borderRadius: "20px",
  padding: "20px",
  border: "1px solid #e5e7eb",
} as const;

const miniBadgeStyle = {
  backgroundColor: "#dcfce7",
  color: "#166534",
  padding: "7px 12px",
  borderRadius: "999px",
  fontWeight: "bold",
  fontSize: "13px",
} as const;

const fieldGridStyle = {
  display: "grid",
  gap: "14px",
  marginTop: "20px",
} as const;

const fieldMiniCardStyle = {
  backgroundColor: "#eff6ff",
  border: "1px solid #bfdbfe",
  borderRadius: "16px",
  padding: "18px",
  color: "#1e3a8a",
  fontWeight: "bold",
} as const;

const highlightPanelStyle = {
  marginTop: "20px",
  background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
  color: "white",
  borderRadius: "22px",
  boxShadow: "0 18px 35px rgba(30,58,138,0.22)",
} as const;

const checkItemStyle = {
  backgroundColor: "rgba(255,255,255,0.13)",
  padding: "12px",
  borderRadius: "12px",
  marginTop: "10px",
} as const;

const floatingCardStyle = {
  marginTop: "20px",
  backgroundColor: "white",
  borderRadius: "18px",
  padding: "20px",
  border: "1px solid #e5e7eb",
} as const;

const featuresSectionStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
} as const;

const featureCardStyle = {
  backgroundColor: "rgba(255,255,255,0.92)",
  borderRadius: "24px",
  boxShadow: "0 12px 35px rgba(15,23,42,0.09)",
  border: "1px solid #e0e7ff",
} as const;

const numberStyle = {
  width: "58px",
  height: "58px",
  borderRadius: "50%",
  backgroundColor: "#dbeafe",
  color: "#1e3a8a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  marginBottom: "18px",
  fontSize: "20px",
} as const;

const featureTitleStyle = {
  color: "#0f172a",
  marginBottom: "12px",
} as const;

const featureTextStyle = {
  color: "#475569",
  lineHeight: "1.8",
} as const;

const experienceHighlightStyle = {
  backgroundColor: "rgba(255,255,255,0.85)",
  border: "1px solid #bfdbfe",
  borderRadius: "18px",
  color: "#1e3a8a",
  maxWidth: "650px",
  boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
} as const;

const riddleHighlightStyle = {
  marginTop: "15px",
  backgroundColor: "#eff6ff",
  border: "1px solid #bfdbfe",
  borderRadius: "14px",
  padding: "14px",
  color: "#1e3a8a",
  fontWeight: "bold",
  lineHeight: "1.6",
} as const;
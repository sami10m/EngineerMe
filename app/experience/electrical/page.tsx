"use client";

import ExploreMore from "@/app/components/ExploreMore";
import { useEffect, useState } from "react";
import { electricalTranslations } from "./electricalTranslations";

export default function ElectricalEngineeringPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [openCareer, setOpenCareer] = useState<string | null>(null);
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

  const t = electricalTranslations[language];
  const isRTL = language === "AR" || language === "HE";
  const activeLevel = selectedLevel || t.levels[0];

  const filteredQuestions = t.questions.filter((q) =>
    activeLevel.includes(q.difficulty)
  );

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: isMobile ? "42px 18px 60px" : "70px 20px",
        direction: isRTL ? "rtl" : "ltr",
        textAlign: isRTL ? "right" : "left",
      }}
    >
      <h1
        style={{
          fontSize: isMobile ? "38px" : "46px",
          color: "#0f172a",
          lineHeight: "1.15",
        }}
      >
        {t.title}
      </h1>

      <p
        style={{
          fontSize: isMobile ? "17px" : "20px",
          color: "#475569",
          lineHeight: "1.8",
        }}
      >
        {t.description}
      </p>

      <div style={{ ...sectionStyle, padding: isMobile ? "22px" : "30px" }}>
        <h2>{t.studyTitle}</h2>

        <ul style={{ lineHeight: "2", paddingInlineStart: isRTL ? "0" : "22px" }}>
          {t.subjects.map((subject) => (
            <li key={subject}>{subject}</li>
          ))}
        </ul>
      </div>

      <div style={{ ...sectionStyle, padding: isMobile ? "22px" : "30px" }}>
        <h2>{t.coursesTitle}</h2>

        <p style={{ color: "#475569", lineHeight: "1.7", fontSize: isMobile ? "16px" : "17px" }}>
          {t.coursesText}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(260px, 1fr))",
            gap: isMobile ? "16px" : "20px",
            marginTop: "25px",
          }}
        >
          {t.courses.map((course) => (
            <div key={course.title} style={{ ...courseCardStyle, padding: isMobile ? "22px" : "25px" }}>
              <h3>{course.title}</h3>

              <p style={{ color: "#475569", lineHeight: "1.7" }}>{course.text}</p>

              <a href={course.link} style={{ width: isMobile ? "100%" : "auto" }}>
                <button style={{ ...buttonStyle, width: isMobile ? "100%" : "auto" }}>
                  {t.startCourse}
                </button>
              </a>

              <p style={tipStyle}>{course.tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ ...sectionStyle, padding: isMobile ? "22px" : "30px" }}>
        <h2>{t.careerTitle}</h2>

        <p style={{ color: "#475569", lineHeight: "1.7", fontSize: isMobile ? "16px" : "17px" }}>
          {t.careerText}
        </p>

        {t.careers.map((career) => (
          <div key={career.title} style={{ ...careerCardStyle, padding: isMobile ? "22px" : "25px" }}>
            <h3>{career.title}</h3>

            <p style={{ color: "#475569", lineHeight: "1.7" }}>
              {career.description}
            </p>

            <button
              onClick={() =>
                setOpenCareer(openCareer === career.title ? null : career.title)
              }
              style={{ ...buttonStyle, width: isMobile ? "100%" : "auto" }}
            >
              {openCareer === career.title ? t.hide : t.learnMore}
            </button>

            {openCareer === career.title && (
              <div
                style={{
                  marginTop: "18px",
                  backgroundColor: "#eff6ff",
                  borderRadius: "14px",
                  padding: isMobile ? "18px" : "20px",
                }}
              >
                <h4>{t.daily}</h4>

                <ul style={{ paddingInlineStart: isRTL ? "0" : "22px" }}>
                  {career.daily.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h4>{t.skills}</h4>

                <ul style={{ paddingInlineStart: isRTL ? "0" : "22px" }}>
                  {career.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ ...sectionStyle, padding: isMobile ? "22px" : "30px" }}>
        <h2>{t.questionsTitle}</h2>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          {t.levels.map((level) => (
            <button
              key={level}
              onClick={() => {
                setSelectedLevel(level);
                setOpenQuestion(null);
              }}
              style={{
                padding: isMobile ? "10px 13px" : "10px 16px",
                borderRadius: "999px",
                border: activeLevel === level ? "none" : "1px solid #d1d5db",
                backgroundColor: activeLevel === level ? "#1e3a8a" : "white",
                color: activeLevel === level ? "white" : "#1e3a8a",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: isMobile ? "13px" : "14px",
              }}
            >
              {level}
            </button>
          ))}
        </div>

        {filteredQuestions.map((q, index) => (
          <div
            key={index}
            style={{
              marginTop: "25px",
              paddingBottom: "25px",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginBottom: "15px",
              }}
            >
              <span style={tagStyle}>{q.difficulty}</span>
              <span style={tagStyle}>{q.topic}</span>
              <span style={tagStyle}>{q.skill}</span>
            </div>

            <p style={{ fontSize: isMobile ? "16px" : "18px", lineHeight: "1.7" }}>
              {q.question}
            </p>

            <button
              onClick={() =>
                setOpenQuestion(openQuestion === index ? null : index)
              }
              style={{ ...buttonStyle, width: isMobile ? "100%" : "auto" }}
            >
              {openQuestion === index ? t.hideExplanation : t.show}
            </button>

            {openQuestion === index && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "20px",
                  borderRadius: "14px",
                  backgroundColor: "#eff6ff",
                  lineHeight: "1.7",
                }}
              >
                {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      <ExploreMore />
    </main>
  );
}

const sectionStyle = {
  backgroundColor: "white",
  borderRadius: "18px",
  boxShadow: "0 8px 25px rgba(15,23,42,0.08)",
  border: "1px solid #e5e7eb",
  marginTop: "30px",
} as const;

const tagStyle = {
  backgroundColor: "#dbeafe",
  color: "#1e3a8a",
  padding: "8px 12px",
  borderRadius: "999px",
  fontWeight: "bold",
  fontSize: "14px",
} as const;

const buttonStyle = {
  marginTop: "15px",
  padding: "12px 20px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#1e3a8a",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
} as const;

const courseCardStyle = {
  backgroundColor: "#f8fafc",
  borderRadius: "16px",
  border: "1px solid #e5e7eb",
} as const;

const careerCardStyle = {
  backgroundColor: "#f8fafc",
  borderRadius: "16px",
  border: "1px solid #e5e7eb",
  marginTop: "18px",
} as const;

const tipStyle = {
  marginTop: "15px",
  backgroundColor: "#eff6ff",
  padding: "14px",
  borderRadius: "12px",
  color: "#1e3a8a",
  lineHeight: "1.6",
} as const;
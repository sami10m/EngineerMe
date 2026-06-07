"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { translations } from "../translations";

export default function Header() {
  const [language, setLanguage] = useState<"EN" | "AR" | "HE">("EN");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateLanguage = () => {
      const saved = localStorage.getItem("language") as
        | "EN"
        | "AR"
        | "HE"
        | null;

      if (saved) setLanguage(saved);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 700);
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

  const t = translations[language].nav;
  const isRTL = language === "AR" || language === "HE";

  return (
    <header
      style={{
        backgroundColor: "#1e3a8a",
        padding: isMobile ? "16px 18px" : "18px 40px",
        color: "white",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "16px" : "25px",
          justifyContent: "space-between",
          alignItems: isMobile ? "stretch" : "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: isMobile ? "26px" : "28px",
              }}
            >
              EngineerMe
            </h2>

            <small
              style={{
                display: "block",
                marginTop: "4px",
                opacity: 0.9,
                lineHeight: "1.4",
              }}
            >
              Can I Succeed in Engineering?
            </small>
          </Link>

          {isMobile && <LanguageSwitcher />}
        </div>

        <nav
          style={{
            display: "flex",
            gap: isMobile ? "10px" : "25px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/">{t.home}</Link>

          <Link href="/assessment">{t.assessment}</Link>

          <Link href="/experience">Experience</Link>

          <Link href="/about">{t.about}</Link>

          {!isMobile && <LanguageSwitcher />}
        </nav>
      </div>
    </header>
  );
}
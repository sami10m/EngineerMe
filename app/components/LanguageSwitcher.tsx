"use client";

import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [language, setLanguage] =
    useState<"EN" | "AR" | "HE">("EN");

  useEffect(() => {
    const savedLanguage =
      localStorage.getItem("language") as
        | "EN"
        | "AR"
        | "HE"
        | null;

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (
    value: "EN" | "AR" | "HE"
  ) => {
    setLanguage(value);

    localStorage.setItem(
      "language",
      value
    );

    window.dispatchEvent(
      new Event("languageChange")
    );
  };

  return (
    <select
      value={language}
      onChange={(e) =>
        changeLanguage(
          e.target.value as "EN" | "AR" | "HE"
        )
      }
      style={{
        padding: "10px 14px",
        borderRadius: "999px",
        border: "none",

        backgroundColor: "white",
        color: "#1e3a8a",

        fontSize: "15px",
        fontWeight: "bold",

        cursor: "pointer",
        outline: "none",

        boxShadow:
          "0 4px 12px rgba(0,0,0,0.12)",
      }}
    >
      <option value="EN">
        English
      </option>

      <option value="AR">
        العربية
      </option>

      <option value="HE">
        עברית
      </option>
    </select>
  );
}
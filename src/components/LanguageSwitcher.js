"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

const languages = ["AUTO", "DE", "EN"]; // Reihenfolge: AUTO → DE → EN → DE → AUTO
const rotationStep = -36; // Jetzt nach RECHTS (positiv!)

const LanguageSwitcher = () => {
  const [currentLangIndex, setCurrentLangIndex] = useState(0); // Start: AUTO (0°)
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      const index = languages.indexOf(storedLang.toUpperCase());
      if (index !== -1) setCurrentLangIndex(index);
    }
  }, []);

  const toggleLanguage = () => {
    let newIndex = (currentLangIndex + 1) % languages.length; // +1 für nächste Sprache (nach RECHTS)
    setCurrentLangIndex(newIndex);

    const newLang = languages[newIndex];

    if (newLang === "AUTO") {
      const browserLang = navigator.language.slice(0, 2); // Browser-Sprache holen
      localStorage.setItem("lang", browserLang);
      router.push(`/${browserLang}`);
    } else {
      localStorage.setItem("lang", newLang.toLowerCase());
      router.push(`/${newLang.toLowerCase()}`);
    }
  };

  const toggleLanguageBack = () => {
    let newIndex = (currentLangIndex - 1 + languages.length) % languages.length; // -1 für vorige Sprache (nach LINKS)
    setCurrentLangIndex(newIndex);

    const newLang = languages[newIndex];

    if (newLang === "AUTO") {
      const browserLang = navigator.language.slice(0, 2);
      localStorage.setItem("lang", browserLang);
      router.push(`/${browserLang}`);
    } else {
      localStorage.setItem("lang", newLang.toLowerCase());
      router.push(`/${newLang.toLowerCase()}`);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Markierungsstrich (zeigt aktuelle Sprache) */}
      <div
        className={`absolute left-[-14px] top-1/2 -translate-y-1/2 w-4 h-[2px] ${
          theme === "dark" ? "bg-[#f5f5f4]" : "bg-black"
        }`}
      ></div>

      {/* Kamera-Drehrad (dreht in 36°-Schritten, immer sauber) */}
      <motion.button
        onClick={toggleLanguage}
        animate={{ rotate: currentLangIndex * -36 }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        className="w-20 h-20 flex items-center justify-center relative"
      >
        <Image
          src="/icons/camera-language-whee.svg"
          alt="Language Dial"
          width={164}
          height={164}
          className={theme === "dark" ? "filter-to-f5f5f4" : ""}
        />
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;

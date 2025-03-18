"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import SwitcherND from "./SwitcherND";
import LanguageSwitcher from "./LanguageSwitcher";
import Menu from "./Menu";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const StickyButton = () => {
  const pathname = usePathname();
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [isGrayscale, setIsGrayscale] = useState(false); // Schwarz-Weiß-Status
  const { theme } = useTheme();

  console.log("theme: " + theme);

  useEffect(() => {
    const checkDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(checkDarkMode);
  }, []);

  const getColor = () => {
    switch (pathname) {
      case "/cinema":
        return isDarkMode ? "text-yellow-300" : "text-yellow-600";
      case "/somepage":
        return isDarkMode ? "text-blue-300" : "text-blue-500";
      default:
        return isDarkMode ? "text-white" : "text-black";
    }
  };

  const handleClick = () => {
    setShowSwitcher(!showSwitcher);
    setShowMenu(!showMenu);
    setShowIcons(!showIcons);
  };

  const toggleGrayscale = () => {
    setIsGrayscale(!isGrayscale);
    document.documentElement.classList.toggle("grayscale");
  };

  const closeMenu = () => {
    setShowMenu(false);
    setShowSwitcher(false); // Hide SwitcherND
    setShowIcons(false); // Hide Icons
  };

  return (
    <>
      {/* Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ translateY: "100%" }}
            animate={{ translateY: "0%" }}
            exit={{ translateY: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 10 }}
            className={`fixed bottom-0 left-0 right-0 h-[550px] ${
              theme === "dark" ? "bg-[var(--background-dark)]" : "bg-white"
            } text-[var(--foreground)]`}
            style={{
              transition: "background-color 1.5s ease, color 1.5s ease", // Match global transition
            }}
          >
            <Menu closeMenu={closeMenu} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <div className="fixed bottom-[15%] left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center">
        {/* SwitcherND */}
        <AnimatePresence>
          {showSwitcher && (
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 10 }}
              className="absolute right-full mr-10"
            >
              <SwitcherND />
            </motion.div>
          )}
        </AnimatePresence>

        {/* LanguageSwitcher */}
        <AnimatePresence>
          {showSwitcher && (
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 80, opacity: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 10 }}
              className="absolute left-full ml-8"
            >
              <LanguageSwitcher />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <button
          type="button"
          onClick={handleClick}
          className={`cursor-pointer flex items-center justify-center w-20 h-20 border-2 rounded-full bg-[var(--background)] ${getColor()} shadow-md`}
        >
          <Image src="/logos/CV.svg" alt="icon" width={60} height={60} />
        </button>

        {/* Icon-Reihe über dem CV-Button */}
        <AnimatePresence>
          {showIcons && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="absolute bottom-[110px] flex space-x-5 justify-center ml-1.5"
            >
              <Image
                src="/icons/vectoscope-rgb.svg"
                alt="vectoscope-rgb"
                width={30}
                height={30}
                unoptimized
                className={theme === "dark" ? "filter-to-f5f5f4" : ""}
              />
              <Image
                src="/icons/vectoscope.svg"
                alt="vectoscope"
                width={30}
                height={30}
                unoptimized
                className={theme === "dark" ? "filter-to-f5f5f4" : ""}
              />
              <Image
                src="/icons/falsecolor.svg"
                alt="falsecolor"
                width={30}
                height={30}
                unoptimized
                className={theme === "dark" ? "filter-to-f5f5f4" : ""}
              />
              <Image
                src="/icons/pick.svg"
                alt="pick"
                width={30}
                height={30}
                unoptimized
                className={theme === "dark" ? "filter-to-f5f5f4" : ""}
              />

              {/* Grayscale Toggle Icon */}
              <Image
                src="/icons/blackwith.svg"
                alt="blackwith"
                width={30}
                height={30}
                unoptimized
                onClick={toggleGrayscale}
                className={
                  theme === "dark"
                    ? "filter-to-f5f5f4 cursor-pointer"
                    : "cursor-pointer"
                }
              />

              <Image
                src="/icons/mask.svg"
                alt="mask"
                width={30}
                height={30}
                unoptimized
                className={theme === "dark" ? "filter-to-f5f5f4" : ""}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default StickyButton;
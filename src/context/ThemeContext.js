"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = Cookies.get("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    }
  }, []);
  

  const applyTheme = (mode) => {
    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.style.setProperty("--background", mode === "dark" ? "var(--background-dark)" : "var(--background)");
    document.documentElement.style.setProperty("--foreground", mode === "dark" ? "var(--foreground-dark)" : "var(--foreground)");
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    Cookies.set("theme", newTheme, { expires: 365 });
  
    // ND Filter should trigger on dark mode
    Cookies.set("ndFilter", newTheme === "dark" ? "on" : "off", { expires: 365 });
  
    applyTheme(newTheme);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

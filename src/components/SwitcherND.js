"use client";
import { useTheme } from "../context/ThemeContext";

const SwitcherND = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center text-black">
      <div className="text-xs mb-2 tracking-wider">ND PRESET</div>

      {/* ND ON Button */}
      <button
        onClick={toggleTheme}
        className="w-14 h-10 flex flex-col items-center justify-center text-xs font-medium rounded border border-gray-400 bg-gray-200/50"
      >
        <span className={theme === "dark" ? "text-green-500" : "text-black"}>ND ON</span>
        <div className="text-xl font-light leading-none">+</div>
      </button>

      {/* Separator */}
      <div className="w-10 h-[2px] my-1 bg-gray-500 rounded-full"></div>

      {/* CLEAR Button */}
      <button
        onClick={toggleTheme}
        className="w-14 h-10 flex flex-col items-center justify-center text-xs font-medium rounded border border-gray-400 bg-gray-200/50"
      >
        <div className="text-xl font-light leading-none">-</div>
        <span className={`text-xs pt-0 ${theme === "light" ? "text-red-500" : "text-black"}`}>CLEAR</span>
      </button>
    </div>
  );
};

export default SwitcherND;

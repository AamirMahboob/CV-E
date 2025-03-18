"use client";
import { useTheme } from "../context/ThemeContext";

const SwitcherND = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center text-[var(--foreground)]">
      <div className={`text-[10px] tracking-wide ${theme === "light" ? "text-[var(--foreground)]" : "text-[var(--foreground-dark)]"}`} >ND PRESET</div>
      
      <div className="border border-[var(--foreground)] p-1 rounded-md flex flex-col items-center shadow-inner" 
      style={{ boxShadow: `${theme === "light" ? "inset 0 -1px 4px var(--background-dark)" : "inset 0 -1px 4px var(--foreground-dark)"}` }}
>
        {/* ND ON Button */}
        <button
          onClick={toggleTheme}
          className="w-14 h-6 flex flex-col items-center justify-center text-[12px] font-medium rounded border border-[var(--foreground)]"
        >
          <span className="text-[10px] text-[var(--foreground)]">ND ON</span>
          <div className={`text-xl -mt-2 font-light leading-none ${theme === "dark" ? "text-green-500" : "text-[var(--foreground)]"}`}>+</div>
        </button>

        {/* Separator with border */}
        <div className={`w-14 h-[2px] my-1 border-t border-[var(--foreground)]`}></div>

        {/* CLEAR Button */}
        <button
          onClick={toggleTheme}
          className="w-14 h-6 flex flex-col items-center justify-center text-[12px] font-medium rounded border border-[var(--foreground)]"
        >
          <div className={`text-xl font-extrabold leading-none ${theme === "light" ? "text-red-500" : "text-[var(--foreground-dark)]"}`}>-</div>
          <span className="text-[10px] -mt-2 text-[var(--foreground)]">CLEAR</span>
        </button>
      </div>
    </div>
  );
};

export default SwitcherND;
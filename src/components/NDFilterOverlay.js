"use client"
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const NDFilterOverlay = () => {
  const { theme } = useTheme(); // Get theme from context
  const ndFilter = theme === "dark"; // ND overlay triggers on dark mode

  return (
    <AnimatePresence>
      {ndFilter && (
        <>
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "100vh" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-[50px] bg-black z-50"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "-100vh" }}
            exit={{ y: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed bottom-0 left-0 w-full h-[50px] bg-black z-50"
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default NDFilterOverlay;

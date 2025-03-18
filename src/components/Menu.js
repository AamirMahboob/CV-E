"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Menu({ closeMenu }) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1]; // Extract locale (e.g., 'en' or 'de')
  const isLocale = ["en", "de"].includes(locale); // Check if it's a valid locale

  const menuData = {
    Home: [{ label: "Home", url: "/home" }],
    Cinema: [
      { label: "Cinema", url: "/cinema" },
      { label: "Behind the frame", url: "/behind-the-frame" },
      { label: "Creative archive", url: "/creative-archive" },
    ],
    igotshot: [{ label: "Igotshot", url: "/igotshot" }],
    Engament: [
      { label: "Community", url: "/community" },
      { label: "Contribution", url: "/contribution" },
      { label: "Gallery", url: "/gallery" },
    ],
    Impact: [
      { label: "Get involved", url: "/get-involved" },
      { label: "Impact", url: "/impact" },
    ],
    Contact: [
      { label: "Contact", url: "/contact" },
      { label: "Voices of CV", url: "/voices-of-cv" },
      { label: "Who is CV?", url: "/whoiscv" },
    ],
  };

  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (heading) => {
    if (menuData[heading].length > 1) {
      setSelectedMenu(heading);
    }
  };

  // Function to generate localized URLs
  const getLocalizedUrl = (url) => (isLocale ? `/${locale}${url}` : url);

  return (
    <div className="px-4">
      <div className="relative overflow-hidden h-full pt-4">
        {/* Parent Menu */}
        <motion.div
          className="overflow-x-auto scrollbar-hide"
          animate={{ y: selectedMenu ? -130 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="inline-flex space-x-3 md:space-x-8">
            {Object.keys(menuData).map((heading, index) => (
              <div key={index} className="flex-shrink-0">
                {menuData[heading].length > 1 ? (
                  <div className="cursor-pointer" onClick={() => handleMenuClick(heading)}>
                    <h3 className="ml-1 font-semibold text-2xl nav-text uppercase">
                      {heading}
                    </h3>
                    <div className="w-[18.5vw] h-40 bg-black/20 rounded-sm"></div>
                  </div>
                ) : (
                  <Link href={getLocalizedUrl(menuData[heading][0].url)} passHref>
                    <div className="cursor-pointer" onClick={closeMenu}>
                      <h3 className="ml-1 font-semibold text-2xl nav-text uppercase">
                        {heading}
                      </h3>
                      <div className="w-[18.5vw] h-40 bg-black/20 rounded-sm"></div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sub-Squares */}
        <AnimatePresence>
          {selectedMenu && menuData[selectedMenu].length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute left-0 right-0 flex justify-center space-x-8 mt-[-110px]"
              style={{ zIndex: 2 }}
            >
              <button
                onClick={() => setSelectedMenu(null)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-20 px-4 py-2 bg-gray-800 text-white rounded-md"
              >
                Back
              </button>
              {menuData[selectedMenu].map(({ label, url }, index) => (
                <Link key={index} href={getLocalizedUrl(url)} passHref>
                  <div
                    className="w-[18.5vw] h-40 bg-black/10 rounded-sm uppercase flex items-center justify-center text-lg font-semibold cursor-pointer hover:bg-black/20 transition"
                    onClick={closeMenu}
                  >
                    {label}
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Menu;

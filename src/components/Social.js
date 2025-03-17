"use client";

import { useMemo } from "react";
import socialData from "../data/social.json";
import { BsWhatsapp, BsSignal } from "react-icons/bs";
import { TfiInstagram, TfiLinkedin, TfiVimeoAlt } from "react-icons/tfi";

const ICONS_MAP = {
  whatsapp: BsWhatsapp,
  signal: BsSignal,
  insta: TfiInstagram,
  linkedin: TfiLinkedin,
  vimeo: TfiVimeoAlt,
};

const Social = ({ type = "footer", className = "" }) => {
  const socialLinks = useMemo(() => socialData[type] || [], [type]);

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map(({ name, link, icon }) => {
        const IconComponent = ICONS_MAP[icon];

        if (!IconComponent) {
          console.error(`Icon "${icon}" not found in ICONS_MAP.`);
          return null;
        }

        return (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black p-1.5 rounded-full transition-all duration-200 hover:border-gray-500 hover:scale-110 cursor-pointer"
          >
            <IconComponent size={12} />
          </a>
        );
      })}
    </div>
  );
};

export default Social;

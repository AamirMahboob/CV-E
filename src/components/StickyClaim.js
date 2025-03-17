"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const claimMappings = {
  "theme-cinema": "claims/cinematography-with-value.svg", 
  "theme-igotshot": "claims/community-vibes.svg",
  "theme-engagement": "claims/celebrating-your-vows.svg",
  "theme-impact": "claims/corporate-visibility.svg",
  "theme-contact": "claims/creative-ventures.svg",
};
const StickyClaim = () => {
  const [claimSrc, setClaimSrc] = useState(null);

  useEffect(() => {
    const body = document.body;
    if (!body) return;

    const classList = body.className.split(" ");
    const matchedClaim = classList.find((cls) => claimMappings[cls]);

    if (matchedClaim) {
      setClaimSrc(claimMappings[matchedClaim]);
    } else {
      setClaimSrc(null);
    }
  }, []);

  if (!claimSrc) return null;

  return (
    <div className="fixed top-15 left-15 z-50">
      {/* Desktop Version */}
      <Image
        src={claimSrc}
        alt="Claim Logo"
        width={0}
        height={70}
        style={{ width: "auto", height: "70px" }}
        className="hidden md:block"
      />
      {/* Mobile Version */}
      <Image
        src={claimSrc}
        alt="Claim Logo (Mobile)"
        width={0}
        height={50}
        style={{ width: "auto", height: "50px" }}
        className="block md:hidden"
      />
    </div>
  );
};

export default StickyClaim;

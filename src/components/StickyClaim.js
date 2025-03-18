"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const claimMappings = {
  "/cinema /behind-the-frame /creative-archive": "claims/cinematography-with-value.svg",
  "/igotshot": "claims/community-vibes.svg",
  "/engagement /gallery /community /contribution": "claims/celebrating-your-vows.svg",
  "/impact /get-involved": "claims/corporate-visibility.svg",
  "/contact /whoiscv /voices-of-cv": "claims/creative-ventures.svg",
};

const StickyClaim = () => {
  const [claimSrc, setClaimSrc] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const matchedClaim = Object.keys(claimMappings).find((paths) =>
      paths.split(" ").some((path) => pathname.startsWith(path))
    );
  
    if (matchedClaim) {
      setClaimSrc(claimMappings[matchedClaim]);
    } else {
      setClaimSrc(null); 
    }
  }, [pathname]);

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
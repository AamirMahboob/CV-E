"use client";
import { useState, useEffect } from "react";
import StickyButton from "./StickyButton";
import FalseColor from "./FalseColor";

const FalseColorProvider = () => {
    const [falseColorActive, setFalseColorActive] = useState(false);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    const handleFalseColorToggle = () => {
        console.log("🎥 False Color Toggle Button geklickt! Neuer Status:", !falseColorActive);
        setFalseColorActive(!falseColorActive);
    };

    if (!hydrated) return null; // **Fix für Hydration-Fehler**

    return (
        <>
            <FalseColor active={falseColorActive} />
            <StickyButton onFalseColorToggle={handleFalseColorToggle} />
        </>
    );
};

export default FalseColorProvider;

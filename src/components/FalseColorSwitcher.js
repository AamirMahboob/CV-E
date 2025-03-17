"use client";
import { useState } from "react";

const FalseColorSwitcher = ({ onToggle }) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
        console.log("🎥 False Color Button geklickt! Neuer Status:", !active);
        onToggle();
    };

    return (
        <button
            onClick={handleClick}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all 
                ${active ? "bg-red-500 border-red-700" : "bg-gray-800 border-gray-500"}
                hover:scale-110`}
        >
            🎥
        </button>
    );
};

export default FalseColorSwitcher;

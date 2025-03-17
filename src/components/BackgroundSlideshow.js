"use client";
import React, { useEffect, useState } from "react";

export default function BackgroundSlideshow({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Bildwechsel alle 5 Sekunden

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      ))}
    </div>
  );
}

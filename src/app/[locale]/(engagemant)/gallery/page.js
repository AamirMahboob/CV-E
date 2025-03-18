"use client";
import React, { useEffect } from "react";
import BackgroundSlideshow from "../../../../components/BackgroundSlideshow";

const backgroundImages = [
  "/images/wedding/slider/traumhafte-hochzeitsfotos-01.jpg",
  "/images/wedding/slider/traumhafte-hochzeitsfotos-02.jpg",
  "/images/wedding/slider/traumhafte-hochzeitsfotos-03.jpg",
  "/images/wedding/slider/traumhafte-hochzeitsfotos-04.jpg",
  "/images/wedding/slider/traumhafte-hochzeitsfotos-05.jpg",
  "/images/wedding/slider/traumhafte-hochzeitsfotos-06.jpg",
  "/images/wedding/slider/traumhafte-hochzeitsfotos-07.jpg",
  "/images/wedding/slider/traumhafte-hochzeitsfotos-08.jpg",
  "/images/wedding/slider/traumhafte-hochzeitsfotos-09.jpg",
  "/images/wedding/slider/traumhafte-hochzeitsfotos-10.jpg",
  "/images/wedding/slider/traumhafte-hochzeitsfotos-11.jpg",
  "/images/wedding/slider/traumhafte-hochzeitsfotos-12.jpg",
  "/images/wedding/slider/traumhafte-hochzeitsfotos-13.jpg",
];

export default function WeddingPicture() {
  useEffect(() => {
    const pageClass = "theme-engagement";
    const body = document.body;

    // ✅ Klasse setzen, falls nicht bereits vorhanden
    if (!body.classList.contains(pageClass)) {
      body.classList.add(pageClass);
    }
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Slideshow */}
      <BackgroundSlideshow images={backgroundImages} />

      {/* Text */}
      <div className="flex items-center justify-center h-full text-white text-4xl font-bold">
        Wedding Pictures
      </div>
    </div>
  );
}

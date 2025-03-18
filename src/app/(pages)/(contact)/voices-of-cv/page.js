"use client";
import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const pageClass = "theme-contact";
    const body = document.body;
    if (!body.classList.contains(pageClass)) {
      body.className = pageClass;
    }
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center text-4xl text-black">
      voices-of-cv Page
    </div>
  );
}
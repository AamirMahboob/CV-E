"use client";
import React, { useEffect } from "react";

export default function igotshot() {
  useEffect(() => {
    const pageClass = "theme-igotshot";
    const body = document.body;

    // ✅ Falls die Klasse bereits eine andere ist → Ersetzen
    if (!body.classList.contains(pageClass)) {
      body.className = pageClass;
    }
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center text-4xl text-dark font-bold">
      igotshot
    </div>
  );
}

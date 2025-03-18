"use client";
import React, { useEffect } from "react";

export default function creativearchive() {
  useEffect(() => {
    const pageClass = "theme-cinema";
    const body = document.body;

    // ✅ Falls die Klasse bereits eine andere ist → Ersetzen
    if (!body.classList.contains(pageClass)) {
      body.className = pageClass;
    }
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center text-4xl text-dark font-bold">
      Creative Archive
    </div>
  );
}

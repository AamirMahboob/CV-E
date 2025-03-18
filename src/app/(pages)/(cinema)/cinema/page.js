"use client";
import React, { useEffect } from "react";

export default function Cinema() {
  useEffect(() => {
    const pageClass = "theme-cinema";
    const body = document.body;

    if (!body.classList.contains(pageClass)) {
      body.className = pageClass;
    }
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center text-4xl text-dark font-bold">
      Cinema
    </div>
  );
}

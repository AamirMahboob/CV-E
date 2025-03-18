"use client";
import React, { useEffect } from "react";

export default function impact() {
  useEffect(() => {
    const pageClass = "theme-impact";
    const body = document.body;

    if (!body.classList.contains(pageClass)) {
      body.className = pageClass;
    }
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center text-4xl text-dark font-bold">
      <div> Impact</div> 
    </div>
    
  );
}

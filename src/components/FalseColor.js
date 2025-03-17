"use client";
import { useEffect, useState } from "react";
import html2canvas from "html2canvas";

export default function FalseColor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      html2canvas(document.body, {
        ignoreElements: (element) => {
          return window.getComputedStyle(element).backgroundColor.includes("oklab");
        },
      }).then((canvas) => {
        applyFalseColor(canvas);
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100vw";
        canvas.style.height = "100vh";
        canvas.style.zIndex = "9999";
        canvas.style.pointerEvents = "none";
        canvas.id = "falseColorCanvas";

        document.body.appendChild(canvas);
      });
    } else {
      const existingCanvas = document.getElementById("falseColorCanvas");
      if (existingCanvas) {
        existingCanvas.remove();
      }
    }
  }, [enabled]);

  function applyFalseColor(canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    for (let i = 0; i < pixels.length; i += 4) {
      const brightness = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
    
      if (brightness < 8) {
        pixels[i] = 0; pixels[i + 1] = 0; pixels[i + 2] = 40;  // Fast Schwarz → Dunkellila
      } else if (brightness < 16) {
        pixels[i] = 10; pixels[i + 1] = 0; pixels[i + 2] = 60;
      } else if (brightness < 24) {
        pixels[i] = 20; pixels[i + 1] = 0; pixels[i + 2] = 80;  // Lila-Ton
      } else if (brightness < 32) {
        pixels[i] = 0; pixels[i + 1] = 0; pixels[i + 2] = 120; // Dunkelblau
      } else if (brightness < 40) {
        pixels[i] = 0; pixels[i + 1] = 0; pixels[i + 2] = 160;
      } else if (brightness < 48) {
        pixels[i] = 0; pixels[i + 1] = 20; pixels[i + 2] = 200;
      } else if (brightness < 56) {
        pixels[i] = 0; pixels[i + 1] = 60; pixels[i + 2] = 230;  // Helles Blau
      } else if (brightness < 64) {
        pixels[i] = 0; pixels[i + 1] = 100; pixels[i + 2] = 255;
      } else if (brightness < 72) {
        pixels[i] = 0; pixels[i + 1] = 140; pixels[i + 2] = 255;
      } else if (brightness < 80) {
        pixels[i] = 0; pixels[i + 1] = 180; pixels[i + 2] = 255; // Türkis
      } else if (brightness < 88) {
        pixels[i] = 0; pixels[i + 1] = 210; pixels[i + 2] = 180;
      } else if (brightness < 96) {
        pixels[i] = 0; pixels[i + 1] = 240; pixels[i + 2] = 120;
      } else if (brightness < 104) {
        pixels[i] = 0; pixels[i + 1] = 255; pixels[i + 2] = 0;  // Grün
      } else if (brightness < 112) {
        pixels[i] = 50; pixels[i + 1] = 255; pixels[i + 2] = 0;
      } else if (brightness < 120) {
        pixels[i] = 100; pixels[i + 1] = 255; pixels[i + 2] = 0;
      } else if (brightness < 128) {
        pixels[i] = 150; pixels[i + 1] = 255; pixels[i + 2] = 0;
      } else if (brightness < 136) {
        pixels[i] = 200; pixels[i + 1] = 255; pixels[i + 2] = 0; // Gelb-Grün
      } else if (brightness < 144) {
        pixels[i] = 240; pixels[i + 1] = 240; pixels[i + 2] = 0;
      } else if (brightness < 152) {
        pixels[i] = 255; pixels[i + 1] = 220; pixels[i + 2] = 0; // Gelb
      } else if (brightness < 160) {
        pixels[i] = 255; pixels[i + 1] = 200; pixels[i + 2] = 0;
      } else if (brightness < 168) {
        pixels[i] = 255; pixels[i + 1] = 180; pixels[i + 2] = 0;
      } else if (brightness < 176) {
        pixels[i] = 255; pixels[i + 1] = 160; pixels[i + 2] = 0;
      } else if (brightness < 184) {
        pixels[i] = 255; pixels[i + 1] = 140; pixels[i + 2] = 0;
      } else if (brightness < 192) {
        pixels[i] = 255; pixels[i + 1] = 120; pixels[i + 2] = 0; // Helles Orange
      } else if (brightness < 200) {
        pixels[i] = 255; pixels[i + 1] = 100; pixels[i + 2] = 0;
      } else if (brightness < 208) {
        pixels[i] = 255; pixels[i + 1] = 80; pixels[i + 2] = 0;
      } else if (brightness < 216) {
        pixels[i] = 255; pixels[i + 1] = 60; pixels[i + 2] = 0;
      } else if (brightness < 224) {
        pixels[i] = 255; pixels[i + 1] = 40; pixels[i + 2] = 0;
      } else if (brightness < 232) {
        pixels[i] = 255; pixels[i + 1] = 20; pixels[i + 2] = 0;
      } else if (brightness < 240) {
        pixels[i] = 255; pixels[i + 1] = 0; pixels[i + 2] = 0; // Tiefrot (Überbelichtung)
      } else {
        pixels[i] = 180; pixels[i + 1] = 0; pixels[i + 2] = 0;  // Extrem überbelichtet → Dunkelrot
      }
  
    
      
    }
    ctx.putImageData(imageData, 0, 0);
  }

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="fixed top-10 right-10 p-3 bg-red-500 text-white rounded"
    >
      Toggle False Color
    </button>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FRAMES = [
  "/images/seasons/2026/landing/apply/default_flame.png",
  "/images/seasons/2026/landing/apply/dancing_flame.png",
  "/images/seasons/2026/landing/apply/sitting_flame.png",
];

const MESSAGES = [
  "Transmitting to mission control...",
  "Preparing for lift off...",
  "Finalizing your application...",
];

export default function FlameLoading() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % FRAMES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flame-loading-wrapper">
      <div className="flame-frame">
        {FRAMES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="flame"
            width={120}
            height={120}
            className={`flame-img ${i === frame ? "visible" : "hidden"}`}
          />
        ))}
      </div>
      <p className="loading-message">{MESSAGES[frame]}</p>
      <div className="dots">
        <span />
        <span />
        <span />
      </div>

      <style jsx>{`
        .flame-loading-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 8px 0;
        }
        .flame-frame {
          position: relative;
          width: 120px;
          height: 120px;
          filter: drop-shadow(0 0 16px rgba(255, 190, 106, 0.95));
          animation: bob 2s ease-in-out infinite;
        }
        .flame-img {
          position: absolute;
          top: 0;
          left: 0;
          transition: opacity 0.15s ease;
        }
        .flame-img.visible {
          opacity: 1;
        }
        .flame-img.hidden {
          opacity: 0;
        }
        @keyframes bob {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .loading-message {
          font-size: 13px;
          letter-spacing: 0.06em;
          color: rgba(200, 180, 255, 0.8);
          min-height: 20px;
          text-align: center;
        }
        .dots {
          display: flex;
          gap: 5px;
        }
        .dots span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(160, 120, 255, 0.6);
          animation: pulse 1.2s ease-in-out infinite;
        }
        .dots span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dots span:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(0.7);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

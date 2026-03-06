"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MESSAGES = [
  "I wonder what I'll find...",
  "Every object has a story.",
  "A signal worth chasing.",
  "Another quiet mystery.",
  "Lost… but not forever.",
  "Something feels familiar...",
];

export default function FlameWidget() {
  const [idx, setIdx] = useState(0);
  const [state, setState] = useState<"hidden" | "visible" | "hiding">("hidden");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Initial show
    const t = setTimeout(() => setState("visible"), 300);

    // Cycle every 10s
    intervalRef.current = setInterval(() => {
      setState("hiding");
      setTimeout(() => {
        setIdx((i) => (i + 1) % MESSAGES.length);
        setState("hidden");
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setState("visible")),
        );
      }, 500);
    }, 10000);

    return () => {
      clearTimeout(t);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const bubbleStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.95)",
    borderRadius: 18,
    padding: "10px 16px",
    maxWidth: 200,
    fontFamily: "'Nunito', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: "#1a1040",
    lineHeight: 1.45,
    boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
    position: "relative",
    opacity: state === "visible" ? 1 : 0,
    transform:
      state === "visible"
        ? "translateY(0) scale(1)"
        : state === "hiding"
          ? "translateY(-6px) scale(0.95)"
          : "translateY(6px) scale(0.95)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  };

  return (
    <>
      <style>{`
        @keyframes planetFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes alienBob {
          0%,100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
          25%     { transform: translateX(-50%) translateY(-6px) rotate(-1.5deg); }
          75%     { transform: translateX(-50%) translateY(-3px) rotate(1deg); }
        }
        @media (max-width: 640px) {
            .flame-widget {
                transform: scale(0.65);
                bottom: -70px !important;
                right: 0px !important;
            }
        }
      `}</style>

      {/* Fixed bottom-right scene */}
      <div
        className="flame-widget"
        style={{
          position: "fixed",
          bottom: -50,
          right: -30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 220,
          zIndex: 50,
        }}
      >
        {/* Speech bubble */}
        <div
          style={{
            position: "relative",
            alignSelf: "center",
            marginLeft: -60,
            marginBottom: 60,
          }}
        >
          <div style={bubbleStyle}>{MESSAGES[idx]}</div>
          {/* Dot trail */}
          <div
            style={{
              position: "absolute",
              bottom: -24,
              right: 28,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "center",
            }}
          >
            <span
              style={{
                display: "block",
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.7)",
              }}
            />
            <span
              style={{
                display: "block",
                width: 3.5,
                height: 3.5,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.7)",
                opacity: 0.7,
              }}
            />
            <span
              style={{
                display: "block",
                width: 2,
                height: 2,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.7)",
                opacity: 0.4,
              }}
            />
          </div>
        </div>

        {/* Planet + Alien stack */}
        <div style={{ position: "relative", width: 210, height: 210 }}>
          {/* Planet */}
          <div
            style={{
              width: 210,
              height: 210,
              animation: "planetFloat 7s ease-in-out infinite",
              filter:
                "drop-shadow(0 0 30px rgba(255,160,100,0.4)) drop-shadow(0 0 60px rgba(220,100,80,0.2))",
            }}
          >
            <Image
              src="/images/seasons/2026/landing/judges/planets/1.png"
              alt="planet"
              width={210}
              height={210}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>

          {/* Alien on top edge */}
          <Image
            src="/images/seasons/2026/landing/apply/sitting_flame.png"
            alt="alien"
            width={105}
            height={105}
            style={{
              position: "absolute",
              bottom: 148,
              left: "50%",
              width: 105,
              height: "auto",
              animation: "alienBob 7s ease-in-out infinite",
              transformOrigin: "bottom center",
              filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.6))",
            }}
          />
        </div>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RocketSuccess() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.push("/"), 8000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <div className="rocket-wrapper">
      {[...Array(12)].map((_, i) => (
        <div key={i} className={`star star-${i}`} />
      ))}

      <div className="rocket">
        <Image
          src="/images/seasons/2026/landing/apply/rocket.png"
          alt="rocket"
          width={150}
          height={150}
        />
      </div>

      <div className="smoke smoke-1" />
      <div className="smoke smoke-2" />
      <div className="smoke smoke-3" />
      <div className="smoke smoke-4" />
      <div className="smoke smoke-5" />
      <div className="smoke smoke-6" />
      <div className="smoke smoke-7" />

      <div className="text-block">
        <p className="success-text">Application Sent!</p>
        <p className="sub-text">We&apos;ll be in touch soon.</p>
        <p className="redirect-text">Redirecting you home…</p>
      </div>

      <style jsx>{`
        .rocket-wrapper {
          position: relative;
          height: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* ── Rocket ── */
        .rocket {
          font-size: 72px;
          animation: launch 3.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          filter: drop-shadow(0 0 22px rgba(180, 120, 255, 0.75));
          position: relative;
          z-index: 2;
        }

        @keyframes launch {
          0% {
            transform: translateY(60px) scale(0.8);
            opacity: 0;
          }
          12% {
            transform: translateY(40px) scale(1);
            opacity: 1;
          }
          55% {
            transform: translateY(-80px) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translateY(-340px) scale(1.1);
            opacity: 0;
          }
        }

        /* ── Smoke puffs ── */
        .smoke {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.95),
            rgba(200, 160, 255, 0.6),
            rgba(140, 80, 255, 0.2)
          );
          filter: blur(6px);
          animation: smokeRise 3.2s ease-out forwards;
        }

        .smoke-1 {
          width: 36px;
          height: 36px;
          bottom: 45%;
          left: 44%;
          animation-delay: 0.1s;
        }
        .smoke-2 {
          width: 44px;
          height: 44px;
          bottom: 43%;
          left: 48%;
          animation-delay: 0.3s;
        }
        .smoke-3 {
          width: 30px;
          height: 30px;
          bottom: 44%;
          left: 40%;
          animation-delay: 0.5s;
        }
        .smoke-4 {
          width: 38px;
          height: 38px;
          bottom: 42%;
          left: 52%;
          animation-delay: 0.7s;
        }
        .smoke-5 {
          width: 28px;
          height: 28px;
          bottom: 46%;
          left: 46%;
          animation-delay: 0.9s;
        }
        .smoke-6 {
          width: 42px;
          height: 42px;
          bottom: 44%;
          left: 50%;
          animation-delay: 1.1s;
        }
        .smoke-7 {
          width: 32px;
          height: 32px;
          bottom: 43%;
          left: 42%;
          animation-delay: 1.3s;
        }

        @keyframes smokeRise {
          0% {
            transform: translateY(0) scale(0.4);
            opacity: 1;
          }
          40% {
            transform: translateY(50px) scale(1.8);
            opacity: 0.7;
          }
          100% {
            transform: translateY(110px) scale(3.5);
            opacity: 0;
          }
        }

        /* ── Stars ── */
        .star {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: white;
          opacity: 0;
          animation: starPop 0.6s ease forwards;
        }

        .star-0 {
          top: 20%;
          left: 15%;
          animation-delay: 1.2s;
        }
        .star-1 {
          top: 10%;
          left: 40%;
          animation-delay: 1.4s;
        }
        .star-2 {
          top: 15%;
          left: 70%;
          animation-delay: 1.3s;
        }
        .star-3 {
          top: 35%;
          left: 85%;
          animation-delay: 1.5s;
        }
        .star-4 {
          top: 60%;
          left: 80%;
          animation-delay: 1.6s;
        }
        .star-5 {
          top: 75%;
          left: 65%;
          animation-delay: 1.4s;
        }
        .star-6 {
          top: 80%;
          left: 30%;
          animation-delay: 1.7s;
        }
        .star-7 {
          top: 65%;
          left: 10%;
          animation-delay: 1.5s;
        }
        .star-8 {
          top: 40%;
          left: 5%;
          animation-delay: 1.3s;
        }
        .star-9 {
          top: 5%;
          left: 55%;
          animation-delay: 1.8s;
        }
        .star-10 {
          top: 25%;
          left: 90%;
          animation-delay: 1.4s;
        }
        .star-11 {
          top: 50%;
          left: 95%;
          animation-delay: 1.6s;
        }

        @keyframes starPop {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          60% {
            transform: scale(1.8);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }

        /* ── Text block ── */
        .text-block {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-align: center;
        }

        .success-text {
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: white;
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
          animation-delay: 2.8s;
          text-shadow:
            0 0 10px rgba(200, 140, 255, 0.8),
            0 0 28px rgba(160, 90, 255, 0.6);
        }

        .sub-text {
          font-size: 13px;
          letter-spacing: 0.08em;
          color: rgb(200, 180, 255);
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
          animation-delay: 3.1s;
        }

        .redirect-text {
          font-size: 11px;
          letter-spacing: 0.06em;
          color: rgb(200, 180, 255);
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
          animation-delay: 3.5s;
        }

        @keyframes fadeUp {
          0% {
            transform: translateY(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

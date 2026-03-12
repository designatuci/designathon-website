import { useState } from "react";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#3B6FE8" fillOpacity="0.25" />
    <path
      d="M4.5 8L7 10.5L11.5 6"
      stroke="#6B9FFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Card() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          borderRadius: "20px",
          padding: "28px",
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: hovered
            ? "0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(80,120,255,0.15), inset 0 1px 0 rgba(255,255,255,0.15)"
            : "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
          cursor: "default",
          overflow: "hidden",
        }}
      >
        {/* Glow blob */}
        <div
          style={{
            position: "absolute",
            top: "-30px",
            right: "-20px",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(60,100,255,0.35) 0%, rgba(100,60,255,0.15) 50%, transparent 70%)",
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "-30px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,200,180,0.15) 0%, transparent 70%)",
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
        />

        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "8px",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <polygon
                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                stroke="#8BAEFF"
                strokeWidth="1.5"
                fill="rgba(139,174,255,0.2)"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Badge */}
          <span
            style={{
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#8BAEFF",
              background: "rgba(80,120,255,0.15)",
              border: "1px solid rgba(80,120,255,0.3)",
              borderRadius: "20px",
              padding: "4px 10px",
            }}
          >
            Elite Level
          </span>
        </div>

        {/* Plan name */}
        <h2
          style={{
            margin: "12px 0 4px",
            fontSize: "22px",
            fontWeight: "700",
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          Elite
        </h2>

        {/* Tagline */}
        <p
          style={{
            margin: "0 0 20px",
            fontSize: "12px",
            color: "rgba(255,255,255,0.45)",
            lineHeight: "1.5",
            fontWeight: "400",
          }}
        >
          Exclusive staking options to level up your trading strategy
        </p>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.07)",
            marginBottom: "18px",
          }}
        />

        {/* Features */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 24px",
            display: "flex",
            flexDirection: "column",
            gap: "11px",
          }}
        >
          {[
            "500 Validator Tokens",
            "500GB storage charge",
            "VIP access to AI strategies",
            "Early project listings",
            "Private member discussions",
          ].map((feature, i) => (
            <li
              key={i}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <CheckIcon />
              <span
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.72)",
                  fontWeight: "400",
                }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

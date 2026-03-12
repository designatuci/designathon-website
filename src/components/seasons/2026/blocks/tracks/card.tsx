import { useState } from "react";
import "./card.css";

// ─── Types ────────────────────────────────────────────────────────────────────

export type TrackVariant = "glass" | "featured";

export interface HackathonTrack {
  name: string;
  tagline: string;
  badge: string;
  prize: string;
  perks: string[];
  /** Inline SVG string rendered inside the icon box */
  icon: string;
  variant?: TrackVariant;
}

export type AwardVariant = "peoples-choice" | "most-novel";

export interface Award {
  name: string;
  description: string;
  prize: string;
  variant: AwardVariant;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function CheckIcon({ featured }: { featured: boolean }) {
  return (
    <svg
      className={`check-icon ${featured ? "check-icon--featured" : ""}`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="8" className="check-circle" />
      <path
        d="M4.5 8L7 10.5L11.5 6"
        className="check-path"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── TrackCard ────────────────────────────────────────────────────────────────

export function TrackCard({ track }: { track: HackathonTrack }) {
  const [hovered, setHovered] = useState(false);
  const isFeatured = track.variant === "featured";

  return (
    <div
      className={`track-card track-card--${track.variant ?? "glass"} ${hovered ? "track-card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="blob blob--top" />
      <div className="blob blob--bottom" />

      <div className="card-header">
        <div
          className="icon-box"
          dangerouslySetInnerHTML={{ __html: track.icon }}
        />
        <span className={`badge ${isFeatured ? "badge--featured" : ""}`}>
          {track.badge}
        </span>
      </div>

      <h2 className="track-name">{track.name}</h2>
      <p
        className={`track-tagline ${isFeatured ? "track-tagline--featured" : ""}`}
      >
        {track.tagline}
      </p>

      <div className="divider" />

      <ul className="perks">
        {track.perks.map((perk, i) => (
          <li key={i} className={`perk ${isFeatured ? "perk--featured" : ""}`}>
            <CheckIcon featured={isFeatured} />
            {perk}
          </li>
        ))}
      </ul>

      <div className="prize-row">
        <span className="prize-amount">{track.prize}</span>
        <span
          className={`prize-label ${isFeatured ? "prize-label--featured" : ""}`}
        >
          in prizes
        </span>
      </div>
    </div>
  );
}

// ─── TrackCardGrid ────────────────────────────────────────────────────────────

export function TrackCardGrid({ tracks }: { tracks: HackathonTrack[] }) {
  return (
    <div className="track-grid">
      {tracks.map((track, i) => (
        <TrackCard key={i} track={track} />
      ))}
    </div>
  );
}

// ─── AwardCard ────────────────────────────────────────────────────────────────

export function AwardCard({ award }: { award: Award }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`award-card award-card--${award.variant} ${hovered ? "award-card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="award-blob award-blob--top" />
      <div className="award-blob award-blob--bottom" />

      <div className="award-icon-wrap">
        {award.variant === "peoples-choice" ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              className="award-icon-path"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
              className="award-icon-path"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      <h2 className="award-name">{award.name}</h2>
      <p className="award-description">{award.description}</p>

      <div className="award-divider" />

      <div className="award-prize-row">
        <span className="award-prize-amount">{award.prize}</span>
        <span className="award-prize-label">award</span>
      </div>
    </div>
  );
}

// ─── AwardCardGrid ────────────────────────────────────────────────────────────

export function AwardCardGrid({ awards }: { awards: Award[] }) {
  return (
    <div className="award-grid">
      {awards.map((award, i) => (
        <AwardCard key={i} award={award} />
      ))}
    </div>
  );
}

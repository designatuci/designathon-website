"use client";

import Link from "next/link";

const footerLinks = [
  { name: "Instagram", href: "https://www.instagram.com/ucidesignathon/" },
  { name: "Discord", href: "https://discord.com/invite/MBVrKe9" },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC3LqXqBN-R7C91ttlyXHhIQ",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/design-at-uci" },
  { name: "Facebook", href: "https://www.facebook.com/designatuci/" },
  { name: "TikTok", href: "https://www.tiktok.com/@design_at_uci" },
];

function Footer() {
  return (
    <section className="absolute right-0 bottom-0 left-0">
      <div className="flex flex-col items-center gap-4 p-6 md:flex-row md:items-center md:justify-between md:gap-0 md:p-16">
        <Link
          href="https://designatuci.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[clamp(0.75rem,2vw,1.5rem)] font-medium text-white transition-colors hover:text-white/90"
        >
          © 2026 Design at UCI
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-3 md:gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[clamp(0.75rem,2vw,1.5rem)] font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default Footer;

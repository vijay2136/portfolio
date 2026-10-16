import React from "react";
import { greeting, navLinks, terminal, socialMediaLinks } from "../portfolio";

const legendShades = ["#1c1a16", "#0e4429", "#006d32", "#26a641", "#39d353"];

export default function Hero() {
  return (
    <header className="band--dark hero">
      <div className="spider" id="spiderTrigger" aria-hidden="true">
        <div className="thread" />
        <svg
          viewBox="0 0 48 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <path d="M22 20 L12 14 L6 18" />
          <path d="M22 22 L10 22 L5 26" />
          <path d="M22 24 L11 28 L7 33" />
          <path d="M22 26 L14 32 L11 37" />
          <path d="M26 20 L36 14 L42 18" />
          <path d="M26 22 L38 22 L43 26" />
          <path d="M26 24 L37 28 L41 33" />
          <path d="M26 26 L34 32 L37 37" />
          <circle cx="24" cy="15" r="3.6" fill="currentColor" stroke="none" />
          <ellipse
            cx="24"
            cy="25"
            rx="6"
            ry="8"
            fill="currentColor"
            stroke="none"
          />
          <circle cx="22.4" cy="14.4" r="1" fill="#15120e" stroke="none" />
          <circle cx="25.6" cy="14.4" r="1" fill="#15120e" stroke="none" />
        </svg>
      </div>

      <nav className="nav">
        <div className="wrap">
          <a className="brand" href="#top">
            <span className="monogram">{greeting.monogram}</span>
            <span className="brand-name">{greeting.name}</span>
          </a>
          <div className="nav-links">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={[l.cta ? "nav-cta" : "", l.hideSm ? "hide-sm" : ""]
                  .join(" ")
                  .trim()}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="wrap">
        <div className="hero-grid" id="top">
          <div>
            <span className="pill">
              <span className="dot" /> {greeting.pill}
            </span>
            <h1>
              {greeting.headline} <em>{greeting.emphasis}</em>.
            </h1>
            <p className="hero-sub">{greeting.subTitle}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#contact">
                Contact me ↓
              </a>
              <a
                className="btn btn-ghost"
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </a>
              <a
                className="btn btn-ghost"
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé ↗
              </a>
            </div>
          </div>

          <div className="term" aria-hidden="true">
            <div className="term-bar">
              <span className="tl" style={{ background: "#ff5f57" }} />
              <span className="tl" style={{ background: "#febc2e" }} />
              <span className="tl" style={{ background: "#28c840" }} />
              <span className="term-title">{terminal.title}</span>
            </div>
            <div className="term-body">
              {terminal.lines.map((ln, i) =>
                ln.cmd ? (
                  <div className="ln" key={i}>
                    <span className="pr">{ln.prompt}</span>{" "}
                    <span className="cmd">{ln.cmd}</span>
                  </div>
                ) : (
                  <div className="ln" key={i}>
                    <span className="ar">{ln.arrow}</span>{" "}
                    <span className="out">{ln.out}</span>
                  </div>
                )
              )}
              <div className="contrib">
                <div className="contrib-label">
                  <span>contribution activity</span>
                  <span>last 6 months</span>
                </div>
                <div className="grid" id="grid" />
                <div className="legend">
                  less
                  {legendShades.map(c => (
                    <i key={c} style={{ background: c }} />
                  ))}
                  more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

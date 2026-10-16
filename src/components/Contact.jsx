import React from "react";
import { contactInfo, socialMediaLinks, greeting } from "../portfolio";

export default function Contact() {
  return (
    <section className="band--dark contact" id="contact">
      <div className="wrap">
        <p className="eyebrow">Contact</p>
        <h2>{contactInfo.title}</h2>
        <p className="sub">{contactInfo.subtitle}</p>

        <div className="cta-row" style={{ marginTop: "24px" }}>
          <a className="btn btn-primary" href={`mailto:${contactInfo.email}`}>
            Email me ↗
          </a>
          <a
            className="btn btn-ghost"
            id="calLink"
            href={contactInfo.calendarLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a 1:1 ↗
          </a>
        </div>

        <button className="mailchip" id="copyEmail" type="button">
          {contactInfo.email} <span className="ci">copy</span>
        </button>

        <div className="socials">
          <a
            className="soc"
            href={socialMediaLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
            </svg>
          </a>
          <a
            className="soc"
            href={socialMediaLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
            </svg>
          </a>
          <a
            className="soc"
            href={`mailto:${contactInfo.email}`}
            aria-label="Email"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2.5" />
              <path d="M3 6.5l9 6 9-6" />
            </svg>
          </a>
        </div>
      </div>

      <footer>
        <div className="wrap foot">
          <span>© 2026 {greeting.name}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </section>
  );
}

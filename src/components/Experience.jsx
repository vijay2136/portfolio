import React from "react";
import { workExperiences } from "../portfolio";

export default function Experience() {
  return (
    <section className="band" id="experience">
      <div className="wrap">
        <div className="band-head">
          <p className="eyebrow">Experience</p>
          <h2 className="lede">{workExperiences.lede}</h2>
        </div>

        {workExperiences.experience.map(job => (
          <div className="row" key={job.company}>
            <div className="row-date">
              {job.present ? (
                <>
                  {job.date} — <span className="now">Present</span>
                </>
              ) : (
                job.date
              )}
            </div>
            <div>
              <div className="role-line">
                <span className="logo">
                  <img src={job.logo} alt={job.company} />
                </span>
                <span className="role">
                  {job.role} ·{" "}
                  <a
                    className="company"
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.company} ↗
                  </a>
                </span>
              </div>
              <ul className="bullets">
                {job.bullets.map((b, i) => (
                  <li key={i} className={b.hl ? "hl" : undefined}>
                    {b.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

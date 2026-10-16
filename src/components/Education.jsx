import React from "react";
import { educationInfo } from "../portfolio";

export default function Education() {
  return (
    <section className="band" id="education">
      <div className="wrap">
        <div className="band-head">
          <p className="eyebrow">Education</p>
          <h2 className="lede">Foundations.</h2>
        </div>
        {educationInfo.schools.map(s => (
          <div className="row edu-row" key={s.school}>
            <div className="row-date">{s.date}</div>
            <div>
              <div className="school">{s.school}</div>
              <div className="school-sub">{s.subHeader}</div>
            </div>
            <div className="grade">{s.grade}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

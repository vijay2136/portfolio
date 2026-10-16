import React from "react";
import { skillsSection } from "../portfolio";

export default function Skills() {
  return (
    <section className="band" id="work">
      <div className="wrap">
        <div className="band-head">
          <p className="eyebrow">{skillsSection.title}</p>
          <h2 className="lede">{skillsSection.lede}</h2>
          <p className="lede-note">{skillsSection.note}</p>
        </div>

        <div className="groups">
          {skillsSection.groups.map(g => (
            <div className="group" key={g.index}>
              <div className="group-label">
                <b>{g.index}</b> / {g.label}
              </div>
              <div className="chips">
                {g.chips.map(c => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="principles">
          {skillsSection.principles.map(p => (
            <div className="principle" key={p.title}>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

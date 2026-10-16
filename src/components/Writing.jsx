import React from "react";
import { writingSection } from "../portfolio";

export default function Writing() {
  return (
    <section className="band" id="writing">
      <div className="wrap">
        <div className="band-head">
          <p className="eyebrow">Writing &amp; research</p>
          <h2 className="lede">{writingSection.lede}</h2>
        </div>
        <div className="writing">
          {writingSection.items.map(item => (
            <a
              className="wcard"
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="wtag">{item.tag}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <span className="go">{item.cta}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

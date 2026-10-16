import React from "react";

// The web-swing easter-egg overlay. Markup only — the animation is driven from Main's effect.
export default function SpideyStage() {
  return (
    <div className="spidey-stage" id="spideyStage" hidden>
      <div className="webline" id="webline" />
      <svg
        className="spidey"
        id="spidey"
        viewBox="0 0 120 190"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path
          d="M50 84 C 36 86 24 92 14 102"
          stroke="#161616"
          strokeWidth="12"
        />
        <circle cx="13" cy="103" r="7.5" fill="#161616" />
        <path
          d="M66 78 C 66 54 62 30 60 12"
          stroke="#161616"
          strokeWidth="12"
        />
        <circle cx="60" cy="10" r="7.5" fill="#161616" />
        <path
          d="M52 112 C 48 128 40 138 44 152"
          stroke="#161616"
          strokeWidth="13"
        />
        <path
          d="M68 112 C 76 126 80 140 72 152"
          stroke="#161616"
          strokeWidth="13"
        />
        <path d="M44 152 L40 165" stroke="#161616" strokeWidth="13" />
        <path d="M72 152 L76 165" stroke="#161616" strokeWidth="13" />
        <path
          d="M48 103 Q60 109 72 103 L70 117 Q60 123 50 117 Z"
          fill="#161616"
        />
        <path d="M46 74 Q60 70 74 74 L71 106 Q60 112 49 106 Z" fill="#161616" />
        <path
          d="M60 74 V106 M50 82 Q60 86 70 82 M49 94 Q60 98 71 94"
          stroke="#e51d2a"
          strokeWidth="1"
        />
        <path
          d="M60 83 l-6 8 m6 -8 l6 8 m-6 -1 l-8 9 m8 -9 l8 9 m-8 2 l-6 10 m6 -10 l6 10"
          stroke="#e51d2a"
          strokeWidth="1.7"
        />
        <path
          d="M44 60 Q42 44 60 42 Q78 44 76 60 Q76 72 60 74 Q44 72 44 60 Z"
          fill="#161616"
        />
        <path
          d="M60 44 V74 M47 54 Q60 59 73 54 M46 65 Q60 70 74 65"
          stroke="#e51d2a"
          strokeWidth="1"
        />
        <path
          d="M52 56 Q46 52 44 59 Q46 64 53 62 Q56 59 52 56 Z"
          fill="#fff"
          stroke="#e51d2a"
          strokeWidth="1.7"
        />
        <path
          d="M68 56 Q74 52 76 59 Q74 64 67 62 Q64 59 68 56 Z"
          fill="#fff"
          stroke="#e51d2a"
          strokeWidth="1.7"
        />
      </svg>
    </div>
  );
}

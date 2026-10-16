import React, { useEffect } from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import Experience from "./Experience";
import Writing from "./Writing";
import Education from "./Education";
import Contact from "./Contact";
import SpideyStage from "./SpideyStage";
import { contactInfo } from "../portfolio";

export default function Main() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const cleanups = [];

    // contribution heatmap — deterministic pseudo-random so it looks real
    const grid = document.getElementById("grid");
    if (grid) {
      const cells = 26 * 7;
      let seed = 7;
      const rnd = () => {
        seed = (seed * 1103515245 + 12345) & 0x7fffffff;
        return seed / 0x7fffffff;
      };
      let html = "";
      for (let i = 0; i < cells; i++) {
        const r = rnd();
        let cls = "";
        if (r > 0.86) cls = "l4";
        else if (r > 0.68) cls = "l3";
        else if (r > 0.46) cls = "l2";
        else if (r > 0.24) cls = "l1";
        const delay = reduce
          ? 0
          : (0.15 + (i % 26) * 0.012 + Math.floor(i / 26) * 0.02).toFixed(3);
        html +=
          '<span class="' +
          cls +
          '" style="animation-delay:' +
          delay +
          's"></span>';
      }
      grid.innerHTML = html;
    }

    // scroll progress bar
    const bar = document.getElementById("progress");
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (bar)
        bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // reveal-on-scroll for section content (hero excluded)
    const panels = Array.prototype.slice.call(
      document.querySelectorAll("section.band > .wrap, .contact > .wrap")
    );
    if ("IntersectionObserver" in window && !reduce) {
      panels.forEach(p => p.classList.add("reveal"));
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
      );
      panels.forEach(p => io.observe(p));
      cleanups.push(() => io.disconnect());
    }

    // scrollspy — highlight the active nav link
    const links = Array.prototype.slice.call(
      document.querySelectorAll(".nav-links a[href^='#']")
    );
    const map = {};
    links.forEach(a => {
      const id = a.getAttribute("href").slice(1);
      if (id) map[id] = a;
    });
    const targets = Object.keys(map)
      .map(id => document.getElementById(id))
      .filter(Boolean);
    if ("IntersectionObserver" in window && targets.length) {
      const spy = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              links.forEach(l => l.classList.remove("active"));
              if (map[e.target.id]) map[e.target.id].classList.add("active");
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      targets.forEach(t => spy.observe(t));
      cleanups.push(() => spy.disconnect());
    }

    // Spider-Man web-swing easter egg — one click = one left→right→left cycle
    const trigger = document.getElementById("spiderTrigger");
    const stage = document.getElementById("spideyStage");
    const web = document.getElementById("webline");
    const sp = document.getElementById("spidey");
    let busy = false;
    const launchSpidey = () => {
      if (busy || !stage || !web || !sp) return;
      busy = true;
      stage.hidden = false;
      const W = window.innerWidth;
      const H = window.innerHeight;
      const ax = W / 2;
      const ay = -24;
      const off = 170;
      const xL = -off;
      const xR = W + off;
      const yTop = H * 0.18;
      const yDip = H - 140;
      const dur = 5200;
      let t0 = null;
      const frame = now => {
        if (t0 === null) t0 = now;
        const p = (now - t0) / dur;
        if (p >= 1) {
          stage.hidden = true;
          sp.style.opacity = web.style.opacity = "";
          busy = false;
          return;
        }
        const ph = 2 * Math.PI * p;
        const hx = (1 - Math.cos(ph)) / 2;
        const x = xL + (xR - xL) * hx;
        const swing = Math.pow(Math.abs(Math.sin(ph)), 1.18);
        const topH = yTop + H * 0.09 * hx;
        const y = topH + (yDip - topH) * swing;
        const dx = x - ax;
        const dy = y - ay;
        const len = Math.hypot(dx, dy);
        const angDeg = (Math.atan2(dx, dy) * 180) / Math.PI;
        const movingRight = Math.sin(ph) > 0;
        const lean = -angDeg * 0.5 + (movingRight ? -7 : 7);
        const fade =
          p < 0.05
            ? p / 0.05
            : p > 0.95
            ? Math.max(0, 1 - (p - 0.95) / 0.05)
            : 1;
        web.style.height = len + "px";
        web.style.transform = "translateX(-1px) rotate(" + -angDeg + "deg)";
        web.style.opacity = fade;
        sp.style.opacity = fade;
        sp.style.transform =
          "translate(" +
          (x - 60) +
          "px," +
          (y - 6) +
          "px) rotate(" +
          lean +
          "deg)";
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };
    if (trigger) {
      trigger.addEventListener("click", launchSpidey);
      cleanups.push(() => trigger.removeEventListener("click", launchSpidey));
    }

    // click-to-copy email
    const copy = document.getElementById("copyEmail");
    if (copy) {
      const ci = copy.querySelector(".ci");
      const onCopy = () => {
        const done = t => {
          if (ci) {
            ci.textContent = t;
            setTimeout(() => {
              ci.textContent = "copy";
            }, 1500);
          }
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard
            .writeText(contactInfo.email)
            .then(() => done("copied ✓"))
            .catch(() => done("⌘C to copy"));
        } else {
          done("⌘C to copy");
        }
      };
      copy.addEventListener("click", onCopy);
      cleanups.push(() => copy.removeEventListener("click", onCopy));
    }

    return () => cleanups.forEach(fn => fn());
  }, []);

  return (
    <>
      <div className="progress" id="progress" />
      <Hero />
      <Skills />
      <Experience />
      <Writing />
      <Education />
      <Contact />
      <SpideyStage />
    </>
  );
}

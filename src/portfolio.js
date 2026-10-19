import bigbinaryLogo from "./assets/images/bigbinary-logo.png";
import neetoLogo from "./assets/images/neeto-logo.png";
import mercerLogo from "./assets/images/mercer-logo.png";

const greeting = {
  name: "Vijay Vinod",
  monogram: "VV",
  pill: "Senior Software Engineer · open to work",
  // headline is rendered with the word in `emphasis` highlighted in the accent colour
  headline: "I build software that helps teams move with",
  emphasis: "confidence",
  subTitle:
    "Full-stack developer working with React and Ruby on Rails, currently building AI-powered features for an enterprise platform.",
  resumeLink:
    "https://docs.google.com/document/d/1PquS2yWNGnqIzbb98GaUU29q0da1_cxI2jgkuubbpog/view",
};

const socialMediaLinks = {
  github: "https://github.com/vijay2136/",
  linkedin: "https://www.linkedin.com/in/vijay-vinod",
  gmail: "imvijay2136@gmail.com",
};

const terminal = {
  title: "vijay@portfolio — zsh",
  lines: [
    { prompt: "$", cmd: "whoami" },
    { arrow: "→", out: "senior software engineer @ mercer talent enterprise" },
    { prompt: "$", cmd: "focus --now" },
    { arrow: "→", out: "ai features · assessments · ai interviewer" },
    { prompt: "$", cmd: "gh contributions --last-year" },
  ],
};

const navLinks = [
  { label: "What I do", href: "#work", hideSm: true },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing", hideSm: true },
  { label: "Get in touch", href: "#contact", cta: true },
];

const skillsSection = {
  title: "What I do",
  lede: "A full-stack engineering toolbox.",
  note: "From the interface a user touches to the services, data and AI models behind it.",
  groups: [
    {
      index: "01",
      label: "Frontend",
      chips: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Sass",
      ],
    },
    {
      index: "02",
      label: "Backend & data",
      chips: ["Ruby on Rails", "Python", "PostgreSQL", "Redis"],
    },
    {
      index: "03",
      label: "AI & cloud",
      chips: ["AWS", "Azure", "OCI", "STT", "TTS", "Agentic workflows"],
    },
    {
      index: "04",
      label: "Quality & delivery",
      chips: ["RSpec", "Jest", "GitHub Actions", "CI/CD"],
    },
  ],
  principles: [
    {
      title: "Clean by default",
      desc: "Organized, maintainable code that keeps software healthy for the long run.",
    },
    {
      title: "Interfaces that disappear",
      desc: "Minimalist, user-friendly UI that makes products feel effortless.",
    },
    {
      title: "Ships fast",
      desc: "Comfortable moving quickly in a fast-paced development environment.",
    },
  ],
};

const workExperiences = {
  lede: "Working across the product surface.",
  experience: [
    {
      date: "Jun 2026",
      present: true,
      role: "Senior Software Engineer",
      company: "Mercer Talent Enterprise",
      companyUrl: "https://www.thetalententerprise.com/",
      logo: mercerLogo,
      bullets: [
        {
          text: "Building AI features for interactive assessments and AI interviewers.",
          hl: true,
        },
        {
          text: "Led client scoping and migrated the tenancy model across millions of records.",
        },
        { text: "Carried out a major Ruby on Rails upgrade for the platform." },
        { text: "Implemented geo-restriction across the platform." },
        {
          text: "Keep the legacy codebase healthy by refactoring and optimizing it as I go.",
        },
      ],
    },
    {
      date: "2021 — Jun 2026",
      role: "Software Developer",
      company: "neeto",
      companyUrl: "https://neeto.com",
      logo: neetoLogo,
      bullets: [
        {
          text: "Collaborated on internal products including neetoCal, neetoKB and neetoInvoice.",
        },
        {
          text: "Designed and built reusable UI components for the neetoUI library, used across every neeto product.",
        },
        { text: "Took on the Team Lead role for neetoCal." },
        { text: "Reviewed code and managed projects." },
      ],
    },
    {
      date: "2021 — Jun 2026",
      role: "Software Developer",
      company: "BigBinary",
      companyUrl: "https://www.bigbinary.com/",
      logo: bigbinaryLogo,
      bullets: [
        {
          text: "Contributed within a team to a healthcare data platform for a major client.",
        },
        {
          text: "Diagnosed bottlenecks and improved performance with code splitting, lazy loading and more.",
        },
      ],
    },
  ],
};

const writingSection = {
  lede: "Sharing what I learn.",
  items: [
    {
      tag: "IEEE Xplore · paper",
      title: "E-Quarantine",
      desc: "A peer-reviewed research paper, published on IEEE Xplore.",
      cta: "Read on IEEE ↗",
      href: "https://ieeexplore.ieee.org/document/9708172",
    },
    {
      tag: "BigBinary blog · Ruby",
      title: "Upgrade Ruby using dual boot",
      desc: "A practical walkthrough of running two Ruby versions side by side during an upgrade.",
      cta: "Read the post ↗",
      href: "https://www.bigbinary.com/blog/ruby-upgrade-using-dual-boot",
    },
  ],
};

const educationInfo = {
  schools: [
    {
      date: "2017 — 2021",
      school: "Rajagiri School of Engineering & Technology",
      subHeader: "B.Tech, Computer Science Engineering",
      grade: "CGPA 8.4",
    },
    {
      date: "2015 — 2017",
      school: "SNMHSS",
      subHeader: "Higher Secondary",
      grade: "96%",
    },
  ],
};

const contactInfo = {
  title: "Let's build something dependable.",
  subtitle: "Open to full-stack, React, Ruby on Rails, and practical AI work.",
  email: "imvijay2136@gmail.com",
  calendarLink: "https://vijay.neetocal.com/",
};

const isHireable = true;

export {
  greeting,
  socialMediaLinks,
  terminal,
  navLinks,
  skillsSection,
  workExperiences,
  writingSection,
  educationInfo,
  contactInfo,
  isHireable,
};

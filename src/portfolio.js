import emoji from "react-easy-emoji";
import bigbinary from "./assets/images/bigbinary.ico";
import neeto from "./assets/images/neeto.ico";

const greeting = {
  username: "Vijay Vinod",
  title: "Hi all, I'm Vijay",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience in building Full Stack web applications using React.js and Ruby on Rails."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
};

const socialMediaLinks = {
  github: "https://github.com/vijay2136/",
  linkedin: "https://www.linkedin.com/in/vijay-vinod-266b80212/",
  gmail: "imvijay2136@gmail.com",
};

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Dedicated to writing clean, organized, and maintainable code to ensure software quality and long-term sustainability."
    ),
    emoji(
      "⚡ Enthusiastic about crafting minimalist and user-friendly interfaces to enhance the overall user experience."
    ),
    emoji("⚡ Proficient in fast-paced development."),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "ruby on rails",
      fontAwesomeClassname: "fas fa-gem",
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
};

const educationInfo = {
  schools: [
    {
      schoolName: "Rajagiri School of Engineering & Technology",
      logo: "",
      subHeader: "Computer Science Engineering",
      duration: "2017 - 2021",
      desc: "CGPA: 8.4",
    },
    {
      schoolName: "SNMHSS",
      logo: "",
      subHeader: "Higher Secondary",
      duration: "2015 - 2017",
      desc: "Percentage: 96",
    },
  ],
};

const workExperiences = {
  experience: [
    {
      role: "Software Developer",
      company: "BigBinary",
      companylogo: bigbinary,
      date: "2021 - Present",
      descBullets: [
        "Actively contributed in a team to develop a healthcare data platform for a major client.",
        "Analysed bottlenecks and improved performance issues with code splitting, lazy loading etc.",
      ],
    },
    {
      role: "Software Developer",
      company: "neeto",
      companylogo: neeto,
      date: "2021 - Present",
      descBullets: [
        "Collaborated on multiple internal products like neetoCal, neetoKB, neetoInvoice, etc..",
        "Designed and developed reusable UI components, contributing to the neetoUI library for use across various neeto products.",
        "Took on the role of TL for the neetoCal product.",
        "Reviewed code managed projects.",
      ],
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a project in mind? Let's connect and bring your ideas to life.",
  number: "+91 9961517220",
  email_address: "imvijay2136@gmail.com",
};

const twitterDetails = {
  userName: "twitter",
};

const isHireable = false;
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  contactInfo,
  twitterDetails,
  isHireable,
};

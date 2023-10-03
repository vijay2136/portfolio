import React, { useContext } from "react";
// import SoftwareSkill from "../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../assets/lottie/codingPerson";
import StyleContext from "../contexts/StyleContext";
import Lottie from "lottie-react";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <Lottie loop animationData={codingPerson} />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <div>
              <div className="software-skills-main-div">
                <ul className="dev-icons">
                  {skillsSection.softwareSkills.map((skills, i) => {
                    return (
                      <li
                        key={i}
                        className="software-skill-inline"
                        name={skills.skillName}
                      >
                        <i className={skills.fontAwesomeClassname}></i>
                        <p>{skills.skillName}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

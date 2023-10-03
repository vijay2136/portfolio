import React, { useContext } from "react";
import { educationInfo } from "../portfolio";
import { Fade, Slide } from "react-reveal";
import StyleContext from "../contexts/StyleContext";

const Education = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <div className="education-section" id="education">
      <h1 className="education-heading">Education</h1>
      <div className="education-card-container">
        {educationInfo.schools.map((school, index) => (
          <div>
            <Fade left duration={1000}>
              <div className="education-card">
                {school.logo && (
                  <div className="education-card-left">
                    <img
                      crossOrigin={"anonymous"}
                      className="education-roundedimg"
                      src={school.logo}
                      alt={school.schoolName}
                    />
                  </div>
                )}
                <div className="education-card-right">
                  <h5 className="education-text-school">{school.schoolName}</h5>

                  <div className="education-text-details">
                    <h5
                      className={
                        isDark
                          ? "dark-mode education-text-subHeader"
                          : "education-text-subHeader"
                      }
                    >
                      {school.subHeader}
                    </h5>
                    <p
                      className={`${
                        isDark ? "dark-mode" : ""
                      } education-text-duration`}
                    >
                      {school.duration}
                    </p>
                    <p className="education-text-desc">{school.desc}</p>
                  </div>
                </div>
              </div>
            </Fade>
            <Slide left duration={2000}>
              <div className="education-card-border"></div>
            </Slide>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

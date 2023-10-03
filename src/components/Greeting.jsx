import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import landingPerson from "../assets/lottie/landingPerson";
import Button from "./commons/Button";
import Lottie from "lottie-react";
import { greeting, socialMediaLinks } from "../portfolio";
import StyleContext from "../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div className="social-media-div">
                <a
                  href={socialMediaLinks.github}
                  className="icon-button github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                  <span></span>
                </a>
                <a
                  href={socialMediaLinks.linkedin}
                  className="icon-button linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                  <span></span>
                </a>
                <a
                  href={`mailto:${socialMediaLinks.gmail}`}
                  className="icon-button google"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope"></i>
                  <span></span>
                </a>
              </div>
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <Lottie loop animationData={landingPerson} />
          </div>
        </div>
      </div>
    </Fade>
  );
}

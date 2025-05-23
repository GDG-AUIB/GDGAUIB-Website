import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import ArtificialIntelligenceImg from "../../assets/images/ArtificialIntelligenceImg.svg";
import MobileImg from "../../assets/images/MobileImg.svg";
import WebDevelopmentImg from "../../assets/images/WebDevelopmentImg.svg";
import webImg from "../../assets/images/code-review.svg";

function GetSkillSvg(props) {
  if (props.fileName === "ArtificialIntelligenceImg")
    return (
      <img
        alt="ArtificialIntelligenceImg"
        src={ArtificialIntelligenceImg}
      ></img>
    );
  else if (props.fileName === "WebDevelopmentImg")
    return <img alt="WebDevelopmentImg" src={WebDevelopmentImg}></img>;
  else if (props.fileName === "MobileImg")
    return <img alt="MobileImg" src={MobileImg}></img>;
  else if (props.fileName === "webImg")
    return <img alt="webImg" src={webImg}></img>;
  return <img alt="MobileImg" src={MobileImg}></img>;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;

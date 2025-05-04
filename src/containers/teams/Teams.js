import React from "react";
import "./Teams.css";
import { Fade } from "react-reveal";
import { members } from "../../portfolio";
import TeamCard from "../../components/teamCard/teamCard";

export default function Teams(props) {
  const theme = props.theme;
  return (
    <section id="team">
      <div className="main" id="teams">
        <div className="teams-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="teams-header" style={{ color: theme.text }}>
              Meet The GDG Team
            </h1>
          </Fade>
        </div>
        <div className="teams-body-div">
          {members.members.map((member) => {
            return <TeamCard member={member} theme={theme} />;
          })}
        </div>
      </div>
    </section>
  );
}

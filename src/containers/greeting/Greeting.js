import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import EventHero from "../../containers/EventHero/EventHero";

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <section id="overview">
      <Fade bottom duration={2000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <h1 className="greeting-text" style={{ color: theme.text }}>
                  {greeting.title} <br /> {greeting.university_name}
                </h1>
                {greeting.nickname && (
                  <h2
                    className="greeting-nickname"
                    style={{ color: theme.text }}
                  >
                    {greeting.nickname}
                  </h2>
                )}
                <p
                  className="greeting-text-p subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {greeting.subTitle}
                </p>
                <SocialMedia theme={theme} />
                <div className="portfolio-repo-btn-div">
                  <Button
                    text="⭐ Join the Team"
                    newTab={true}
                    href={
                      "https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran"
                    }
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                </div>
              </div>
            </div>
            <div>
              <EventHero theme={props.theme} />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
//1

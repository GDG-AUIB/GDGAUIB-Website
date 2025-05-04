import React, { Component } from "react";
import "./teamCard.css";
import { Fade } from "react-reveal";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default class TeamCard extends Component {
  render() {
    const member = this.props.member;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="member-card">
          <div className="content">
            <div className="content-overlay"></div>
            <div
              className="member-header"
              style={{ backgroundColor: theme.imageHighlight }}
            >
              <img
                className="logo_img"
                src={`https://github.com/${member.github}.png`}
                alt={`${member.github} icon`}
              />
            </div>
          </div>
          <div className="member-body">
            <h2 className="member-body-title" style={{ color: theme.text }}>
              {member.name}
            </h2>
            <h3
              className="member-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {member.role}
            </h3>
            <div className="social-media-div">
              {member.social.map((media, i) => {
                return (
                  <a
                    key={i}
                    href={media.link}
                    className={`icon-button`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconWrapper {...media} {...this.props}>
                      <i className={`fab ${media.fontAwesomeIcon}`}></i>
                    </IconWrapper>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

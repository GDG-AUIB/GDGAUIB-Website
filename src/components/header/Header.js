import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { settings } from "../../portfolio.js";
import Logo from "../../assets/images/GDG On Campus - Horizontal.svg";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash
      ? "/GDGAUIB-Website/splash"
      : "/GDGAUIB-Website/home";
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <img
                src={Logo}
                alt="GDG On Campus - Horizontal"
                className="logo-name"
              />
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <a
                  href="/GDGAUIB-Website/home#technology"
                  style={{ color: theme.text, textDecoration: "none" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="/GDGAUIB-Website/events"
                  style={{ color: theme.text, textDecoration: "none" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/GDGAUIB-Website/home#team"
                  style={{ color: theme.text, textDecoration: "none" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/GDGAUIB-Website/FAQ"
                  style={{ color: theme.text, textDecoration: "none" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;

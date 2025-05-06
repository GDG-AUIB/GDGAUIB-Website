import React from "react";
import "./LoaderLogo.css";
import video from "../../assets/images/video.gif";

class LogoLoader extends React.Component {
  render() {
    return (
      <div className="raw_logo">
        <img className="raw_logo_img" src={video} alt="Description of GIF" />
      </div>
    );
  }
}

export default LogoLoader;

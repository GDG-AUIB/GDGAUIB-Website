import React from "react";
import "./TeamBadge.css";

export default function TeamBadge({ member }) {
  const getPhotoSrc = (member) => {
    const extensions = ["png", "jpg", "jpeg", "gif"];
    for (const ext of extensions) {
      try {
        return require(`../../assets/images/team/${member.name}.${ext}`);
      } catch (error) {
        continue;
      }
    }
    return member.Photo;
  };

  return (
    <div className="team-badge">
      <div className="badge-header">
        <span className="year-separator"></span>
        <h className="badge-year">{member.joinYear}</h>
        <h className="badge-year">{member.leaveYear || "Present"}</h>
      </div>
      <div className="badge-body">
        <img
          type="module"
          src={getPhotoSrc(member)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://github.com/${member.github}.png`;
          }}
          alt={member.name}
          className="badge-photo"
        />
        <h2 className="badge-name">{member.name}</h2>
        <p className="badge-role">{member.role}</p>
        <blockquote className="badge-quote">“{member.quote}”</blockquote>
        <div className="badge-socials">
          {member.social.map((media, index) => (
            <a
              key={index}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ backgroundColor: media.backgroundColor }}
            >
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="badge-footer">
        <p className="badge-footer-text">Google Developer Groups</p>
      </div>
    </div>
  );
}

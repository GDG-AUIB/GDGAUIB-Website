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

  const joinChapter =
    member.joinChapter ??
    (member.joinYear ? `${member.joinYear} Fall` : "Unknown");
  const leaveChapter =
    member.leaveChapter === null
      ? "Present"
      : member.leaveChapter ??
        (member.leaveYear ? `${member.leaveYear} Fall` : "Present");

  return (
    <div className="team-badge">
      <div className="badge-header">
        <span className="year-separator"></span>
        <span className="badge-year">{joinChapter}</span>
        <span className="badge-year">{leaveChapter}</span>
      </div>
      <div className="badge-body">
        <img
          type="module"
          src={getPhotoSrc(member)}
          onError={(e) => {
            e.target.onerror = null;
            if (member.github) {
              e.target.src = `https://github.com/${member.github}.png`;
            } else if (member.Photo) {
              e.target.src = member.Photo;
            }
          }}
          alt={member.name}
          className="badge-photo"
        />
        <h2 className="badge-name">{member.name}</h2>
        <p className="badge-role">{member.role}</p>
        {member.quote && (
          <blockquote className="badge-quote">“{member.quote}”</blockquote>
        )}
        <div className="badge-socials">
          {(member.social || []).map((media, index) => (
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

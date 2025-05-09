import React, { useState } from "react";
import "./Teams.css";
import { Fade } from "react-reveal";
import { members } from "../../portfolio";
import TeamBadge from "../../components/teamBadge/TeamBadge";

export default function Teams(props) {
  const theme = props.theme;
  const [filterType, setFilterType] = useState("none");
  const [sortOrder, setSortOrder] = useState("desc");

  const groupedMembers = () => {
    if (filterType === "role") {
      const groups = {};
      members.members.forEach((member) => {
        if (!groups[member.role]) groups[member.role] = [];
        groups[member.role].push(member);
      });
      return Object.entries(groups);
    } else if (filterType === "year") {
      const yearMap = new Map();
      members.members.forEach((member) => {
        const start = member.joinYear;
        const end = member.leaveYear || new Date().getFullYear();
        for (let y = end; y >= start; y--) {
          if (!yearMap.has(y)) yearMap.set(y, []);
          yearMap.get(y).push(member);
        }
      });
      // Convert to array and sort
      const sortedYears = Array.from(yearMap.entries()).sort((a, b) =>
        sortOrder === "desc" ? b[0] - a[0] : a[0] - b[0]
      );
      return sortedYears;
    }
    return [["All Members", members.members]];
  };

  return (
    <section id="team">
      <div className="main" id="teams">
        <div className="teams-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="teams-header" style={{ color: theme.text }}>
              Meet The GDG Team
            </h1>
          </Fade>
          <div className="filter-options">
            <label htmlFor="filter" style={{ color: theme.text }}>
              Group by:{" "}
            </label>
            <select
              id="filter"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              style={{ color: theme.text, backgroundColor: theme.body }}
            >
              <option value="none">All Members</option>
              <option value="role">Role</option>
              <option value="year">Chapter</option>
            </select>
            {filterType === "year" && (
              <button
                onClick={() =>
                  setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"))
                }
                style={{
                  marginLeft: "10px",
                  color: theme.text,
                  backgroundColor: theme.body,
                }}
              >
                {sortOrder === "desc" ? "↓" : "↑"}
              </button>
            )}
          </div>
        </div>
        <div className="teams-body-div">
          {groupedMembers().map(([category, categoryMembers]) => (
            <div key={category} className="team-category">
              <h2 className="category-header" style={{ color: theme.text }}>
                {category}
              </h2>
              <div className="category-members">
                {categoryMembers.map((member, index) => (
                  <TeamBadge key={index} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

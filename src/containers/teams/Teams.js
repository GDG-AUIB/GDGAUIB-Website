import React, { useState } from "react";
import "./Teams.css";
import { Fade } from "react-reveal";
import { members } from "../../data/members";
import TeamBadge from "../../components/teamBadge/TeamBadge";

// Remove unused getRoleForYear function if not used anywhere
// (delete the function above if not needed)

export default function Teams(props) {
  const theme = props.theme;
  // Set default filterType to "year" for Chapter grouping
  const [filterType, setFilterType] = useState("year");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedRole, setSelectedRole] = useState("All");

  // Get all unique roles for the dropdown
  const allRoles = Array.from(
    new Set(members.members.map((m) => m.role))
  ).sort();

  const groupedMembers = () => {
    if (filterType === "role") {
      const groups = {};
      members.members.forEach((member) => {
        if (!groups[member.role]) groups[member.role] = [];
        groups[member.role].push(member);
      });
      let entries = Object.entries(groups);
      // If a specific role is selected, filter to just that role
      if (selectedRole !== "All") {
        entries = entries.filter(([role]) => role === selectedRole);
      }
      return entries;
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

  // Helper to get the role for a member for a specific year
  function getRoleForYear(member, year) {
    if (member.roleByYear && member.roleByYear[year]) {
      return member.roleByYear[year];
    }
    return member.role;
  }

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
            {/* Show sort order button for year */}
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
            {/* Show role selector when grouping by role */}
            {filterType === "role" && (
              <select
                id="role-filter"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                style={{
                  marginLeft: "10px",
                  color: theme.text,
                  backgroundColor: theme.body,
                }}
              >
                <option value="All">All Roles</option>
                {allRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
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
                {filterType === "year"
                  ? categoryMembers.map((member, index) => (
                      <TeamBadge
                        key={index}
                        member={{
                          ...member,
                          role: getRoleForYear(member, category),
                        }}
                      />
                    ))
                  : categoryMembers.map((member, index) => (
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

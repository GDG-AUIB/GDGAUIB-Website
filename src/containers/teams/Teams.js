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

  // Helper: convert chapter string or year to an integer index for easy iteration
  // Index = year * 2 + seasonIndex (Spring=0, Fall=1)
  function chapterToIndex(chapterOrYear) {
    if (!chapterOrYear && chapterOrYear !== 0) return null;
    if (typeof chapterOrYear === "string") {
      const parts = chapterOrYear.split(" ");
      const year = parseInt(parts[0], 10);
      const season = parts[1] || "Fall";
      const seasonIndex = season.toLowerCase().startsWith("s") ? 0 : 1; // Spring => 0, Fall =>1
      return year * 2 + seasonIndex;
    }
    // numeric year -> assume Fall by default
    const y = parseInt(chapterOrYear, 10);
    if (Number.isNaN(y)) return null;
    return y * 2 + 1;
  }

  function indexToChapter(index) {
    const year = Math.floor(index / 2);
    const season = index % 2 === 0 ? "Spring" : "Fall";
    return `${year} ${season}`;
  }

  // Determine current chapter index based on today's date
  const today = new Date();
  const monthNow = today.getMonth() + 1; // 1-12
  const currentSeasonIndex = monthNow >= 8 ? 1 : 0; // >= Aug => Fall, else Spring
  const currentChapterIndex = today.getFullYear() * 2 + currentSeasonIndex;

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
      // Create two chapters per year (Spring, Fall) but only up to current chapter
      const seasonOrderMap = { Spring: 0, Fall: 1 };
      const yearSeasonMap = new Map();

      members.members.forEach((member) => {
        // Determine start and end chapter indexes using joinChapter/leaveChapter if present
        let startIndex = null;
        let endIndex = null;

        if (member.joinChapter) {
          startIndex = chapterToIndex(member.joinChapter);
        } else if (member.joinYear) {
          // assume joinYear corresponds to Fall of that year when no chapter provided
          startIndex = chapterToIndex(member.joinYear);
        }

        if (member.leaveChapter) {
          endIndex = chapterToIndex(member.leaveChapter);
        } else if (member.leaveYear) {
          endIndex = chapterToIndex(member.leaveYear);
        } else {
          // still active: cap at current chapter
          endIndex = currentChapterIndex;
        }

        if (startIndex === null) {
          // missing join info: place in earliest known (currentChapterIndex)
          startIndex = currentChapterIndex;
        }

        // Make sure range is valid
        if (startIndex > endIndex) {
          // if start is after end, swap or skip; here skip
          return;
        }

        for (let idx = startIndex; idx <= endIndex; idx++) {
          // don't include future chapters
          if (idx > currentChapterIndex) break;
          const key = indexToChapter(idx);
          if (!yearSeasonMap.has(key)) yearSeasonMap.set(key, []);
          yearSeasonMap.get(key).push(member);
        }
      });

      // Convert to array and sort by year and season according to sortOrder
      const entries = Array.from(yearSeasonMap.entries());
      entries.sort((a, b) => {
        const [aYearStr, aSeason] = a[0].split(" ");
        const [bYearStr, bSeason] = b[0].split(" ");
        const aYear = parseInt(aYearStr, 10);
        const bYear = parseInt(bYearStr, 10);
        if (aYear !== bYear)
          return sortOrder === "desc" ? bYear - aYear : aYear - bYear;
        // same year: order seasons (Fall considered later than Spring)
        if (sortOrder === "desc")
          return seasonOrderMap[bSeason] - seasonOrderMap[aSeason];
        return seasonOrderMap[aSeason] - seasonOrderMap[bSeason];
      });

      return entries;
    }
    return [["All Members", members.members]];
  };

  // Helper to get the role for a member for a specific chapter (accepts "2024 Fall" or numeric year)
  function getRoleForYear(member, yearOrChapter) {
    if (!yearOrChapter) return member.role;
    // If given a full chapter like "2024 Fall", try roleByChapter first
    if (
      typeof yearOrChapter === "string" &&
      yearOrChapter.indexOf(" ") !== -1
    ) {
      const chapterKey = yearOrChapter;
      if (member.roleByChapter && member.roleByChapter[chapterKey]) {
        return member.roleByChapter[chapterKey];
      }
      // fallback to numeric year map if present
      const yearNum = parseInt(String(yearOrChapter).slice(0, 4), 10);
      if (member.roleByYear && member.roleByYear[yearNum]) {
        return member.roleByYear[yearNum];
      }
    } else if (typeof yearOrChapter === "number") {
      // numeric year -> try chapter keys for Fall first then legacy year map
      const fallKey = `${yearOrChapter} Fall`;
      const springKey = `${yearOrChapter} Spring`;
      if (member.roleByChapter && member.roleByChapter[fallKey])
        return member.roleByChapter[fallKey];
      if (member.roleByChapter && member.roleByChapter[springKey])
        return member.roleByChapter[springKey];
      if (member.roleByYear && member.roleByYear[yearOrChapter])
        return member.roleByYear[yearOrChapter];
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

import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="sidebar-name">Ruchita Patil</h1>
        <ul className="sidebar-links">
          <li><a href="#summary">Summary</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="/resume.pdf" download className="resume-btn">Download Resume</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section id="summary">
          <h2>Summary</h2>
          <p>
            Seeking opportunities to utilize proven analytical skills to manage information and improve operational
            efficiency. Expertise in Python, SQL, Tableau and Power BI.
          </p>
        </section>

        <section id="education">
          <h2>Education</h2>
          <ul>
            <li>M.S. Business Analytics – UMass Lowell (2024)</li>
            <li>M.S. Computer Applications – Fergusson College (2022)</li>
            <li>B.Sc. Computer Science – SPPU (2020)</li>
          </ul>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <p><strong>Languages:</strong> SQL, Python, R, Java</p>
          <p><strong>Tools:</strong> Tableau, Power BI, Snowflake, Excel, Alteryx, Quicksight, ARCGIS</p>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div>
            <h3>Data Analyst – Digital Federal Credit Union</h3>
            <ul>
              <li>Created BI reports using SQL, Power BI, Tableau</li>
              <li>Maintained SLA compliance (75%)</li>
              <li>Implemented auditing system for consumer loans</li>
            </ul>
          </div>
          <div>
            <h3>Data Scientist – DCU</h3>
            <ul>
              <li>Migrated ML models to servers</li>
              <li>Built Tableau dashboards</li>
              <li>Validated models for Home Equity Solutions</li>
            </ul>
          </div>
          <div>
            <h3>Energy Data Analyst – UMass Lowell</h3>
            <ul>
              <li>Created public dashboards on energy and emissions</li>
              <li>Improved carbon savings by 3%</li>
              <li>Used ARCGIS for location-based visuals</li>
            </ul>
          </div>
        </section>

        <section id="achievements">
          <h2>Achievements</h2>
          <ul>
            <li>🏆 Employee of the Year – UMass Lowell (Apr 2024)</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

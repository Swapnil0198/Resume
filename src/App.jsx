import React from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  return (
    <div className="bg-[#f8f8f8] text-[#2d2e32] font-sans">
      <div className="min-h-screen flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-white shadow-md px-8 py-10 sticky top-0 h-screen">
          <h1 className="text-3xl font-bold mb-6">Ruchita Patil</h1>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Boston, USA<br />
            +1 978-421-5763<br />
            <a href="mailto:ruchita9294@gmail.com" className="text-blue-600">ruchita9294@gmail.com</a>
          </p>
          <a
            href="/resume.pdf"
            download
            className="block bg-blue-600 text-white py-2 px-4 text-center rounded hover:bg-blue-700 mt-4"
          >
            📄 Download Resume
          </a>
          <nav className="mt-10 space-y-3 text-sm">
            <a href="#summary" className="block hover:underline">Summary</a>
            <a href="#education" className="block hover:underline">Education</a>
            <a href="#skills" className="block hover:underline">Skills</a>
            <a href="#experience" className="block hover:underline">Experience</a>
            <a href="#achievements" className="block hover:underline">Achievements</a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 px-6 py-10 space-y-20">
          <motion.section id="summary" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="section-title">Summary</h2>
            <p className="section-text">
              Seeking opportunities to utilize proven analytical skills to manage information and improve operational
              efficiency. Expertise in Python, SQL, Tableau and Power BI.
            </p>
          </motion.section>

          <motion.section id="education" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="section-title">Education</h2>
            <ul className="section-list">
              <li>M.S. Business Analytics – University of Massachusetts Lowell (May 2024), GPA: 3.3/4</li>
              <li>M.S. Computer Applications – Fergusson College (May 2022), GPA: 4/4</li>
              <li>B.Sc. Computer Science – SPPU (May 2020), GPA: 3.7/4</li>
            </ul>
          </motion.section>

          <motion.section id="skills" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="section-title">Skills</h2>
            <p className="section-text"><strong>Languages:</strong> SQL, Python, R, Java</p>
            <p className="section-text"><strong>Tools:</strong> Tableau, Power BI, PyCharm, Azure, Visual Studio, ARCGIS, Excel, Alteryx, Snowflake, Quicksight</p>
          </motion.section>

          <motion.section id="experience" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="section-title">Experience</h2>

            <div className="section-sub">
              <h3 className="font-bold">Data Analyst – Digital Federal Credit Union (Dec 2024 – Present)</h3>
              <ul className="section-list">
                <li>Created BI reports using SQL, Power BI, Tableau</li>
                <li>Maintained SLA compliance on KTLO tickets (75%)</li>
                <li>Implemented ACES auditing system for consumer loans</li>
              </ul>
            </div>

            <div className="section-sub">
              <h3 className="font-bold">Data Scientist – DCU (Jul 2024 – Dec 2024)</h3>
              <ul className="section-list">
                <li>Migrated ML models to servers for improved accessibility</li>
                <li>Built Tableau dashboards for fraud and engagement</li>
                <li>Validated models for Home Equity Solution Architecture</li>
              </ul>
            </div>

            <div className="section-sub">
              <h3 className="font-bold">Energy Data Analyst – UMass Lowell (Oct 2023 – May 2024)</h3>
              <ul className="section-list">
                <li>Built public dashboards on energy and emissions with Tableau</li>
                <li>Improved carbon savings by 3% via data analysis</li>
                <li>Used ARCGIS for location-based visualization</li>
              </ul>
            </div>
          </motion.section>

          <motion.section id="achievements" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="section-title">Achievements</h2>
            <ul className="section-list">
              <li>🏆 Employee of the Year – UMass Lowell (Apr 2024)</li>
            </ul>
          </motion.section>
        </main>
      </div>
    </div>
  );
}

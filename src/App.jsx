import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <div className="grid md:grid-cols-3 max-w-7xl mx-auto p-6 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 bg-white p-6 shadow rounded-lg sticky top-6 h-fit">
          <h1 className="text-3xl font-bold mb-2">Ruchita Patil</h1>
          <p className="text-sm text-gray-500 mb-4">
            Boston, USA<br />
            +1 978-421-5763<br />
            <a href="mailto:ruchita9294@gmail.com" className="text-blue-600">ruchita9294@gmail.com</a>
          </p>
          <a
            href="/resume.pdf"
            download
            className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 mb-4"
          >
            📄 Download Resume
          </a>
          <nav className="space-y-2 text-sm">
            <a href="#summary" className="block hover:underline">Summary</a>
            <a href="#education" className="block hover:underline">Education</a>
            <a href="#skills" className="block hover:underline">Skills</a>
            <a href="#experience" className="block hover:underline">Experience</a>
            <a href="#achievements" className="block hover:underline">Achievements</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-2 space-y-10">
          <section id="summary">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Summary</h2>
            <p>
              Seeking opportunities to utilize proven analytical skills to manage information and improve operational
              efficiency. Expertise in Python, SQL, Tableau and Power BI.
            </p>
          </section>

          <section id="education">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Education</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>M.S. Business Analytics – University of Massachusetts Lowell (May 2024), GPA: 3.3/4</li>
              <li>M.S. Computer Applications – Fergusson College (May 2022), GPA: 4/4</li>
              <li>B.Sc. Computer Science – Savitribai Phule Pune University (May 2020), GPA: 3.7/4</li>
            </ul>
          </section>

          <section id="skills">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Skills</h2>
            <p><strong>Languages:</strong> SQL, Python, R, Java</p>
            <p><strong>Tools:</strong> Tableau, Power BI, PyCharm, Azure, Visual Studio, ARCGIS, Excel, Alteryx, Snowflake, Quicksight</p>
          </section>

          <section id="experience">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Experience</h2>

            <div className="mb-6">
              <h3 className="font-bold">Data Analyst – Digital Federal Credit Union (Dec 2024 – Present)</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Created BI reports using SQL, Power BI, and Tableau</li>
                <li>Maintained SLA compliance on KTLO tickets (75%)</li>
                <li>Implemented ACES auditing system for consumer loans</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold">Data Scientist – DCU (Jul 2024 – Dec 2024)</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Migrated ML models to servers for improved accessibility</li>
                <li>Built Tableau dashboards for fraud and engagement</li>
                <li>Validated models for Home Equity Solution Architecture</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold">Energy Data Analyst – UMass Lowell (Oct 2023 – May 2024)</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Built public dashboards on energy and emissions with Tableau</li>
                <li>Improved carbon savings by 3% via data analysis</li>
                <li>Used ARCGIS for location-based visualization</li>
              </ul>
            </div>
          </section>

          <section id="achievements">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Achievements</h2>
            <ul className="list-disc list-inside ml-4">
              <li>🏆 Employee of the Year – UMass Lowell (Apr 2024)</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

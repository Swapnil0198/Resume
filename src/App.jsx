import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-10 font-sans">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Ruchita Pradeep Patil</h1>
        <p className="text-gray-600">
          Boston, USA | +1 978-421-5763 |{" "}
          <a href="mailto:ruchita9294@gmail.com" className="text-blue-600">ruchita9294@gmail.com</a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/ruchita-patil-805465239/"
            className="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-4">Summary</h2>
        <p>
          Seeking opportunities to utilize proven analytical skills to manage information and improve operational
          efficiency. Expertise in Python, SQL, Tableau and Power BI.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-4">Education</h2>
        <ul className="list-disc list-inside">
          <li>M.S. in Business Analytics – University of Massachusetts Lowell (May 2024), GPA: 3.3/4</li>
          <li>M.S. in Computer Applications – Fergusson College (May 2022), GPA: 4/4</li>
          <li>B.Sc. in Computer Science – Savitribai Phule Pune University (May 2020), GPA: 3.7/4</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-4">Skills</h2>
        <p><strong>Languages:</strong> SQL, Python, R, Java</p>
        <p><strong>Tools:</strong> Tableau, Power BI, PyCharm, Azure, Visual Studio, ARCGIS, Excel, Alteryx, Snowflake, Quicksight</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-4">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Data Analyst – Digital Federal Credit Union (Dec 2024 – Present)</h3>
            <ul className="list-disc list-inside">
              <li>Created BI reports using SQL, Power BI, and Tableau</li>
              <li>Maintained SLA compliance on KTLO tickets (75%)</li>
              <li>Implemented ACES auditing system for consumer loans</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Data Scientist – DCU (Jul 2024 – Dec 2024)</h3>
            <ul className="list-disc list-inside">
              <li>Migrated ML models to servers for improved accessibility</li>
              <li>Built Tableau dashboards for fraud and engagement</li>
              <li>Validated models for Home Equity Solution Architecture</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Energy Data Analyst – UMass Lowell (Oct 2023 – May 2024)</h3>
            <ul className="list-disc list-inside">
              <li>Built public dashboards on energy and emissions with Tableau</li>
              <li>Improved carbon savings by 3% via data analysis</li>
              <li>Used ARCGIS for location-based visualization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-4">Achievements</h2>
        <p>🏆 Employee of the Year – UMass Lowell (Apr 2024)</p>
      </section>

      <section className="mb-10 text-center">
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          📄 Download Resume
        </a>
      </section>
    </main>
  );
}

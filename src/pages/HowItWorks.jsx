import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DashboardStats from '../components/DashboardStats'; // mini-donut charts
import { initialOKRs } from '../features/okrs/okrSlice'; // sample data for charts

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="pt-24 px-6 md:px-12 pb-12 max-w-4xl mx-auto space-y-12">
      <Link to="/" className="text-blue-600 hover:underline text-sm">← Back to Home</Link>

      <header data-aos="fade-up" className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">How MyOKR Works</h1>
        <p className="text-gray-700 text-lg">
          Learn how Objectives &amp; Key Results (OKRs) help teams align, focus, and achieve measurable outcomes.
        </p>
      </header>

      <section data-aos="fade-up" className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">📌 What Are OKRs?</h2>
        <p className="text-gray-700">
          OKRs (Objectives and Key Results) are a goal-setting methodology used by companies like Intel and Google.
          They consist of an objective—a clear goal—and 3–5 key results: measurable, time-bound outcomes.
        </p>
        <p className="text-gray-700">
          The framework was popularized by John Doerr in "Measure What Matters" and is now widely used by high-performing teams.
        </p>
      </section>

      <section data-aos="fade-up" className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">🎯 Why They Work</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>Focus:</strong> Teams focus on top priorities.</li>
          <li><strong>Alignment:</strong> Connect strategy from top-level to individuals.</li>
          <li><strong>Transparency:</strong> Progress is visible to everyone.</li>
          <li><strong>Engagement:</strong> Teams own their results.</li>
        </ul>
      </section>

      <section data-aos="fade-up" className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">📈 Progress Overview</h2>
        <p className="text-gray-700">
          Here’s a visual snapshot of how current OKRs are progressing:
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <DashboardStats okrs={initialOKRs} />
        </div>
        <p className="text-gray-700 mt-4">
          Each chart shows the percentage completed for Company, Team, and Personal OKRs.
        </p>
      </section>

      <section data-aos="fade-up" className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">🛠️ Example in Action</h2>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 text-gray-800">
          <strong>Objective:</strong> Increase user engagement this quarter<br />
          <strong>Key Results:</strong><br />
          – Boost daily active users by 25%<br />
          – Reduce bounce rate below 40%<br />
          – Achieve an average session duration of 5+ minutes
        </div>
      </section>

      <section data-aos="fade-up" className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">📌 Best Practices</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Use 3–5 Objectives per cycle to avoid overload.</li>
          <li>Key Results: quantitative, measurable, and time‑bound.</li>
          <li>Track progress weekly—visuals like donut charts help.</li>
          <li>Run quarterly reviews to inspect and adapt.</li>
        </ul>
      </section>

      <div data-aos="fade-up" className="text-center pt-6">
        <Link to="/register"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started with MyOKR
        </Link>
      </div>
    </div>
  );
}

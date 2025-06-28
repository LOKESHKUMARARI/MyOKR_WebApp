import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OKRProgressChart from '../components/OKRProgressChart';

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="pt-24 px-6 md:px-12 py-12 max-w-4xl mx-auto space-y-12">
      <Link to="/" className="text-blue-600 hover:underline text-sm">
        ← Back to Home
      </Link>

      <header data-aos="fade-up" className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">
          How MyOKR Works
        </h1>
        <p className="text-gray-700 text-lg">
          From setting ambitious goals to tracking progress visually—this is your OKR journey:
        </p>
      </header>

      <section data-aos="fade-up" className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Objective → Key Results
        </h2>
        <p className="text-gray-700">
          Objectives are your big-picture goals. Key Results are measurable milestones. Each OKR typically has 3–5 key results, checked weekly.
        </p>
      </section>

      <section data-aos="fade-up" className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Visual Progress Tracking
        </h2>
        <p className="text-gray-700">
          Track your quarterly performance visually. Here's an example of progress by quarter:
        </p>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <OKRProgressChart />
        </div>
      </section>

      <section data-aos="fade-up" className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Real‑World Example
        </h2>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 text-gray-800">
          <strong>Objective:</strong> Increase user engagement<br />
          <strong>Key Results:</strong><br />
          • Improve DAU by 20%<br />
          • Decrease bounce rate by 15%<br />
          • Increase session duration to 5+ minutes
        </div>
      </section>

      <section data-aos="fade-up" className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why It Works
        </h2>
        <p className="text-gray-700">
          OKRs foster alignment, clarity, transparency, and measurable outcomes—cornerstones of high-performing teams.
        </p>
      </section>

      <div className="text-center pt-6" data-aos="fade-up">
        <Link
          to="/register"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

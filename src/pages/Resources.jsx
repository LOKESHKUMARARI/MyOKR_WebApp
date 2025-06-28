import { useEffect } from 'react';
import { Link } from 'react-router-dom';  // ✅ Import Link
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resources() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="pt-24 px-6 md:px-12 py-12 bg-gray-50 text-gray-800">
      <Link to="/" className="text-blue-600 hover:underline text-sm mb-8 inline-block">
        ← Back to Home
      </Link>

      <header data-aos="fade-up" className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold">Resources</h1>
        <p className="text-lg text-gray-700">
          Learn to master OKRs with our curated guides, best practices, and tools (coming soon).
        </p>
      </header>

      <section className="max-w-3xl mx-auto text-gray-700 space-y-6">
        {[
          { title: '🎯 Getting Started with OKRs', desc: 'Learn the fundamentals of Objectives & Key Results.' },
          { title: '📊 Tracking Progress Effectively', desc: 'Discover techniques to measure key results and improve alignment.' },
          { title: '🔄 Quarterly Planning Tips', desc: 'Best practices for setting and reviewing OKRs every quarter.' },
        ].map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      <div data-aos="fade-up" className="text-center mt-12">
        <p className="text-gray-500 text-sm">More articles and video guides coming soon...</p>
      </div>
    </div>
  );
}

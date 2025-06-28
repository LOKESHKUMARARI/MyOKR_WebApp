import { useEffect } from 'react';
import { Link } from 'react-router-dom';  // ✅ Import Link
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pricing() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="pt-24 px-6 md:px-12 py-12 bg-gray-50 text-gray-800">
      <Link to="/" className="text-blue-600 hover:underline text-sm mb-8 inline-block">
        ← Back to Home
      </Link>

      <header data-aos="fade-up" className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="text-lg text-gray-700">
          Completely free for all essential features. Premium features and team analytics coming soon!
        </p>
      </header>

      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        {[
          'Unlimited Company, Team & Personal OKRs',
          'Real‑time Progress Tracking & Dashboards',
          'Role‑based Access Controls',
          'Advanced Reporting & Analytics (coming soon)',
        ].map((feat, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="font-semibold text-xl mb-2">✔️ {feat}</h3>
            <p className="text-gray-600">Included</p>
          </div>
        ))}
      </section>

      <section data-aos="fade-up" className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white text-center p-8">
          <h2 className="text-2xl font-bold mb-2">Free Plan</h2>
          <p className="text-lg">All Essential Features</p>
          <p className="mt-4 text-3xl font-bold">₹0<span className="text-base font-medium">/ mo</span></p>
        </div>
        <ul className="p-6 space-y-3 text-gray-700">
          <li>✔️ Unlimited OKRs</li>
          <li>✔️ Basic Progress Charts</li>
          <li>✔️ Role-Based Access</li>
          <li>✅ Premium Analytics (coming soon)</li>
        </ul>
        <div className="p-6 text-center">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
}

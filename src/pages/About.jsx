import { useEffect } from 'react';
import { Link } from 'react-router-dom';  // ✅ Import Link
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="pt-24 px-6 md:px-12 py-12 bg-gray-50 text-gray-800">
      <Link to="/" className="text-blue-600 hover:underline text-sm mb-8 inline-block">
        ← Back to Home
      </Link>

      <header data-aos="fade-up" className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold">About MyOKR</h1>
        <p className="text-lg text-gray-700">
          Empowering organizations to achieve more through goal clarity and accountability.
        </p>
      </header>

      <section data-aos="fade-up" className="max-w-3xl mx-auto text-gray-700 space-y-6">
        <p>
          At MyOKR, our mission is to make goal-setting and execution simple, powerful, and inclusive. Whether you're a startup or enterprise, we’re here to support your team's success.
        </p>
        <p>
          Our platform fosters transparency, alignment, and real-time tracking—ensuring that every member knows how they contribute to big-picture objectives.
        </p>
        <p>
          Built by a dedicated remote team of engineers, designers, and product thinkers, MyOKR grows with your feedback and evolving team needs.
        </p>
      </section>

      <div data-aos="fade-up" className="text-center mt-12">
        <Link
          to="/register"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Start Your OKR Journey
        </Link>
      </div>
    </div>
  );
}

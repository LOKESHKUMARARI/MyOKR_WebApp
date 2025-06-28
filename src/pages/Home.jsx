import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <Navbar />

      <main className="pt-20 bg-white text-gray-800">
        {/* Hero Section */}
        <section className="text-center py-24 bg-blue-50 px-6" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Achieve Alignment with MyOKR
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            A clean and powerful OKR solution to help your teams stay focused and aligned.
          </p>
          <div className="space-x-4">
            <Link
              to="/how-it-works"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              How it Works
            </Link>
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create Account
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-white" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything you need to drive results
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: 'Company, Team & Personal OKRs',
                  desc: 'Manage OKRs at all levels with clear visibility.',
                },
                {
                  title: 'Progress Tracking',
                  desc: 'Track completion of key results with real-time updates.',
                },
                {
                  title: 'Role-Based Access',
                  desc: 'Customized views and permissions for every team member.',
                },
                {
                  title: 'Insights & Dashboards',
                  desc: 'Visual reports to keep leadership and teams aligned.',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-6 border rounded-lg shadow hover:shadow-lg transition"
                  data-aos="fade-up"
                >
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50 px-6" data-aos="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">What our users say</h2>
            <p className="text-lg italic text-gray-700 mb-4">
              “MyOKR made it super easy to align our remote teams and keep track of our strategic goals. It's simple, visual and effective.”
            </p>
            <p className="text-gray-800 font-semibold">— Arjun Mehta, CTO at NexaTech</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white text-center px-6" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">Start building better outcomes with MyOKR</h2>
          <Link
            to="/register"
            className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            Create Your Free Account
          </Link>
        </section>
      </main>
    </>
  );
}

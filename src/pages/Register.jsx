import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    dob: '',
    company: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you'd send formData to your backend here
    console.log(formData);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="bg-white/90 w-full max-w-md p-8 rounded-lg shadow-xl border border-blue-100 backdrop-blur">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-blue-800 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-blue-300 p-3 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-blue-800 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-blue-300 p-3 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-blue-800 mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              placeholder="+91 9876543210"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-blue-300 p-3 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-blue-800 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-blue-300 p-3 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-blue-800 mb-1">Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-blue-300 p-3 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-blue-800">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

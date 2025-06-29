import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.endsWith('@gmail.com')) {
      setError('Email must end with @gmail.com');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setError('');
    login({ email, role });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="bg-white/90 w-full max-w-md p-8 rounded-lg shadow-xl border border-blue-100 backdrop-blur relative">
        
        {/* Back Button */}
        <Link to="/" className="absolute top-3 left-4 text-blue-700 text-sm font-semibold hover:underline">
          ← Back to Home
        </Link>

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Welcome.</h2>

        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-800 mb-1">
              Gmail Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@gmail.com"
              className="w-full border border-blue-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-blue-800 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full border border-blue-300 p-3 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-blue-800 mb-1">
              Role
            </label>
            <select
              id="role"
              className="w-full border border-blue-300 p-3 rounded-md bg-blue-50 text-blue-800"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Log In
          </button>

          <div className="text-sm text-center text-blue-700 mt-4 space-y-1">
            <p className="hover:underline cursor-pointer">Forgot password?</p>
            <p className="hover:underline cursor-pointer">Resend verification link</p>
          </div>
        </form>

        <div className="mt-6 border-t pt-4 text-center text-sm text-blue-800">
          New?{' '}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Sign up for an account.
          </Link>
        </div>
      </div>
    </div>
  );
}

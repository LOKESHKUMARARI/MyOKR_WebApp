import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('employee');

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, role });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="bg-white/90 w-full max-w-md p-8 rounded-lg shadow-xl border border-blue-100 backdrop-blur">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Welcome.</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-800 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-blue-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <p className="hover:underline cursor-pointer">Forgot password (returning users)</p>
            <p className="hover:underline cursor-pointer">
              Resend email verification link (new users)
            </p>
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

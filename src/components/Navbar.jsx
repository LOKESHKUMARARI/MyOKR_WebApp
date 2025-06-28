import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { user } = useAuth();

  const linkClasses = ({ isActive }) =>
    `px-4 py-2 font-medium ${
      isActive
        ? 'text-blue-600 border-b-2 border-blue-600'
        : 'text-gray-800 hover:text-blue-600'
    }`;

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      {/* Left: Logo/Title */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          MyOKR
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/how-it-works" className={linkClasses}>
            How it Works
          </NavLink>
          <NavLink to="/pricing" className={linkClasses}>
            Pricing
          </NavLink>
          <NavLink to="/resources" className={linkClasses}>
            Resources
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
        </div>
      </div>

      {/* Right: Auth */}
      <div className="flex items-center space-x-4">
        {!user ? (
          <>
            <Link to="/register" className="text-blue-600 font-medium hover:underline">
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Login →
            </Link>
          </>
        ) : (
          <span className="text-sm text-gray-500">Welcome, {user.email}</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

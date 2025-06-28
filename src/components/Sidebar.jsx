import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const linkClasses = ({ isActive }) =>
    `block px-3 py-2 rounded transition ${
      isActive ? 'bg-yellow-500 text-gray-900 font-semibold' : 'hover:text-yellow-400'
    }`;

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-5 flex flex-col">
      <h2 className="text-2xl font-bold mb-8">MyOKR</h2>
      <nav className="flex-1 space-y-2">
        <NavLink to="/dashboard" className={linkClasses}>Dashboard</NavLink>
        <NavLink to="/okrs" className={linkClasses}>OKRs</NavLink>
        <NavLink to="/teams" className={linkClasses}>Teams</NavLink>
      </nav>
      <button
        onClick={handleLogout}
        className="mt-auto bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-semibold"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;

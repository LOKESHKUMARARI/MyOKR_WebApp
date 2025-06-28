import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-5 flex flex-col">
      <h2 className="text-xl font-bold mb-6">MyOKR</h2>
      <nav className="flex-1 space-y-3">
        <NavLink to="/dashboard" className="block hover:text-yellow-400">Dashboard</NavLink>
        <NavLink to="/okrs" className="block hover:text-yellow-400">OKRs</NavLink>
        <NavLink to="/teams" className="block hover:text-yellow-400">Teams</NavLink>
      </nav>
      <button
        onClick={handleLogout}
        className="mt-auto bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;

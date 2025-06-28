import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import OKRs from './pages/OKRs';
import PrivateRoute from './components/PrivateRoute';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/okrs"
          element={
            <PrivateRoute>
              <OKRs />
            </PrivateRoute>
          }
        />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

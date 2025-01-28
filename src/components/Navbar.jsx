import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Define routes where the navbar should not be displayed
  const excludedRoutes = ["/signup", "/login"];

  // Check if the current path is in the excluded routes
  if (excludedRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Anti-Corruption
        </Link>
        <div className="space-x-4">
          <Link to="/home" className="text-white hover:text-blue-200">
            Home
          </Link>
          <Link to="/login" className="text-white hover:text-blue-200">
            Login
          </Link>
          <Link to="/signup" className="text-white hover:text-blue-200">
            Sign Up
          </Link>
          <Link to="/user" className="text-white hover:text-blue-200">
            User Dashboard
          </Link>
          <Link to="/admin" className="text-white hover:text-blue-200">
            Admin Dashboard
          </Link>
          <Link
            to="/submit-complaint"
            className="text-white hover:text-blue-200"
          >
            Submit Complaint
          </Link>
        </div>
      </div>
    </nav>
  );
}

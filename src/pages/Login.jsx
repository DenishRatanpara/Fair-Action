import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"; // Import axios for API requests

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(""); // State to store error messages

  const { username, password } = formData;
  const navigate = useNavigate();

  // Handle input changes
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ username, password });
      const res = await axios.post(
        "https://sutex-backend.onrender.com/api/auth/login/",
        body,
        config
      );

      if (res && res.data) {
        // Save the token to localStorage
        localStorage.setItem("token", res.data.token);
        // Redirect to home page after successful login
        navigate("/home");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        if (err.response.data.non_field_errors) {
          setError("Invalid username or password.");
        } else {
          setError("Login failed. Please try again.");
        }
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Welcome Back
        </h2>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={onChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-700">
          Don't have an account?{" "}
          <Link className="text-blue-500 hover:underline" to="/register">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

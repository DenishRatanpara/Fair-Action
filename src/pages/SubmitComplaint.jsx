import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SubmitComplaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComplaint = {
      id: Date.now(),
      title,
      description,
      city,
      status: "Pending",
    };
    const existingComplaints =
      JSON.parse(localStorage.getItem("complaints")) || [];
    const updatedComplaints = [...existingComplaints, newComplaint];
    localStorage.setItem("complaints", JSON.stringify(updatedComplaints));
    alert("Complaint submitted successfully!");
    navigate("/user");
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96 animate-fade-in"
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Submit a Complaint
        </h2>
        <input
          type="text"
          placeholder="Complaint Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Complaint Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows="5"
          required
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

import { useState, useEffect } from "react";
import ComplaintCard from "../components/ComplaintCard";

export default function UserDashboard() {
  const [complaints, setComplaints] = useState([]);

  // Fetch complaints from localStorage
  useEffect(() => {
    const storedComplaints =
      JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(storedComplaints);
  }, []);

  // Function to delete a complaint
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this complaint?"
    );
    if (confirmDelete) {
      const updatedComplaints = complaints.filter(
        (complaint) => complaint.id !== id
      );
      setComplaints(updatedComplaints);
      localStorage.setItem("complaints", JSON.stringify(updatedComplaints));
      alert(`Complaint ${id} has been deleted.`);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">
          Your Complaints
        </h1>
        {complaints.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complaints.map((complaint) => (
              <ComplaintCard
                key={complaint.id}
                complaint={complaint}
                isAdmin={false}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-700 text-lg mb-4">
              No complaints submitted yet.
            </p>
            <a
              href="/submit-complaint"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit a Complaint
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

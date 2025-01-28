import { useState, useEffect } from "react";
import ComplaintCard from "../components/ComplaintCard";

export default function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);

  // Fetch complaints from localStorage
  useEffect(() => {
    const storedComplaints =
      JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(storedComplaints);
  }, []);

  // Function to update complaint status
  const updateComplaintStatus = (id, status) => {
    const updatedComplaints = complaints.map((complaint) =>
      complaint.id === id ? { ...complaint, status } : complaint
    );
    setComplaints(updatedComplaints);
    localStorage.setItem("complaints", JSON.stringify(updatedComplaints));
  };

  // Handle Accept button click
  const handleAccept = (id) => {
    updateComplaintStatus(id, "Accepted");
    alert(`Complaint ${id} has been accepted.`);
  };

  // Handle Reject button click
  const handleReject = (id) => {
    updateComplaintStatus(id, "Rejected");
    alert(`Complaint ${id} has been rejected.`);
  };

  // Handle Resolve button click
  const handleResolve = (id) => {
    updateComplaintStatus(id, "Resolved");
    alert(`Complaint ${id} has been resolved.`);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complaints.map((complaint) => (
            <ComplaintCard
              key={complaint.id}
              complaint={complaint}
              isAdmin={true}
              onAccept={handleAccept}
              onReject={handleReject}
              onResolve={handleResolve} // Pass the resolve handler to the ComplaintCard
            />
          ))}
        </div>
      </div>
    </div>
  );
}

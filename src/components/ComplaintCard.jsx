export default function ComplaintCard({ complaint, isAdmin, onDelete }) {
  // Determine status color
  const statusColor = {
    Pending: "text-yellow-600",
    Accepted: "text-green-600",
    Rejected: "text-red-600",
  }[complaint.status];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-blue-800 mb-2">
        {complaint.title}
      </h3>
      <p className="text-gray-700 mb-2">
        <span className="text-1xl fw-bold">City:</span>
        {complaint.city}
      </p>
      <p className="text-gray-700 mb-4">{complaint.description}</p>
      <p className="text-sm text-gray-500">
        Status:{" "}
        <span className={`font-semibold ${statusColor}`}>
          {complaint.status}
        </span>
      </p>
      {!isAdmin && (
        <button
          onClick={() => onDelete(complaint.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 mt-4"
        >
          Delete
        </button>
      )}
    </div>
  );
}

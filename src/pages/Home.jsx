export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-4 animate-fade-in">
          Welcome to the Anti-Corruption Platform
        </h1>
        <p className="text-xl text-gray-700 mb-8 animate-fade-in-up">
          Report corruption and make a difference!
        </p>
        <a
          href="/submit-complaint"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 animate-bounce"
        >
          Submit a Complaint
        </a>
      </div>
    </div>
  );
}
  
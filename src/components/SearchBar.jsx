import { Search } from "lucide-react";

export default function SearchBar({ searchId, onSearchChange, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Search Employee</h2>
        <p className="text-sm text-gray-600 mb-4">
          Enter an employee ID to find specific employee records. Leave empty to view all employees.
        </p>
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter Employee ID (e.g., 1, 2, 3...)"
          value={searchId}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={onSearch}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium"
        >
          <Search size={20} />
          Search
        </button>
      </div>
    </div>
  );
}

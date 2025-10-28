import React, { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";
import EmployeeDetail from "../components/EmployeeDetail";
import { Data as result } from "../../DummyData/Data";
import LoadingSpinner from "../components/LoadingSpinner";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummy.restapiexample.com/api/v1/employees"); //api is giving 429 rate limit error so used dummyData
      //   const result = await response.json();

      if (result.status === "success" && result.data) {
        setEmployees(result.data);
        setFilteredEmployees(result.data);
      } else {
        setError("Failed to load employee data");
      }
    } catch (err) {
      setError("Error fetching employee data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchId.trim() === "") {
      setFilteredEmployees(employees);
      return;
    }

    const filtered = employees.filter((emp) => emp.id.toString() === searchId.trim());
    setFilteredEmployees(filtered);
  };

  const handleDelete = (id) => {
    const updated = employees.filter((emp) => emp.id !== id);
    setEmployees(updated);

    if (searchId.trim() === "") {
      setFilteredEmployees(updated);
    } else {
      setFilteredEmployees(updated.filter((emp) => emp.id.toString() === searchId.trim()));
    }
  };

  const handleEdit = (employeeName) => {
    alert(`Edit functionality - This button is for display purposes only\nEmployee: ${employeeName}`);
  };

  const handleClearSearch = () => {
    setSearchId("");
    setFilteredEmployees(employees);
  };

  if (selectedEmployee) {
    return <EmployeeDetail employee={selectedEmployee} onBack={() => setSelectedEmployee(null)} />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">Employee Dashboard</h1>
          <p className="text-lg text-gray-600">Manage and view employee information with ease</p>
        </div>

        {/* search bar */}
        <SearchBar searchId={searchId} onSearchChange={setSearchId} onSearch={handleSearch} />

        {/* Instructions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>
              • <strong>Click on any card</strong> to view detailed employee information
            </li>
            <li>
              • <strong>Delete button</strong> removes the employee from the list (local state only)
            </li>
            <li>
              • <strong>Edit button</strong> is for display purposes and shows a notification when clicked
            </li>
            <li>
              • Use the <strong>search bar</strong> above to filter employees by their ID
            </li>
          </ul>
        </div>

        {/* Loading  */}
        {loading && <LoadingSpinner message="Loading Employee data..." />}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 font-medium">{error}</p>
          </div>
        )}

        {/*  if no found */}
        {!loading && !error && filteredEmployees.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <p className="text-yellow-700 font-medium">No employees found with ID: {searchId}</p>
            <button
              onClick={handleClearSearch}
              className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* all employee grid */}
        {!loading && !error && filteredEmployees.length > 0 && (
          <div>
            <div className="mb-4 text-gray-600">
              Showing <strong>{filteredEmployees.length}</strong> employee{filteredEmployees.length !== 1 ? "s" : ""}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEmployees.map((employee) => (
                <EmployeeCard
                  key={employee.id}
                  employee={employee}
                  onEdit={() => handleEdit(employee.employee_name)}
                  onDelete={() => handleDelete(employee.id)}
                  onClick={() => setSelectedEmployee(employee)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

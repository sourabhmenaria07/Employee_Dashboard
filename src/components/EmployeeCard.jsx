import { Edit, Trash2, User } from "lucide-react";

export default function EmployeeCard({ employee, onEdit, onDelete, onClick }) {
  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit();
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
    >
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-20 h-20 bg-linear-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
            <User size={40} className="text-white" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 text-center mb-4">{employee.employee_name}</h3>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-sm">
              ID: <strong>{employee.id}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-sm">
              Salary: <strong> ${employee.employee_salary.toLocaleString()}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-sm">
              Age: <strong>{employee.employee_age} years</strong>
            </span>
          </div>
        </div>

        <div className="flex gap-2 pt-4 border-t border-gray-200">
          <button
            onClick={handleEdit}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
          >
            <Edit size={16} />
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

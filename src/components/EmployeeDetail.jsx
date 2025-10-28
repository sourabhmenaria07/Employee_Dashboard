import { ArrowLeft, Briefcase, Calendar, DollarSign, User } from "lucide-react";
import React from "react";

export default function EmployeeDetail({ employee, onBack }) {
  return (
    <div className="min-h-screen bg-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>
          <div className="flex items-center justify-center mb-8">
            <div className="w-32 h-32 bg-linear-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
              <User size={64} className="text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">{employee.employee_name}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <User size={24} className="text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-700">Employee ID</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800 ml-9">{employee.id}</p>
            </div>

            <div className="bg-green-100 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign size={24} className="text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-700">Annual Salary</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800 ml-9">{employee.employee_salary.toLocaleString()}</p>
            </div>

            <div className="bg-purple-100 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <Calendar size={24} className="text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-700">Age</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800 ml-9">{employee.employee_age} years</p>
            </div>

            <div className="bg-orange-100 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase size={24} className="text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-700">Name</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800 ml-9">{employee.employee_name}</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              This is a detailed view of the employee record. Use the back button to return to the dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

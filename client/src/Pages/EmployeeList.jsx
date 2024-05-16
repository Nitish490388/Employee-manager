import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();

  const employees = [
    { id: 1, name: 'Ayaan', age: 26 },
    { id: 2, name: 'Ahana', age: 22 },
    { id: 3, name: 'Peter', age: 40 },
    { id: 4, name: 'Virat', age: 30 },
    { id: 5, name: 'Rohit', age: 32 },
    { id: 6, name: 'Dhoni', age: 37 }
  ];

  return (
    <div>
      <div className="bg-yellow-300 p-2 ">
        Employee List
      </div>
      <div className="flex items-center justify-end gap-[200px] px-20">
        <div>Total count: 4
        </div>
        <button className="bg-green-400 px-4 hover:bg-green-700 transition-colors"
          onClick={() => {
            navigate("/createEmployee");
          }}
        >Create Employee</button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Age</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{employee.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{employee.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{employee.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;

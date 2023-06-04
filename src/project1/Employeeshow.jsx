import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Employeeshow.css'; // Import the CSS file for styling

const Employeeshow = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/employees');
      setEmployees(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="col-xl-7">
      <h1>Employee List</h1>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td>
              <td>{employee.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employeeshow;

import React, { useState } from 'react';
import axios from 'axios';
import './css/CreateEmployee.css'; // Import CSS file for styling

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    designation: '',
    department: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/employees', formData);
      alert('Employee created successfully');
      setFormData({
        first_name: '',
        last_name: '',
        designation: '',
        department: '',
        email: ''
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h1>Create Employee</h1>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateEmployee;

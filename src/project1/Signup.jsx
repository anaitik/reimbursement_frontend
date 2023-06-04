import React, { useState } from 'react';
import axios from 'axios';
import './css/Signup.css'; // Import CSS file for styling

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/users', formData);
      alert('Signup successful');
      // Optionally, you can redirect the user to another page after successful signup
      // window.location.href = '/dashboard';
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleLogin = () => {
    // Handle login button click here
    // Redirect the user to the login page or trigger the login functionality
  };

  return (
    <div>
      <h1>Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select id="role" name="role" value={formData.role} onChange={handleChange} size="2">
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;

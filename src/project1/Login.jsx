import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Login.css'; // Import CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/login', formData);
      alert('Login successful');
      // Redirect the user to the desired page after successful login
      // Replace 'dashboard' with the appropriate route
      window.location.href = '/dashboard';
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="login-container"> {/* Apply CSS class */}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/">Signup</Link>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import './css/CreateBill.css'; // Import CSS file

const CreateBill = () => {
  const [formData, setFormData] = useState({
    amount: 0,
    bill_type: '',
    employee_id: 0
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/bills', formData);
      alert('Bill created successfully');
      // Reset the form fields after successful submission
      setFormData({
        amount: 0,
        bill_type: '',
        employee_id: 0
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="create-bill-container">
      <h1>Create Bill</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
        </div>
        <div>
          <label>Bill Type</label>
          <input type="text" name="bill_type" value={formData.bill_type} onChange={handleChange} />
        </div>
        <div>
          <label>Employee ID</label>
          <input type="number" name="employee_id" value={formData.employee_id} onChange={handleChange} />
        </div>
        <button type="submit">Create Bill</button>
      </form>
    </div>
  );
};

export default CreateBill;

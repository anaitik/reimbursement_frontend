import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/AdminBillShow.css'; // Import CSS file for styling

const AdminBillShow = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/admin_bills');
      setBills(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h1>Admin Bill List</h1>
      <table className="bill-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Bill Type</th>
            <th>Status</th>
            <th>Submitted By</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.amount}</td>
              <td>{bill.bill_type}</td>
              <td>{bill.status}</td>
              <td>{bill.submitted_by}</td>
              <td>{bill.created_at}</td>
              <td>{bill.updated_at}</td>
              <td>{bill.employee_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBillShow;

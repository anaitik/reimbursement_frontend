import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/Navbar.css'; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link" activeClassName="active-link" exact>
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Employee" className="navbar-link" activeClassName="active-link">
            Employees
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/CreateEmployee" className="navbar-link" activeClassName="active-link">
            Create Employee
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Bills" className="navbar-link" activeClassName="active-link">
            Bills
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/UpdateEmployee" className="navbar-link" activeClassName="active-link">
            Update Employee
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Login" className="navbar-link" activeClassName="active-link">
            Login
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Createbill" className="navbar-link" activeClassName="active-link">
            Create Bill
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

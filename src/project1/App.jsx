import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import AdminBillShow from './Adminbillshow'
import Employeeshow from './Employeeshow'
import Createemployee from './Createemployee'
import Updateemployee from './Updateemployee'
import Signup from './Signup'
import Login from './Login'
import CreateBill from './Createbill'
import Footer from './Footer'

const app = () => {
  return (
    <>
      <Navbar/>
      <br/>
      <Routes>
      <Route path='/' element={<Signup/>}/>
        <Route path='/Employee' element={<Employeeshow/>}/>
        <Route path='/CreateEmployee' element={<Createemployee/>}/>
        <Route path='/Bills' element={<AdminBillShow/>}/>
        <Route path='/UpdateEmployee' element={<Updateemployee/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Createbill' element={<CreateBill/>}/>
      </Routes>
      <br/>
      <Footer/>
    </>
  )
}

export default app
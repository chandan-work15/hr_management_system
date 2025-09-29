import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Employee from './Pages/Employee';
import Attendance from './Pages/Attendance';
import LeaveRequest from './Pages/LeaveRequest';
import Login from './Pages/Login';
import MonthlyAttendance from './Pages/MonthlyAttendance';
import Salary from './Pages/Salary';
import Archives from './Pages/Archives';
import EditAttendance from './Pages/EditAttendance';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/hr-management/admin'>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/employee' element={<Employee />}/>
      <Route path='/archives' element={<Archives />} />
      <Route path='/attendance' element={<Attendance/>} />
      <Route path='/leave-request' element={<LeaveRequest/>} />
      <Route path='/employee' element={<Employee/>} />
      <Route path='/attendance' element={<Attendance />} />
      <Route path='/monthly-attendance' element={<MonthlyAttendance />} />
      <Route path='/edit-attendance' element={<EditAttendance />} />
      <Route path='/leave-request' element={<LeaveRequest />} />
      <Route path='/salary' element={<Salary />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

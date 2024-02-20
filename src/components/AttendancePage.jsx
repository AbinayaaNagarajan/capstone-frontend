// AttendancePage.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
//import CryptoJS from 'crypto-js';

const AttendancePage = () => {
  const [attendanceData, setAttendanceData] = useState({
    name: '',
    date: '',
    month: '',
    status: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAttendanceData({ ...attendanceData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://capstone-backend-4gqq.onrender.com/attendance/saveAttendance', attendanceData , 
      {
        headers: {
          // Request headers
          'auth': 'mypassword'
        }
      }
      );
      console.log(response);
      if (response.status === 200) {
        setSuccessMessage('Attendance recorded successfully');
        setAttendanceData({
          name: '',
          date: '',
          month: '',
          status: '',
        });
        // You can perform additional actions here, such as redirecting or updating UI
      } else {

        console.error('Failed to record attendance');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="content-container">
        <h1>Attendance Page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={attendanceData.name} onChange={handleInputChange} />
          </label>
          <label>
            Date:
            <input type="text" name="date" value={attendanceData.date} onChange={handleInputChange} />
          </label>
          <label>
            Month:
            <input type="text" name="month" value={attendanceData.month} onChange={handleInputChange} />
          </label>
          <label>
            Status:
            <input type="text" name="status" value={attendanceData.status} onChange={handleInputChange} />
          </label>
          <button type="submit">Submit Attendance</button>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default AttendancePage;

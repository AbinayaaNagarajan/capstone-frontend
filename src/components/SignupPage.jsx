// SignupPage.js

import React, { useState } from 'react';
import Axios from 'axios';
import Sidebar from './Sidebar'; // Import the Sidebar component

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    grade: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  // const handleAddStudent = async() => {
  //   console.log(newStudent);
  //   // Send a POST request to add a new student
  //   try{
  // const response = await Axios.post('http://localhost:3000/students/addStudent', newStudent);
  // console.log(response);
  // setStudents([...students, response.data]); // Update the students list with the new student
  // setNewStudent({ name: '', grade: '' , batch: ''}); // Clear the input fields
  //   }catch(error){
  //       console.error('Error adding student:', error);
  //     }
  // };

const handleEnroll = async() =>{
  console.log();
  try{
    const response = await Axios.post('http://localhost:3000/students/addStudent', newStudent);
    setStudents([...students, response.data]); // Update the students list with the new student
    setNewStudent({ username: '',password:'', grade: '' , studentName: ''}); // Clear the input fields
    console.log(response);

  }catch(error){
    console.error('Error adding student:', error);
  }

};

  // const handleEnroll = (e) => {
  //   e.preventDefault();

  //   // Send a POST request to add a new student
  //   Axios.post('http://localhost:3000/students/addStudent', formData)
  //     .then((response) => {
  //       console.log('Student added successfully:', response.data);
  //       // You can redirect or handle success as needed
  //     })
  //     .catch((error) => {
  //       console.error('Error adding student:', error);
  //     });
  // };

  return (
    <div className="signup-layout">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <div className="content signup-page">
        <h2>Enroll Now</h2>
        <form onSubmit={handleEnroll}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="name">Student Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleInputChange}
            required
          />

          <button type="submit">Enroll</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

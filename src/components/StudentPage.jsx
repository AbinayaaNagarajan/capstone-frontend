// StudentPage.js

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from './Sidebar';

const StudentPage = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', grade: '', batch:'' });
  const batchOptions = [ 1,  2,  3];

  useEffect(  () => {
    async function fetchData(){
    try{
    // Fetch all students from the backend upon component mount
   const response = await Axios.get('https://tutor-student.onrender.com/students/getAllStudent')
   console.log ("Line17", response.data);
   setStudents(response.data);
    }catch(error) {
        console.error('Error fetching students:', error);
      };
    }
    fetchData();
  }, []);

  const handleAddStudent = async() => {
    console.log(newStudent);
    // Send a POST request to add a new student
    try{
  const response = await Axios.post('https://tutor-student.onrender.com/students/addStudent', newStudent);
  console.log(response);
  setStudents((prevStudents) => [...prevStudents, response.data]); // Update the students list with the new student
  setNewStudent({ name: '', grade: '' , batch: ''}); // Clear the input fields
    }catch(error){
        console.error('Error adding student:', error);
      }
  };

  const handleRemoveStudent = async (studentId) => {
    console.log();
    try{
    // Send a DELETE request to remove a student
    const response = await Axios.delete(`https://tutor-student.onrender.com/students/deleteStudent/${studentId}`);
    console.log(response);
    setStudents(students.filter((student) => student._id !== studentId)); // Update the students list
    }catch(error){
        console.error('Error removing student:', error);
      }
  };

  return (
    <div className="student-layout">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <div className="content student-page">
        <h2>Enroll New Student</h2>

        {/* Add Student Form */}
        <div className="add-student-form">
          <h3>Add Student</h3>
          <label>Name: </label>
          <input
            type="text"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <label>Grade: </label>
          <input
            type="text"
            value={newStudent.grade}
            onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
          />

          <label>Batch: </label>
          <select
            value={newStudent.batch}
            onChange={(e) => setNewStudent({ ...newStudent, batch: e.target.value })}
          >
            <option value="" disabled>Select Batch</option>

            {batchOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            
          </select>
          <button onClick={handleAddStudent}>Add Student</button>
        </div>

        {/* List of Students */}
        <div className="student-list">
          <h3>List of Students</h3>
          <ul>
            {students.map((student) => (
              <li key={student._id} className="student-item">
                <div>
                  <span className="student-name">Name: <i>{student.name}</i></span>
                  <span className="student-grade">Grade: {student.grade}</span>
                  <span className="student-batch">Batch: {student.batch}</span>
                </div>
                <button onClick={() => handleRemoveStudent(student._id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;

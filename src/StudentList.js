import React, { useEffect, useState } from "react";
import axios from "axios"; 


function StudentList() {
  const [students, setStudents] = useState([]);
 

  useEffect(() => {
    fetchData();
  });


  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/student");
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  const deletedata = (id) => {
    axios.delete(`http://localhost:3000/student/${id}`, deletedata)
  };
  const updatedata = (id) => {
    axios.put(`http://localhost:3000/student/${id}`, updatedata)
    
  };


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Branch</th>
            <th>Sem</th>
            <th>USN</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.branch}</td>
                <td>{student.sem}</td>
                <td>{student.usn}</td>
                <td>{student.phone}</td>
                <button className="update-btn" onClick={() =>{updatedata(student._id)}}>update</button>
                <button className="delete-btn" onClick={() =>{deletedata(student._id)}}>Delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default StudentList;

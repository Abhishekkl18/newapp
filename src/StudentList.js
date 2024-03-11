import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [updatedStudentData, setUpdatedStudentData] = useState({
    name: "",
    email: "",
    branch: "",
    sem: "",
    usn: "",
    phone: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/student");
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deletedata = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/student/${id}`);
      // Remove the deleted student from the state
      setStudents(students.filter((student) => student._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const openUpdatePopup = (student) => {
    setSelectedStudent(student);
    setUpdatedStudentData({
      name: student.name,
      email: student.email,
      branch: student.branch,
      sem: student.sem,
      usn: student.usn,
      phone: student.phone,
    });
    setShowUpdatePopup(true);
  };

  const closeUpdatePopup = () => {
    setShowUpdatePopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/student/${selectedStudent._id}`,
        updatedStudentData
      );
      // Update the student data in the state
      setStudents(
        students.map((student) => {
          if (student._id === selectedStudent._id) {
            return {
              ...student,
              ...updatedStudentData,
            };
          }
          return student;
        })
      );
      setShowUpdatePopup(false);
    } catch (error) {
      console.log(error);
    }
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
                <td>
                  <button
                    className="update-btn"
                    onClick={() => openUpdatePopup(student)}
                  >
                    Update
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deletedata(student._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {showUpdatePopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closeUpdatePopup}>
              &times;
            </span>
            <h2>Update Student</h2>
            <form>
              <input
                type="text"
                name="name"
                value={updatedStudentData.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="email"
                value={updatedStudentData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="branch"
                value={updatedStudentData.branch}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="sem"
                value={updatedStudentData.sem}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="usn"
                value={updatedStudentData.usn}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="phone"
                value={updatedStudentData.phone}
                onChange={handleInputChange}
              />
              <button type="button" onClick={handleUpdate}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentList;

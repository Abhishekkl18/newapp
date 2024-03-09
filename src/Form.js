import React, { useState } from "react";
import axios from "axios";


function Form() {
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [branch, setBranch] = useState("");
  const [email, setEmail] = useState("");
  const [sem, setSem] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();


    const data = {
      name: name,
      usn: usn,
      branch: branch,
      email: email,
      sem: sem,
      phone: phone,
    }; // creating the object to store these data
    try {
      const response = await axios.post("http://localhost:3000/student", data);
      console.log(response);
      alert("Created");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };


  return (
    <div>
      <h2>Add new Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Student Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
           
          />
        </div>
        <div className="form-control">
          <label>Student USN</label>
          <input
            type="text"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
           
          />
        </div>
        <div className="form-control">
          <label>Branch</label>
          <input
            type="text"
            value={branch} 
            onChange={(e) => setBranch(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Sem</label>
          <input
            type="text"
            value={sem}
            onChange={(e) => setSem(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Phone number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;


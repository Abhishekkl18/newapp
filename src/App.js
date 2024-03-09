// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import NavBar from "./NavBar";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Skills from "./skills";

// function App() {
//   const [name, setName] = useState("");
//   const [Email, setEmail] = useState("");
//   const [phonenumber, setphonenumber] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       Email: Email,
//       name: name,
//       phonenumber: phonenumber,
//     };
//     console.log(data);
//   };
//   const renderFormComponent = () => {
//     return (
//       <form>
//         <h1>{name}</h1>
//         Name:
//         <input
//           id="text1"
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         ></input>
//         <br></br>
//         <h2>{Email}</h2>
//         Email:
//         <input
//           id="text2"
//           type="text"
//           placeholder="Enter your Email"
//           value={Email}
//           onChange={(e) => setEmail(e.target.value)}
//         ></input>
//         <br></br>
//         <h3>{phonenumber}</h3>
//         phonenumber:
//         <input
//           id="text2"
//           type="text"
//           placeholder="Enter your phonenumber"
//           value={phonenumber}
//           onChange={(e) => setphonenumber(e.target.value)}
//         ></input>
//         <br></br>
//         <button onClick={handleSubmit}>Submit</button>
//       </form>
//     );
//   };
//   const HeaderComponent = (props) =>
//   {
//     return <div>Welcome {props.name}</div>
//   };
//   const BannerComponent = (props) =>
//   {
//     return <div>{props.Email}</div>
//   }

//   return (
//     <div className="App">
//       {/* {renderFormComponent()}
//       <HeaderComponent  name="Abhishek"/>
//       <BannerComponent Email="klabhishek16@gmail.com"/> */}
//       <BrowserRouter>
//       <NavBar/>
//       <Routes>
//         <Route path="/home" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/skills" element={<Skills/>}/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Form from './Form';
import StudentList from './StudentList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/list" element={<StudentList/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
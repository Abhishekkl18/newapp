import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css";

function NavBar() {
  return (
    <div>
    {/* <Link to ="/home">Home </Link>
    <Link to="/about">About </Link>
    <Link to="/contact">Contact </Link>
    <Link to="/skills">Skills</Link> */}
    <Link to="/list">All Students</Link>
    <Link to="/">Add new Student</Link>  
    </div>
  );
}

export default NavBar

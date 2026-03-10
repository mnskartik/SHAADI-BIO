import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);



if (
  location.pathname === "/" ||
  location.pathname === "/login" ||
  location.pathname === "/register"
) {
  return null;
}

  const handleLogout = async () => {

    await signOut(auth);

    navigate("/login");

  };

  return (

    <div className="navbar">

      <h2 className="logo">
        <Link to="/dashboard">ShaadiBio</Link>
      </h2>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/dashboard" onClick={()=>setMenuOpen(false)}>
          Dashboard
        </Link>

        <Link to="/create-biodata" onClick={()=>setMenuOpen(false)}>
          Create Biodata
        </Link>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>

  );

};

export default Navbar;
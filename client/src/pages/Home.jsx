import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import heroImage from "../assets/landing.png";

const Home = () => {
  const navigate = useNavigate();

  

  return (
    <div className="hero-container">
      <img src={heroImage} alt="Wedding" className="hero-image" />

      <div className="overlay">
        <div className="hero-content">
          <h1>SHAADIBIO</h1>
          <p>Create Your Perfect Marriage BioData in Minutes</p>

         <button onClick={() => navigate("/register")} className="start-btn">
  Get Started
</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try{

      await createUserWithEmailAndPassword(auth,email,password);

      navigate("/create-biodata");

    }catch(error){

      alert(error.message);

    }

  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>Create Account</h2>

        <form className="auth-form" onSubmit={handleRegister}>

          <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          />

          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          />

          <button type="submit" className="auth-btn">
            Sign Up
          </button>

        </form>

        <p className="auth-switch">
          Already have an account?
          <span onClick={() => navigate("/login")}> Login</span>
        </p>

      </div>

    </div>

  );
};

export default Register;
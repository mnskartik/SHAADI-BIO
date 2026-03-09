import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try{

      await signInWithEmailAndPassword(auth,email,password);

      // redirect after login
      navigate("/create-biodata");

    }catch(error){

      alert(error.message);

    }

  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>Welcome Back</h2>

        <p className="auth-subtitle">
          Login to continue creating your biodata
        </p>

        <form className="auth-form" onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email Address"
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
            Login
          </button>

        </form>

        <p className="auth-switch">
          Don't have an account?
          <span onClick={() => navigate("/register")}> Sign Up</span>
        </p>

      </div>

    </div>

  );

};

export default Login;
import React from "react";
import { Link } from "react-router-dom";
import "../components/login/LoginStyles.css";

const Login = () => {
  return (
    <div class="layout">
      <h1 class="login-h1" id="top">
        COOK SYSTEMS
      </h1>
      <h1 class="login-h1" id="subtitle">
        A FINAL APP
      </h1>
      <form class="login-container" id="login-border">
        <img
          id="login-img"
          src="https://i.ibb.co/SsFJbm2/team-logo.png"
          alt="team-logo"
        />
        <input
          class="login-input"
          placeholder="Username"
          type="text"
          name="username"
        />
        <input
          class="login-input"
          placeholder="Password"
          type="text"
          name="password"
        />
        <Link to="/select-company">
          <button id="login-button">LOG IN</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;

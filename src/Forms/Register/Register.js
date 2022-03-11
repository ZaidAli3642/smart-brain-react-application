import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import "../forms.css";

const Register = ({ onRouteChange, loadUser }) => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onRegisterChange = (event) => {
    const newRegister = { ...register };

    newRegister[event.target.name] = event.target.value;
    setRegister(newRegister);
  };

  const onRegisterSubmit = async () => {
    fetch("https://nameless-mesa-43874.herokuapp.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(register),
    })
      .then((response) => response.json())
      .then((token) => {
        if (token.length > 200) {
          const decodedUser = jwtDecode(token);
          if (decodedUser.id) {
            localStorage.setItem("token", token);
            loadUser(decodedUser);
            onRouteChange("home");
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <div className="signin-register-form">
        <h1 className="signin-register--heading">Register</h1>
        <div className="input-flex">
          <label htmlFor="email">Email</label>
          <input
            className="inputField"
            id="email"
            name="email"
            type="text"
            onChange={onRegisterChange}
          />
        </div>
        <div className="input-flex">
          <label htmlFor="name">Name</label>
          <input
            className="inputField"
            id="name"
            name="name"
            type="text"
            onChange={onRegisterChange}
          />
        </div>
        <div className="input-flex">
          <label htmlFor="password">Password</label>
          <input
            className="inputField"
            id="password"
            name="password"
            type="password"
            onChange={onRegisterChange}
          />
        </div>

        <button onClick={onRegisterSubmit} className="signin-register-button">
          Register
        </button>

        <p className="sr-button" onClick={() => onRouteChange("signin")}>
          Sign in
        </p>
      </div>
    </div>
  );
};

export default Register;

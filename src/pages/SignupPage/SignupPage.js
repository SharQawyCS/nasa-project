import React, { useState } from "react";
import "./Signup.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    username: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Provide a valid email address";
      valid = false;
    }

    if (!formData.number) {
      newErrors.number = "Phone number is required";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    if (!formData.firstname) {
      newErrors.firstname = "Firstname is required";
      valid = false;
    } else if (!/^[a-zA-Z]+$/.test(formData.firstname)) {
      newErrors.firstname = "Firstname must contain only letters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      saveData();
    }
  };

  const saveData = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const { firstname, username, email, password, number } = formData;

    if (users.some((user) => user.email === email)) {
      alert("User already exists, please login");
    } else if (users.some((user) => user.username === username)) {
      alert("Username has been taken");
    } else {
      users.push({ firstname, username, email, password, phone: number });
      localStorage.setItem("users", JSON.stringify(users));
      alert("User successfully signed up!");
      // Redirect to login page
    }
  };

  return (
    <div className="container">
      <form id="form" onSubmit={(e) => e.preventDefault()}>
        <h1>Sign Up</h1>

        <div className="input_box">
          <label>First Name</label>
          <input
            id="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            placeholder="eg.: firstname"
            type="text"
          />
          {errors.firstname && <div className="error">{errors.firstname}</div>}
        </div>

        <div className="input_box">
          <label>Username</label>
          <input
            id="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="eg.: Username"
            type="text"
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>

        <div className="input_box">
          <label>Email</label>
          <input
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="eg.: user@gmail.com"
            type="text"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="input_box">
          <label>
            Phone No. <span>(don't put any spaces)</span>
          </label>
          <input
            id="number"
            value={formData.number}
            onChange={handleInputChange}
            placeholder="eg.: 01234567890"
            type="text"
          />
          {errors.number && <div className="error">{errors.number}</div>}
        </div>

        <div className="input_box">
          <label>Password</label>
          <input
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="eg.: User123$"
            type="password"
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div className="input_box">
          <label>Confirm Password</label>
          <input
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="eg.: User123$"
            type="password"
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </div>

        <button type="button" className="btn submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    if (user_records.some((v) => v.email === email && v.password === password)) {
      let current_user = user_records.find(
        (v) => v.email === email && v.password === password
      );

      localStorage.setItem("email", current_user.email);
      localStorage.setItem("password", current_user.password);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("name", current_user.firstName);
      localStorage.setItem("phone", current_user.phone);
      localStorage.setItem("username", current_user.username);
      localStorage.setItem("isLoggedIn", true);
      window.location.href = "http://localhost:3000/";
    } else {
      alert("Login failed");
      localStorage.setItem("isLoggedIn", false);
    }
  };

  return (
    <div className="container">
      <form id="form" action="/">
        <h1>Log In</h1>

        <div className="input_box">
          <label>Email</label>
          <input
            id="email"
            className="email"
            placeholder="eg.: user@gmail.com"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="error"></div>
        </div>

        <div className="input_box">
          <label>Password</label>
          <input
            id="password"
            className="password"
            placeholder="eg.: User123$"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error"></div>
        </div>
        <button type="button" onClick={handleLogin} className="btn submit" id="BTN">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
//import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Please fill up all fields!");
      alert("Please fill up all fields!");

      setSuccess(false);
      return;
    } else {
      setError("");
      setSuccess(true);

      alert(
        "Welcome to schedule page!Login Successfully! Redirecting SceduluevPage!"
      );

      //setSuccess(true);
      navigate("/schedule");

      return;
    }
  };
  return (
    <div>
      <h1>Welcome to Login Page</h1>

      <label>Username</label>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />

      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default Login;

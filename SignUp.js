//import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [success, setSuccesss] = useState(false);
  const navigate = useNavigate();
  const handleSignup = () => {
    if (!username.trim() || !password.trim() || !confirmpassword.trim()) {
      setError("Please fill up all fields!");
      alert("Please fill up all fields!");

      setSuccesss(false);
      return;
    }
    if (password != confirmpassword) {
      setError("Password doesn't match!");
      alert("Password doesn't match!");

      setSuccesss(false);
      return;
    } else {
      setError("");
      alert(
        "Welcome to login page!Sign Up Successfully! Redirecting Login Page!"
      );

      setSuccesss(true);
      navigate("/login");

      return;
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <p>Welcome to Sign Up Page</p>
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
      <label>Confirm Password</label>
      <input
        type="password"
        placeholder="Enter your password again"
        value={confirmpassword}
        onChange={(e) => setConfirmpassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSignup}>Sign Up</button>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default Signup;

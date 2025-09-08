import React, { useState, Component } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Dashboard</h1>
      <Link to="/signup">Go to Signup</Link>
      <br />
      <br />
      <Link to="/login">Go to login</Link>
      <br />
      <br />
      <Link to="/schedule">Go to Schedule</Link>
    </div>
  );
}

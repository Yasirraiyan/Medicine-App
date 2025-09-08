import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/DashBoard";
import Schedule from "./components/Schedule";
import DailySummary from "./components/DailySummary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/dailysummary" element={<DailySummary />} />
      </Routes>
    </Router>
  );
}

export default App;

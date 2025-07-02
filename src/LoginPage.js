import React, { useState } from "react";
import "./LoginPage.css";

const userTypes = [
  { value: "admin", label: "Admin" },
  { value: "manager", label: "Manager" },
  { value: "engineering", label: "Engineering" },
  { value: "hr", label: "HR" },
  { value: "finance", label: "Finance" },
];

export default function LoginPage({ onLogin }) {
  const [userType, setUserType] = useState(userTypes[0].value);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter username and password.");
      return;
    }
    setError("");
    onLogin(userType);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>User Type</label>
        <select value={userType} onChange={e => setUserType(e.target.value)}>
          {userTypes.map(u => (
            <option key={u.value} value={u.value}>{u.label}</option>
          ))}
        </select>
        <label>Username</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
        {error && <div className="login-error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
} 
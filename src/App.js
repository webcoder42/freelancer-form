import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import Sidebar from "./Sidebar";
import "./App.css";

function MainPage({ onGoToLogin }) {
  return (
    <div className="main-page">
      <h1>Welcome to Freelancer Dashboard System</h1>
      <p style={{ maxWidth: 500, margin: '1.5rem auto', fontSize: '1.1rem', color: '#444' }}>
        This platform provides secure access to dashboards for Admins, Managers, and Sector Users (Engineering, HR, Finance, etc.).
        Please proceed to login to access your personalized dashboard and tools.
      </p>
      <button className="main-login-btn" onClick={onGoToLogin}>Go to Login</button>
    </div>
  );
}

function StatBox({ icon, title, value, color }) {
  return (
    <div className="stat-box" style={{ borderLeft: `6px solid ${color}` }}>
      <div className="stat-icon" style={{ color }}>{icon}</div>
      <div className="stat-info">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
      </div>
    </div>
  );
}

function GeneralDashboard() {
  return (
    <div className="dashboard-content">
      <h2>General Overview</h2>
      <div className="stat-box-row">
        <StatBox icon="📊" title="Active Projects" value="12" color="#007bff" />
        <StatBox icon="👥" title="Team Members" value="34" color="#28a745" />
        <StatBox icon="⏰" title="Pending Tasks" value="7" color="#ffc107" />
        <StatBox icon="✅" title="Completed" value="21" color="#17a2b8" />
      </div>
      <p>Welcome to the General Dashboard.</p>
    </div>
  );
}

function FinancialDashboard() {
  return (
    <div className="dashboard-content">
      <h2>Financial Dashboard</h2>
      <div className="stat-box-row">
        <StatBox icon="💰" title="Revenue" value="$120,000" color="#007bff" />
        <StatBox icon="📉" title="Expenses" value="$45,000" color="#dc3545" />
        <StatBox icon="📈" title="Profit" value="$75,000" color="#28a745" />
        <StatBox icon="💳" title="Invoices" value="15" color="#ffc107" />
      </div>
      <p>Financial stats and charts here.</p>
    </div>
  );
}

function AccountingDashboard() {
  return (
    <div className="dashboard-content">
      <h2>Accounting Dashboard</h2>
      <div className="stat-box-row">
        <StatBox icon="🧾" title="Bills" value="23" color="#007bff" />
        <StatBox icon="📅" title="Due Dates" value="5" color="#dc3545" />
        <StatBox icon="🔍" title="Audits" value="2" color="#28a745" />
        <StatBox icon="💼" title="Accounts" value="8" color="#17a2b8" />
      </div>
      <p>Accounting details and reports.</p>
    </div>
  );
}

function EngineeringDashboard() {
  return (
    <div className="dashboard-content">
      <h2>Engineering Dashboard</h2>
      <div className="stat-box-row">
        <StatBox icon="🛠️" title="Open Issues" value="14" color="#dc3545" />
        <StatBox icon="🚀" title="Deployments" value="3" color="#007bff" />
        <StatBox icon="📝" title="Specs" value="9" color="#ffc107" />
        <StatBox icon="🔧" title="Tools" value="6" color="#28a745" />
      </div>
      <p>Engineering KPIs and project status.</p>
    </div>
  );
}

function CommercialDashboard() {
  return (
    <div className="dashboard-content">
      <h2>Commercial Dashboard</h2>
      <div className="stat-box-row">
        <StatBox icon="🛒" title="Orders" value="42" color="#007bff" />
        <StatBox icon="📦" title="Shipments" value="18" color="#28a745" />
        <StatBox icon="💼" title="Clients" value="11" color="#17a2b8" />
        <StatBox icon="💵" title="Sales" value="$32,000" color="#ffc107" />
      </div>
      <p>Commercial analytics and sales.</p>
    </div>
  );
}

function HRDashboard() {
  return (
    <div className="dashboard-content">
      <h2>HR Dashboard</h2>
      <div className="stat-box-row">
        <StatBox icon="👤" title="Employees" value="56" color="#007bff" />
        <StatBox icon="🎓" title="Trainings" value="4" color="#28a745" />
        <StatBox icon="🏆" title="Awards" value="2" color="#ffc107" />
        <StatBox icon="📝" title="Open Positions" value="3" color="#dc3545" />
      </div>
      <p>HR metrics and employee info.</p>
    </div>
  );
}

function DashboardLayout({ userType }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="dashboard-layout">
      <Sidebar userType={userType} collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />
      <div className="dashboard-main">
        <Routes>
          {(userType === "admin" || userType === "manager") && <Route path="/dashboard/general" element={<GeneralDashboard />} />}
          <Route path="/dashboard/financial" element={<FinancialDashboard />} />
          <Route path="/dashboard/accounting" element={<AccountingDashboard />} />
          <Route path="/dashboard/engineering" element={<EngineeringDashboard />} />
          <Route path="/dashboard/commercial" element={<CommercialDashboard />} />
          <Route path="/dashboard/hr" element={<HRDashboard />} />
          {/* Default route for userType */}
          {userType === "admin" && <Route path="*" element={<Navigate to="/dashboard/general" replace />} />}
          {userType === "manager" && <Route path="*" element={<Navigate to="/dashboard/general" replace />} />}
          {userType === "engineering" && <Route path="*" element={<Navigate to="/dashboard/engineering" replace />} />}
          {userType === "hr" && <Route path="*" element={<Navigate to="/dashboard/hr" replace />} />}
          {userType === "finance" && <Route path="*" element={<Navigate to="/dashboard/financial" replace />} />}
        </Routes>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("main"); // main, login, dashboard
  const [userType, setUserType] = useState(null);

  if (page === "main") {
    return <MainPage onGoToLogin={() => setPage("login")} />;
  }
  if (page === "login") {
    return <LoginPage onLogin={ut => { setUserType(ut); setPage("dashboard"); }} />;
  }
  if (page === "dashboard") {
    return (
      <Router>
        <DashboardLayout userType={userType} />
      </Router>
    );
  }
  return null;
}

export default App;

import React, { useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const sidebarLinks = {
  admin: [
    { to: "/dashboard/general", label: "General Overview" },
    { to: "/dashboard/financial", label: "Financial Dashboard" },
    { to: "/dashboard/accounting", label: "Accounting Dashboard" },
    { to: "/dashboard/engineering", label: "Engineering Dashboard" },
    { to: "/dashboard/commercial", label: "Commercial Dashboard" },
  ],
  manager: [
    { to: "/dashboard/general", label: "General Overview" },
    { to: "/dashboard/financial", label: "Financial Dashboard" },
    { to: "/dashboard/accounting", label: "Accounting Dashboard" },
    { to: "/dashboard/engineering", label: "Engineering Dashboard" },
    { to: "/dashboard/commercial", label: "Commercial Dashboard" },
  ],
  engineering: [
    { to: "/dashboard/engineering", label: "Engineering Dashboard" },
  ],
  hr: [
    { to: "/dashboard/hr", label: "HR Dashboard" },
  ],
  finance: [
    { to: "/dashboard/financial", label: "Financial Dashboard" },
  ],
};

export default function Sidebar({ userType, collapsed, onToggle }) {
  const links = sidebarLinks[userType] || [];
  return (
    <div className={`sidebar-container${collapsed ? " collapsed" : ""}`}>
      <div className="sidebar-header">
        <span>Dashboard</span>
        <button className="sidebar-toggle" onClick={onToggle}>
          {collapsed ? ">" : "<"}
        </button>
      </div>
      <nav className="sidebar-nav">
        {links.map(link => (
          <NavLink key={link.to} to={link.to} className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
} 
import "./layout.scss";

import Navbar from "../../nabar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useContext, useEffect } from "react";

export function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

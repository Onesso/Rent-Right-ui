import "./layout.scss";

import Navbar from "../../nabar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
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

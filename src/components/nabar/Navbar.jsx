import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNotificationStore } from "../../lib/notificationStore";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  //calling context with user data
  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if (currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Rent-Right</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <div className="dashboard-link">
          {currentUser ? (
            <Link to="/dashboard">
              <span>Dashboard</span>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div className="right">
        {currentUser ? (
          <>
            <div className="user">
              <img src={currentUser?.avatar || "/noavatar.png"} alt="" />
              <span>{currentUser?.username}</span>
              <Link to="/profile" className="profile">
                {number > 0 && <div className="notification">{number}</div>}
                <span>Profile</span>
              </Link>
            </div>
          </>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}

        <div className="menuIcon">
          <img src="/menu.png" alt="menu" onClick={() => setOpen(!open)} />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>

          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

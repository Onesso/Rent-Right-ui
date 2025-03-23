import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import {AuthContext} from "../../context/AuthContext";
import {useContext} from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  //calling context with user data
  const { currentUser } = useContext(AuthContext);



  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Rent-Right</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agent</a>
      </div>

      <div className="right">
        {currentUser ? (
          <>
            <div className="user">
              <img
              src={currentUser.userInfo.avatar || "/noavatar.png"}
                alt=""
              />
              <span>{currentUser.userInfo.username}</span>
              <Link to="/profile" className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
          </>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}

        <div className="menuIcon">
          <img src="/menu.png" alt="menu" onClick={() => setOpen(!open)} />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agent</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

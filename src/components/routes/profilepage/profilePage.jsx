import "./profilePage.scss";
import List from "../../list/list";
import Chat from "../../chat/chat";
import apiRequest from "../../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function ProfilePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlelogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      try {
        const res = await apiRequest.post("/auth/logout"); //logout api this deletes the token from the database and on the client too.

        updateUser(null); //logout mechanism. It deletes the user from the local storage
        console.log(res);

        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Logout canceled.");
    }
  };
  return (
    <div className="profilePage">
      <div className="detail">
        <div className="wrapper">
          <div className="title">
            <h1>User information</h1>
            <button>Update profile</button>
          </div>

          <div className="info">
            <span>
              Profile Image:
              <img
                src={currentUser.userInfo.avatar || "/noavatar.png"}
                alt=""
              />
            </span>
            <span>
              Username:<b> {currentUser.userInfo.username}</b>
            </span>
            <span>
              E-mail:<b> {currentUser.userInfo.email}</b>
            </span>
            <button onClick={handlelogout} className="logoutbtn">
              Logout
            </button>
          </div>

          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
        </div>
      </div>

      <div className="chatComponent">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

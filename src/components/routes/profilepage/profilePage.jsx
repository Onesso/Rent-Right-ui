import "./profilePage.scss";
import List from "../../list/list";
import Chat from "../../chat/chat";
import apiRequest from "../../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  const handlelogout = async () => {
    try {
      const res = await apiRequest.post("/auth/logout");

      localStorage.removeItem("user");
      console.log(res);
      alert("You have been logged out successfully.");

      navigate("/");
    } catch (error) {
      console.log(error);
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
                src="https://i.pinimg.com/474x/ea/c4/6d/eac46d291f121d4d27e6017920f71d2d.jpg"
                alt=""
              />
            </span>
            <span>
              Username:<b> Frank Onesso</b>
            </span>
            <span>
              E-mail:<b> odhiambofrank1965@gmail.com</b>
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

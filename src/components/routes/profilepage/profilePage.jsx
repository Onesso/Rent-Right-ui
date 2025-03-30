import "./profilePage.scss";
import List from "../../list/list";
import Chat from "../../chat/chat";
import apiRequest from "../../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function ProfilePage() {
  //get data from the database
  // const data = useLoaderData();
  // console.log(data);
  const { userPosts = [], savedPosts = [], chats = [] } = useLoaderData(); //new
  console.log(chats);
  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlelogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      try {
        const res = await apiRequest.post("auth/logout"); //logout api this deletes the token from the database and on the client too.

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
            <Link to="/profile/update">
              <button>Update profile</button>
            </Link>
          </div>

          <div className="info">
            <span>
              Profile Image:
              <img src={currentUser?.avatar || "/noavatar.png"} alt="" />
            </span>
            <span>
              Username:<b> {currentUser?.username}</b>
            </span>
            <span>
              E-mail:<b> {currentUser?.email}</b>
            </span>
            <button onClick={handlelogout} className="logoutbtn">
              Logout
            </button>
          </div>

          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          {/* <List post={data} /> */}
          <List
            posts={userPosts}
            type="userPosts"
            emptyMessage="You haven't created any listings yet"
          />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          {/* <List post={data} /> */}
          <List
            posts={savedPosts}
            type="savedPosts"
            emptyMessage="You haven't saved any properties yet"
          />
        </div>
      </div>

      <div className="chatComponent">
        <div className="wrapper">
          <Chat chats={chats} />
        </div>
      </div>
    </div>
  );
}

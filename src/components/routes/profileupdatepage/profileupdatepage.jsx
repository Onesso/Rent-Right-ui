import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import apiRequest from "../../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../uploadwidget/uploadWidget";
import { AuthContext } from "../../../context/AuthContext";

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(
    currentUser.avatar ? [currentUser.avatar] : []
  );
  const [error, setError] = useState(""); //save error from the database

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (!window.confirm(`Are you sure you want to update your profile?`)) {
      return;
    }
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    console.log(username, email, password);

    try {
      console.log(currentUser.id);
      const res = await apiRequest.put(`user/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });

      console.log(res.data);
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser?.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser?.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>{error.message}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={
            avatar && avatar.length > 0
              ? avatar[0]
              : currentUser?.avatar || "/noavatar.png"
          }
          alt=""
          className="avatar"
        />

        <UploadWidget
          uwConfig={{
            cloudName: "dxxdvid9d",
            // uploadPreset: "rent-right",
            uploadPreset: "ml_default",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;

import React from "react";
import "./login.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../../lib/apiRequest";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

export default function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    //testing
    console.log("credentials sent to the server: ", username, password);

    try {
      //sending data to the server (url, payload)

      const res = await apiRequest.post("auth/login", {
        username,
        password,
      });

      console.log("Response from the server: ", res.data); //we are getting the username to be used in the profile page

      //save the user information to the local storage
      updateUser(res.data);

    

      navigate("/");
    } catch (error) {
      console.log("error: ", error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="image theme" />
      </div>
    </div>
  );
}

import "./register.scss";
import { useState } from "react";
import apiRequest from "../../../lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log("credentials sent to the server: ", username, email, password);

    try {
      //sending the data to the server
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log("Response from the server: ", res.data);

      navigate("/login");
    } catch (error) {
      console.log("Error: ", error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="home-image" />
      </div>
    </div>
  );
}

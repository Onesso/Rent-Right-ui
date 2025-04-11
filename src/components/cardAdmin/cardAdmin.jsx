import React from "react";
import "./cardAdmin.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

export default function CardAdmin({ item }) {
  console.log("CardAdmin item:", item);
  const navigate = useNavigate();

  const handleDeletePost = async () => {
    if (!window.confirm(`Are you sure you want to delete "${item.title}"?`)) {
      return;
    }
    try {
      console.log("Attempting to delete post ID:", item.id);
      const res = await apiRequest.delete(`/post/${item.id}`);
      console.log(res);
      if (res.data.success) {
        // Adjust based on your API response
        alert("Property deleted successfully");
        window.location.reload(); // Force refresh to update the UI
        // Or better: implement state management to remove the deleted item
      }
    } catch (error) {
      if (error.response?.status === 403) {
        alert("You don't have permission to delete this post.");
      } else {
        alert("Network error. Try again later.");
      }
      console.log(error);
    }
  };

  return (
    <div className="CardAdmin">
      <div className="imageContainer">
        <Link to={`/${item?.id}`}>
          <img src={item?.images[0]} alt="property image" />
        </Link>

        <div className="textContainer">
          <h2 className="title">
            <Link to={`/${item?.id}`}>
              <span>{item?.title}</span>
            </Link>
          </h2>
          <p className="address">
            <img src="./pin.png" alt="" />
            <span>{item?.address}</span>
          </p>
          <p className="price">KSH {item?.price}</p>
          <div className="buttom">
            <div className="features">
              <div className="feature">
                <img src="./bed.png" alt="bed icon" />
                <span>{item?.bedroom} bedroom</span>
              </div>
              <div className="feature">
                <img src="./bath.png" alt="bed icon" />
                <span>{item?.bathroom} bathroom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="operations">
        <div className="update">
          {" "}
          <Link to="/post/update" state={{ postData: item }}>
            <button>Update</button>
          </Link>
        </div>
        <div className="delete" onClick={handleDeletePost}>
          Delete
        </div>
      </div>
    </div>
  );
}

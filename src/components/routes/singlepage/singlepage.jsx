import "./singlepage.scss";
import Slider from "../../slider/slider";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../../lib/apiRequest";

export default function Singlepage() {
  const post = useLoaderData();
  console.log(post);

  const [saved, setSaved] = useState(post.isSaved);
  console.log(saved);

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    //AFTER REACT 19 UPDATE TO OPTIMISTIC HOOK
    setSaved((prev) => {
      const newValue = !prev;
      console.log("This is what we want to save: ", newValue); // Log here
      return newValue;
    });
    try {
      const res = await apiRequest.post("user/save", { postId: post.id });
      console.log("responce from saving: ", res);
    } catch (error) {
      console.log(error);
      setSaved((prev) => !prev); // Rollback on error
    }
  };

  return (
    <div className="Singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />

          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>

                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>

                <div className="price">KSH {post.price}</div>
              </div>

              <div className="user">
                <img src={post.user.avatar} alt="image" />
                <span>{post.user.username}</span>
              </div>
            </div>

            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="utility.png" alt="" />
              <div className="featurText">
                <span>unitlities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>Landlord is responisble</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="pet.png" alt="" />
              <div className="featurText">
                <span>Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pet Allowed</p>
                ) : (
                  <p>Pet Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="fee.png" alt="" />
              <div className="featurText">
                <span>Property Fee</span>
                <p> {post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="Size">
            <div className="sizes">
              <img src="/size.png" alt="" />
              <span>{post.postDetail.size} m²</span>
            </div>
            <div className="sizes">
              <img src="/bed.png" alt="" />
              <span>{post.bedroom} bedroom</span>
            </div>
            <div className="sizes">
              <img src="/bath.png" alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>

          <p className="title">Nearby place</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featurText">
                <span>School</span>
                <p>
                  {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km "
                    : post.postDetail.school + "m "}
                  away
                </p>
              </div>
            </div>

            <div className="feature">
              <img src="fee.png" alt="" />
              <div className="featurText">
                <span>Bus Stop</span>
                <p>
                  {post.postDetail.bus > 999
                    ? post.postDetail.bus / 1000 + "km "
                    : post.postDetail.bus + "m "}
                  away
                </p>
              </div>
            </div>

            <div className="feature">
              <img src="fee.png" alt="" />
              <div className="featurText">
                <span>Restaurant</span>
                <p>
                  {post.postDetail.restaurant > 999
                    ? post.postDetail.restaurant / 1000 + "km "
                    : post.postDetail.restaurant + "m "}
                  away
                </p>
              </div>
            </div>
          </div>

          <p className="title">Reach Out</p>
          <div className="buttons">
            <button>
              <img src="./chat.png" alt="" />
              <span>send a message</span>
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="./save.png" alt="" />
              {saved ? <span>property saved</span> : <span>Save property</span>}
            </button>
          </div>

          {/* <p className="title">Process  payment</p>
          <div className="checkout">
            <button>
              <span> Proceed to checkout</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

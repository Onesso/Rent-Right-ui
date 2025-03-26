import "./singlepage.scss";
import Slider from "../../slider/slider";
import { singlePostData } from "../../../lib/dummydata";
import { userData } from "../../../lib/dummydata";
import listData from "../../../lib/dummydata";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";

export default function Singlepage() {
  const data = listData;

  const post = useLoaderData();
  console.log(post);

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
            <button>
              <img src="./save.png" alt="" />
              <span>Save property</span>
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

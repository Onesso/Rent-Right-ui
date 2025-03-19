import "./singlepage.scss";
import Slider from "../../slider/slider";
import { singlePostData } from "../../../lib/dummydata";
import { userData } from "../../../lib/dummydata";
import listData from "../../../lib/dummydata";

export default function Singlepage() {
  const data = listData;
  return (
    <div className="Singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />

          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>

                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>

                <div className="price">KSH {singlePostData.price}</div>
              </div>

              <div className="user">
                <img src={userData.img} alt="image" />
                <span>{userData.name}</span>
              </div>
            </div>

            <div className="bottom">{singlePostData.description}</div>
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
                <p>Landlord is responisble</p>
              </div>
            </div>
            <div className="feature">
              <img src="pet.png" alt="" />
              <div className="featurText">
                <span>Pet Policy</span>
                <p>Pet Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="fee.png" alt="" />
              <div className="featurText">
                <span>Property Fee</span>
                <p>Deposit equivalent to rent</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="Size">
            <div className="sizes">
              <img src="/size.png" alt="" />
              <span>80sqft</span>
            </div>
            <div className="sizes">
              <img src="/bed.png" alt="" />
              <span>2 bedroom</span>
            </div>
            <div className="sizes">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>

          <p className="title">Nearby place</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featurText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>

            <div className="feature">
              <img src="fee.png" alt="" />
              <div className="featurText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>

            <div className="feature">
              <img src="fee.png" alt="" />
              <div className="featurText">
                <span>Restaurant</span>
                <p>200m away</p>
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

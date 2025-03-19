import "./singlepage.scss";
import Slider from "../../slider/slider";
import { singlePostData } from "../../../lib/dummydata";
import { userData } from "../../../lib/dummydata";

export default function Singlepage() {
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
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

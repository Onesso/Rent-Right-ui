import { Link } from "react-router-dom";
import "./card.scss";

export default function Card({ item }) {
  console.log("this is from the card component: ", item);
  return (
    <div className="Card">
      <Link to={`/${item?.id}`} className="imageContainer">
        <img src={item?.images[0]} alt="property image" />
      </Link>

      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item?.id}`}>{item?.title}</Link>
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
  );
}

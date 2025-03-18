import { Link } from "react-router-dom";
import "./card.scss";

export default function Card({ item }) {
  console.log();
  return (
    <div className="Card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images} alt="property image" />
      </Link>

      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="./pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">KSH {item.price}</p>

        <div className="buttom">
          <div className="features">
            <div className="feature">
              <img src="./bed.png" alt="bed icon" />
              <span>{item.bedroom} bedroom</span>
            </div>

            <div className="feature">
              <img src="./bath.png" alt="bed icon" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>

          <div className="icons">
            <div className="icon">
              <img src="./save.png" alt="save icon" />
            </div>
            <div className="icon">
              <img src="./chat.png" alt="save icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

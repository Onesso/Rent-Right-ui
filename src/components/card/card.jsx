import { Link } from "react-router-dom";
import "./card.scss";

export default function Card({ item }) {
  console.log();
  return (
    <div className="Card">
      <Link to={`/${item}`} className="imageContainer">
        <img src={item.images} alt="property image" />
      </Link>
      <div className="textContainer"></div>
    </div>
  );
}

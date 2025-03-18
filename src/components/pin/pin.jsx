import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./pin.scss"

export default function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupcontainer">

          <img src={item.images} alt="" />

          <div className="textcontainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span className="beds">{item.bedroom} bedroom</span>
            <b>KSH {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

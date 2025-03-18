import "./map.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Pin from "../pin/pin";

export default function Map({ items }) {
  //   const position = [51.505, -0.09];
  // latitude: -1.2167,
  // longitude: 36.8167,

  const position = [-1.2167, 36.8167];
  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}

    </MapContainer>
  );
}

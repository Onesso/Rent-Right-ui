import listData from "../../../lib/dummydata";
import './listPage.scss'
import Filter from "../../filter/filter";

export default function Listpage() {
  const data = listData;
  return (
    <div className="listpage">
      <div className="listContainer">
        <div className="wrapper">
            <Filter />
        </div>
      </div>
      <div className="mapContainer">map</div>
    </div>
  );
}

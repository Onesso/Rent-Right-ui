import listData from "../../../lib/dummydata";
import "./listPage.scss";
import Filter from "../../filter/filter";
import Card from "../../card/card";
import Map from "../../map/map";

export default function Listpage() {
  const data = listData;
  return (
    <div className="listpage">

      <div className="listContainer">
        <div className="wrapper">
            
          <Filter />

          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  );
}

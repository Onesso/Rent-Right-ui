import "./listPage.scss";
import Filter from "../../filter/filter";
import Card from "../../card/card";
import Map from "../../map/map";
import { useLoaderData } from "react-router-dom";

export default function Listpage() {
  // const data = listData;
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div className="listpage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />

          {posts.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="mapContainer">
        <Map items={posts} />
      </div>
    </div>
  );
}

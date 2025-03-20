import Card from "../card/card";
import listData from "../../lib/dummydata";
import "./list.scss"
export default function List() {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

import "./dashboard.scss";
import { useLoaderData } from "react-router-dom";
import apiRequest from "../../../lib/apiRequest";
import CardAdmin from "../../cardAdmin/cardAdmin";

export default function Dashboard() {
  const { userPosts = [] } = useLoaderData(); //new

  console.log("User post from dashboard: ", userPosts);
  return (
    <div className="dashboard">
      <div className="wrapper">
        <span>
          You have created: {userPosts.length}
          {userPosts.length !== 1 ? " properties" : " property"}
        </span>

        {userPosts.length > 0 ? (
          userPosts.map((item) => (
            <CardAdmin key={`${item.id}-${item.userId}`} item={item} />
          ))
        ) : (
          <p>No items created</p>
        )}
        <div className="makingvisible">

        </div>
      </div>
    </div>
  );
}

import "./homepage.scss";
import Searchbar from "../../searchbar/searchbar";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className="title">
            With Rent Right let us find you your dream home
          </h1>
          <p className="description">
            Rent Right is a modern platform designed to simplify the rental
            process by seamlessly connecting landlords and tenants. Whether
            you're a landlord looking to list your property or a tenant
            searching for the perfect rental home, Rent Right makes the process
            faster, easier, and more efficient.
          </p>
          <Searchbar />
        </div>
      </div>

      <div className="imagecontainer">
        <img src="./public/bg.png" alt="home-image" />
      </div>
    </div>
  );
}

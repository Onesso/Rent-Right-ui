import "./homepage.scss";
import Searchbar from "../../searchbar/searchbar";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className="title">Rent Right let us find you your dream home</h1>
          <p className="description">
            Modern platform designed to simplify the rental process by
            seamlessly connecting landlords and tenants. Are you tenant
            searching for the perfect rental home, Rent Right makes the process
            faster, easier, and more efficient.
          </p>

          <Searchbar />

          <div className="boxes">
            <div className="box">
              <h1>12+</h1>
              <h2>year of experience</h2>
            </div>
            <div className="box">
              <h1>56</h1>
              <h2>Award gained</h2>
            </div>
            <div className="box">
              <h1>120</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="imagecontainer">
        <img src="/bg.png" alt="home-image" />
      </div>
    </div>
  );
}

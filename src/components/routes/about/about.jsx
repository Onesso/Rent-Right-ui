import "./about.scss";
import { Link } from "react-router-dom";
export default function About() {
  return (
    
    <div className="about">
      <div className="top">
        <img src="/nairobi1.jpg" alt="" />
        <div className="content">
          <h1>The future of living home</h1>
          <p>
            Discover the perfect place to call home with our extensive listing
            of residential properties. Let us help you find the home that meets
            your needs and esceeds your expectation
          </p>
          <Link to="/list">
            <button>Explore Property</button>
          </Link>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <div className="wrappe">
            <div className="textsection">
              <h1>
                We provide expert advise and support throughout the entire
                process
              </h1>
            </div>
            <div className="imgsection">
              <img src="sideimg.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="wrapperight">
            <div className="controlheight"></div>
            <div className="topText">
              <h2>
                we strive to create a lasting relationships built on trust,
                trasparency and integrity
              </h2>
            </div>
            <div className="bottomText">
              <p>
                Our commitment to excellence ensures that you receive the
                highest quality service and the best possible outcomes. We
                invite you to explore and discover wide range of properties and
                services we offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

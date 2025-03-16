import Navbar from "./components/nabar/Navbar";
import Homepage from "./components/routes/homepage/homepage";
import "./layout.scss";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Homepage />
      </div>
    </div>
  );
}

export default App;

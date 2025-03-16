import Navbar from "./components/nabar/Navbar";
import Homepage from "./components/routes/homepage/homepage";
import "./layout.scss";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <dic className="content">
        <Homepage />
      </dic>
    </div>
  );
}

export default App;

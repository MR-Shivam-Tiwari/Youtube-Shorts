import "./App.css";
import Navbar from "./Components/Navbar";
import Shorts from "./Components/Shorts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App" style={{}}>
      <Router>
        <div>
          <Shorts />
        </div>
      </Router>
    </div>
  );
}

export default App;

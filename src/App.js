import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import View from "./component/View";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;

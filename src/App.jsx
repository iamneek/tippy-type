import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Restart from "./Components/Restart";
import Passage from "./Components/Passage";
import Timer from "./Components/Timer";
import Optnav from "./Components/Optnav";
const App = () => {
  return (
    <div className="containerr absolute right-0 flex justify-between items-center">
      <Navbar />
      <Optnav />
      <div className="mainn">
        <Timer />
        <Passage />
        <Restart />
      </div>
      <Footer />
    </div>
  );
};

export default App;

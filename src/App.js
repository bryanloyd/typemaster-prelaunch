import React from "react";
import "./App.css";
import FeaturesComponent from "./components/FeaturesComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import MechanicalComponent from "./components/MechanicalComponent";
import SpotlightComponent from "./components/SpotlightComponent";

const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <SpotlightComponent />
      <MechanicalComponent />
      <FeaturesComponent />
      <FooterComponent />
    </div>
  );
};

export default App;

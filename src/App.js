import React from "react";
import "./App.css";
import Donation from "./components/Donation/Donation";
import FoodSharing from "./components/FoodSharing/FoodSharing";
import Volunteers from "./components/Volunteers/Volunteers";

function App() {
  return <div>
    <Donation></Donation>
    <Volunteers></Volunteers>
    <FoodSharing></FoodSharing>
  </div>;
}

export default App;

import React from "react";
import BannerCarousel from "./components/BannerCarousel/BannerCarousel";
import Donation from "./components/Donation/Donation";
import FoodSharing from "./components/FoodSharing/FoodSharing";
import Header from "./components/Header/Header";
import Volunteers from "./components/Volunteers/Volunteers";

function App() {
  return (
    <div style={{ background: '#bbbbbb', paddingBottom: '200px' }}>
      <Header></Header>
      {/* <BannerCarousel></BannerCarousel> */}
      <Donation></Donation>
      <Volunteers></Volunteers>
      <FoodSharing></FoodSharing>
    </div>
  );
}

export default App;
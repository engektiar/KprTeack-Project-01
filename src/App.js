import React from "react";
import "./App.css";
import BannerCarousel from "./components/BannerCarousel/BannerCarousel";
import Donation from "./components/Donation/Donation";
import FoodSharing from "./components/FoodSharing/FoodSharing";
import Header from "./components/Header/Header";
import Volunteers from "./components/Volunteers/Volunteers";

function App() {
  return <div className='body' style={{ background: '#bbbbbb' }}>
    <Header></Header>
    <Donation></Donation>
    <Volunteers></Volunteers>
    <FoodSharing></FoodSharing>
    <BannerCarousel></BannerCarousel>
  </div>;
}

export default App;
//hello

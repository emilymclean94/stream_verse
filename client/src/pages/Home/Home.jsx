import React from "react";
import Hero from "../../Assets/24OD.gif";
import "./home.css";

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-div" id="home-container">
        <div className="image-container">
          <img
            className="hero-image"
            src={Hero}
            alt="hero gif of astronaut spinning around"
          />
        </div>
        <div className="">
          <div className="text-container">
            <h1 className="display-3 sub-title">INTO THE</h1>
            <h1 className="display-1 title">STREAMVERSE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

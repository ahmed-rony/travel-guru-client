import React from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import "./Home.css";


const Home = () => {
  // const settings = {

  //   slidesToShow: 3,
  //   arrows: false,
  //   centerPadding: '110px'
  // };
  return (
    <div className="full-width">
      <div className="home-bg-layer">
        <div className="home-all">
          <Header></Header>
          <Banner></Banner>
        </div>
      </div>
    </div>
  );
};

export default Home;

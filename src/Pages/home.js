import React from "react";
import About from "../Components/Home/about";
import Award from "../Components/Home/award";
import Feature from "../Components/Home/feature";
import Header from "../Components/Home/header";
import WhyBrainFood from "../Components/Home/whybrainfood";
import "./home.scss";
const Home = () => {
  return (
    <>
      <Header />
      <div className="ab-holder">
        <About />
        <Feature />
        <img src="/img/Home/abs1.svg" alt="Abstarct" className="abstratct" />
      </div>
      <Award />

      <WhyBrainFood />
    </>
  );
};

export default Home;

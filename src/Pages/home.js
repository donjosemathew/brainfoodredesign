import React from "react";
import About from "../Components/Home/about";
import Award from "../Components/Home/award";
import Feature from "../Components/Home/feature";
import Footer from "../Components/Home/footer/footer";
import GridGallery from "../Components/Home/gridGallery";
import Header from "../Components/Home/header";
import HowTouse from "../Components/Home/howToUse";
import ProductWindow from "../Components/Home/Products";
import Testimonial from "../Components/Home/Testimonial";
import Whatsapp from "../Components/Home/whatsapp";
import WhyBrainFood from "../Components/Home/whybrainfood";
import Nav from "../Components/Nav/Nav";
import "./home.scss";
const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <div className="ab-holder">
        <About />
        <Feature />
        <img src="/img/Home/abs1.svg" alt="Abstarct" className="abstratct" />
      </div>
      <Award />

      <WhyBrainFood image={true} />
      <div className="ab-holder ab-holder2">
        <img
          src="/img/Home/redAbstract.svg"
          alt="Abstarct"
          className="abstratct abstratct2"
        />

        <ProductWindow />
        <HowTouse />
      </div>
      <div className="ab-holder ab-holder2">
        <img
          src="/img/Home/greenAbstract.svg"
          alt="Abstarct"
          className=" abstratct abstratct3"
        />
        <Testimonial />
      </div>
      <GridGallery />
      <Footer />
      <Whatsapp />
    </>
  );
};

export default Home;

import React from "react";
import "./about.scss";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div className="about" id="home">
      <div className="about__col1">
        <div className="grid-img img-container1">
          <div className="grid-img__item">
            <div className="img-container ">
              <img
                src="/img/Home/1.webp"
                alt="Header"
                className="about__img img-1"
              />
            </div>
          </div>
          <div className="grid-img__item img-container2 ">
            <div className="img-container ">
              <img
                src="/img/Home/4.webp"
                alt="Header"
                className="about__img img-1"
              />
            </div>
          </div>
          <div className="grid-img__item img-container1">
            <div className="img-container ">
              <img
                src="/img/Home/5.webp"
                alt="Header"
                className="about__img img-1"
              />
            </div>
          </div>
          <div className="grid-img__item img-container2">
            <div className="img-container ">
              <img
                src="/img/Home/7.webp"
                alt="Header"
                className="about__img img-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="about__col2">
        <p className="sectiontext">About Us</p>
        <h2 className="head2">
          Creating flash cards that <span>Nurture</span>
        </h2>
        <p className="text">
          A child’s mind is not a container to be lled but rather a re to be
          kindled. To kindle the re of passion and curiosity, establishing
          connections with the things around them is of utmost importance. And
          here ashcards come to play. It is a fun way to incorporate different
          concepts in children. To help your children be the icons of tomorrow,
          Brain Foods Flashcards stays as the best path.
        </p>
        <NavLink
          to="/about"
          style={{
            textDecoration: "none",
          }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <button className="btn">
            Learn More
            <IoArrowForwardCircleSharp
              className="icon"
              size="1.6em
          "
            />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default About;

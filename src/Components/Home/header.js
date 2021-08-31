import React from "react";
import "./header.scss";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.png" alt="Logo" className="header__logo__img" />
        <h1>BraiinFoods™</h1>
      </div>
      <div className="header__text">
        <h3 className="header__sub1">
          Educate. Explore
          <br /> Entertain
        </h3>
        <h3 className="header__sub2">
          Your Child deserves
          <br /> Better!
        </h3>
        <NavLink
          to="#about"
          onClick={() => {
            window.scrollTo(0, 1000);
          }}
          style={{
            textDecoration: "none",
          }}
        >
          <button
            className="btn"
            style={{
              position: "relative",
              zIndex: 400,
            }}
          >
            Learn More
            <IoArrowForwardCircleSharp
              className="icon"
              size="1.6em
          "
            />
          </button>
        </NavLink>
      </div>
      <img src="/img/girl.png" alt="gIRL" className="header__girl" />
      <img src="/img/hdBg2.svg" alt="Header" className="header__bg" />
      <img src="/img/hdBg3.svg" alt="Header" className="header__bg3" />
    </header>
  );
};

export default Header;

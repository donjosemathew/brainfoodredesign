import React from "react";
import "./header.scss";

const HeaderSub = ({ head }) => {
  return (
    <header className="header header2">
      <div className="header__logo">
        <img src="/logo.png" alt="Logo" className="header__logo__img" />
        <h1>BraiinFoods™</h1>
      </div>
      <div className="header__text">
        <h3 className="header__sub2 header__sub3">{head}</h3>
      </div>
      <img
        style={{
          display: "none",
        }}
        src="/img/girl.png"
        alt="gIRL"
        className="header__girl"
      />
      <img src="/img/hdBg2.svg" alt="Header" className="header__bg" />
      <img src="/img/hdBg3.svg" alt="Header" className="header__bg3" />
    </header>
  );
};

export default HeaderSub;

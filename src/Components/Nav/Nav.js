import { GrMenu, GrClose } from "react-icons/gr";
import React, { useState } from "react";
import "./nav.scss";
const Nav = () => {
  const [navVisible, setNavVisible] = useState(false);
  return (
    <div className="nav">
      <div className="nav__icn" onClick={() => setNavVisible(!navVisible)}>
        {navVisible ? (
          <GrClose size="3.4em" className="nav__icn__icon" />
        ) : (
          <GrMenu size="3.4em" className="nav__icn__icon" />
        )}
      </div>
      <div
        className={navVisible ? "navigation navigation-active" : "navigation"}
      >
        <ul>
          <li>HOME</li>
          <li>PRODUCTS</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;

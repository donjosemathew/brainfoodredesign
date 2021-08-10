import React from "react";
import "./award.scss";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
const Award = () => {
  const [videoplayer, setVideoplayer] = useState(false);
  const header = document.getElementsByClassName("popupvideo");
  return (
    <>
      <div className="award">
        <div className="award__top">
          <img
            src="/img/Home/WomennovatorlOgo.png"
            alt="Womennovator"
            className="award__img"
          />
          <div className="award__top__text">
            <h2 className="head2 head-award">100 Women Faces Of Asia</h2>
            <p className="award__top__para">
              Prachi Khandelwal,
              <br /> Founder of BrainFoods was awarded <br />
              WOMENNOVATOR AWARD
            </p>
          </div>
        </div>
        <button
          className="btn"
          onClick={() => {
            setVideoplayer(true);
          }}
        >
          Watch Video
          <IoArrowForwardCircleSharp
            className="icon"
            size="1.6em
          "
          />
        </button>
      </div>
      <div
        className={`popupvideo ${
          videoplayer ? "popupvideo-show" : "popupvideo-hide"
        }`}
      >
        <IoCloseOutline
          size="5em"
          className="popupvideo__icn"
          color="rgba(255, 255, 255, 0.96)"
          onClick={() => {
            setVideoplayer(false);
          }}
        />
        <div className="playerholder">
          <ReactPlayer
            url="https://youtu.be/bF5dAmTvTQ0"
            className="videoplayer"
            controls
            width={"100%"}
            height={"100%"}
            playing={videoplayer}
          />
        </div>
      </div>
    </>
  );
};

export default Award;

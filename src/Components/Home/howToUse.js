import React from "react";
import "./howto.scss";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillPlayCircle } from "react-icons/ai";
const HowTouse = () => {
  const [videoplayer, setVideoplayer] = useState(false);
  const header = document.getElementsByClassName("popupvideo");
  return (
    <>
      <div className="howtouse">
        <p className="sectiontext">How to Use</p>
        <h2 className="head2 head2-howtouse">Flash Cards</h2>
        <div className="youtubeplayer">
          <AiFillPlayCircle
            size="5em"
            className="youtubeplayer__icn"
            onClick={() => {
              setVideoplayer(true);
            }}
          />
          <img
            src="/img/Home/yplay.png"
            alt="Play Btn"
            className="youtubeplayer__img"
          />
        </div>
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
            url="https://youtu.be/3EvSo7OdYq4"
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

export default HowTouse;

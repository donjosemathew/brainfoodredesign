import React from "react";
import Whatsapp from "../Components/Home/whatsapp";
import ReactPlayer from "react-player/lazy";
import "./howto.scss";
import Footer from "../Components/Home/footer/footer";
const HowToUse = () => {
  const data = [
    {
      head: "How to revise flash cards",
      link: "https://youtu.be/9r4UEuL_dJI",
    },
    {
      head: "Colours flash cards for a 8 month old",
      link: "https://youtu.be/fx-tIjLKJAg",
    },
    {
      head: "How to use country flash cards",
      link: "https://youtu.be/3EvSo7OdYq4",
    },
    {
      head: "Currency flash cards (10 year old )",
      link: "https://youtu.be/Ij7Y9JOarY0",
    },
    {
      head: "How to use flash cards for kids",
      link: "https://youtu.be/KlOt1nDzUrM",
    },
    {
      head: "How to use flash cards for kids",
      link: "https://youtu.be/KlOt1nDzUrM",
    },
    {
      head: "10 year old recognizing country flags n its capital",
      link: "https://youtu.be/OM6ybHY43q8",
    },
    {
      head: "100 grammar words set (flash cards)",
      link: "https://youtu.be/nKBe4uwiZEY",
    },
    {
      head: "Happy twins to learn currencies around the world",
      link: "https://youtu.be/Ij7Y9JOarY0",
    },
    {
      head: "Happy twins to learn currencies around the world",
      link: "https://youtu.be/ISRAjIx-Ry8",
    },
    {
      head: "Currency flash cards by a 5 year old",
      link: "https://youtu.be/m0I6xBlQVGw",
    },
  ];
  return (
    <div className="howtopage">
      <div className="head">
        <h1>sas</h1>
      </div>
      <div className="list-howto">
        {data.map((item, index) => {
          return (
            <div className="holder-howto">
              <div className="howto-item" key={index}>
                <h2 className="howtohead">{item.head}</h2>
                <ReactPlayer width="100%" url={item.link} />
              </div>
            </div>
          );
        })}
      </div>
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default HowToUse;

import React from "react";
import "./whybrainfood.scss";
const WhyBrainFood = ({ image }) => {
  return (
    <>
      <div className="whybrainfood">
        <div className="whybrainfood__col1">
          <img
            src="/img/Home/card.jpg"
            alt="Card"
            className="whybrainfood__img1"
          />
        </div>

        <div className="whybrainfood__col">
          <p className="sectiontext">Card features</p>
          <h2 className="head2 whybrainfood__head">
            Why Brain Foods <span>Flash cards?</span>
          </h2>
          <p className="text whybrainfood__text">
            Education can also be commitment between motivated students and
            enthusiastic parents with high expectations. We help you to meet
            these expectations by providing the best way possible that also
            helps to nurture the parent-child relationship. We are 100% MADE IN
            INDIA and are taking special efforts to provide them in small towns
            and villages so that every child receives proper resources to
            enhance their memory.
            <span>
              6x9 inch laminated, multilingual white flashcards with rounded
              edges for safety
            </span>
          </p>
        </div>
      </div>
      <div className="mother">
        <img
          src="/img/Home/MotherChild.webp"
          alt="Mother Child"
          className="whybrainfood__motherimg"
          style={{
            display: !image ? "none" : "block",
          }}
        />
      </div>
    </>
  );
};

export default WhyBrainFood;

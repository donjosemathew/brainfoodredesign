import React from "react";
import "./feature.scss";
import {
  IoLanguage,
  IoRocket,
  IoTextSharp,
  IoLogoYoutube,
} from "react-icons/io5";

const Feature = () => {
  return (
    <div className="features">
      <p className="sectiontext">Why</p>
      <h2 className="head2 head3">
        Brainfoods Flash cards<span>Play and Learn</span>
      </h2>
      <div className="feature">
        <div className="feature__item">
          <IoLanguage size="6em" color="#F3D92E" />
          <p className="text feature__text">Multilingual Communication</p>
        </div>

        <div className="feature__item">
          <IoRocket size="6em" color="#2062D0" />
          <p className="text feature__text">Cognitive Development</p>
        </div>

        <div className="feature__item">
          <IoTextSharp size="6em" color="#1AC652" />
          <p className="text feature__text">Vocabulary Development</p>
        </div>

        <div className="feature__item">
          <IoLogoYoutube size="6em" color="#F9484A" />
          <p className="text feature__text">Audiovisual Learning</p>
        </div>
      </div>
      <div className="features__btm">
        <p className="text features__btm__text">
          Brain Foods Flashcards have introduced <span>MULTILINGUAL CARDS</span>{" "}
          with a special emphasis of Sanskrit. They are of optimum size that
          helps to build a better <span>AUDIO-VISUAL</span> connection. Cards
          printed with rounded edges and laminated cards on white background to{" "}
          <span>IMPROVE FOCUS and ENHANCE LEARNING</span>. Our goal is to get
          each child aware about our rich culture and mythological inheritance
          along with creating a fun atmosphere for learning.
        </p>
      </div>
    </div>
  );
};

export default Feature;

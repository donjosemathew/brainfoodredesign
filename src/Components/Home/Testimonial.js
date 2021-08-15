import React from "react";
import "./testimonial.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Testimonial = () => {
  var settings = {
    dots: true,
    autoplay: !true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
  };
  return (
    <div className="testimonial">
      <p className="sectiontext">Testimonials</p>
      <h2 className="head2 head3">
        Here from Our <br />
        Customers
      </h2>
      <Slider {...settings}>
        <div className="cardHolder">
          <div className="card-testi">
            <div className="card-testi__top">
              <img
                src="/img/Home/user1.jpeg"
                alt=""
                className="card-testi__img"
              />
              <p className="card-testi__author">
                Dr.Vaishali Mehta <span>Doctor -Mumbai</span>
              </p>
            </div>
            <p className="card-testi__text">
              Client review Priyanka Gupta Founder, Shubhanjali- Mumbai
              BrainFoods flashcards are made with the precise information and
              the quality is highly appreciable. Used as a gifting option for my
              daughter and she really loved it. Just too happy to have found
              them. Highly recommended.
            </p>
          </div>
        </div>
        <div className="cardHolder">123</div>
        <div className="cardHolder">123</div>
        <div className="cardHolder">123</div>
        <div className="cardHolder">123</div>
      </Slider>
    </div>
  );
};

export default Testimonial;

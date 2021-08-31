import React from "react";
import "./card.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const data = [
  {
    head: "Body Parts",
    price: "349",
    desc: "Available in English, Size 6*9 inches, 18 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images",
    img: 3,
  },
  {
    head: "Flags",
    price: "599",
    desc: "Available in English, Size 6*9 inches, 50 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images",
    img: 5,
  },
  {
    head: "Animals",
    price: "449",
    desc: "Available in English, Size 6*9 inches, 31 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images",
    img: 1,
  },
  {
    head: "Currency",
    price: "399 ",
    desc: "Available in English, Size 6*9 inches, 20 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images",
    img: 7,
  },
  {
    head: "Life Cycle",
    price: "499 ",
    desc: "Available in English, Size 6*9 inches, 27 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images",
    img: 9,
  },
];
const ProductWindow = () => {
  var settings = {
    dots: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="products">
      <p className="sectiontext">Products</p>
      <h2 className="head2 head3">
        Available sets for your <span>Child</span>
      </h2>
      <div className="products__listholder">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div className="cardHolder" key={index}>
                <div className="card">
                  <div class="product__card">
                    <img
                      src={`img/itemlistwebp/${item.img}.webp`}
                      alt="Of product"
                      class="product__card__img"
                    />
                    <p class="product__card__text">BrainFoods</p>
                  </div>
                  <div class="product__card__top">
                    <h3>{item.head}</h3>
                    <h3 class="pricebold">
                      {item.price} <span class="price">₹</span>
                    </h3>
                  </div>
                  <p class="text ">{item.desc}</p>
                  <button
                    class="product__btn"
                    onClick={() =>
                      window.open(
                        `https://wa.me/+919321858455/?text=Hi, Intrested in ${item.head} Products`,
                        "_blank"
                      )
                    }
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="product__btnholder">
          <NavLink
            to="/product"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            style={{
              textDecoration: "none",
            }}
          >
            <button className="btn" onClick={() => {}}>
              Get More Products
              <IoArrowForwardCircleSharp
                className="icon"
                size="1.6em
          "
              />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductWindow;

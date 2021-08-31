import { useState } from "react";
import Footer from "../Components/Home/footer/footer";
import WhyBrainFood from "../Components/Home/whybrainfood";
import "./productdetail.scss";
import { Markup } from "interweave";
import HeaderSub from "../Components/Home/headerSub";
import Nav from "../Components/Nav/Nav";
const ProductDetails = () => {
  const [selected, SetSelcted] = useState("Animals");
  const scetionNames = [
    "Animals",
    "SightWords",
    "BodyParts",
    "VegetablesFruits",
    "WorldFlags",
    "Numbers",
    "Currency",
    "VedicMantras",
    "LifeCycle",
    "Colours",
  ];
  const multiple = ["SightWords", "Numbers", "WorldFlags"];
  const sectionData = {
    Animals: {
      longDesc: `<b>6 months to 6 years</b><br>
      Flashcards are a perfect medium to <b>connect and teach in a fun way</b>. Help your child to learn about animals using our flashcards with <b>bright colours and interesting details</b>.
      Safe for kids: <b> Laminated</b>. for long use and has <b>rounded edges</b>.
      `,
      shortDes: `Available in English, Size 6*9 inches, 31 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images`,
      price: 449,

      number: "",
    },
    SightWords: [
      {
        longDesc: `<b>3 to 6 years</b><br>
  
        <b>Enthusiasm</b> in children must be encouraged form childhood onwards. Help your child to <b>get mesmerized</b> with learning at a small age. Support them to understand the little things with our <b>pedagogy tools. </b><br>
        Safe for kids: <b>Laminated</b> for long use and has <b>rounded edges. </b>
        `,
        shortDes: `Available in Sanskrit, Size 4*8 inches, 100 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images`,
        price: 599,

        number: "100",
      },
      {
        longDesc: `<b>3 to 6 years</b><br>
  
        <b>Enthusiasm</b> in children must be encouraged form childhood onwards. Help your child to <b>get mesmerized</b> with learning at a small age. Support them to understand the little things with our <b>pedagogy tools. </b><br>
        Safe for kids: <b>Laminated</b> for long use and has <b>rounded edges. </b>
        `,
        shortDes: `Available in Sanskrit, cards are of size 4*8 inches. Each set contains 100 cards in number. `,
        price: 749,

        number: "100",
      },
    ],
    BodyParts: {
      longDesc: `<b>6 months to 6 years</b><br>
      There is nothing more empowering than educating your child. Providing children with <b>knowledge about different concepts</b>. is incredible. Know about different body parts using our child-friendly flashcards. 
      <br>Safe for kids: <b>Laminated</b> for long use and has <b>rounded</b> edges.
     `,
      shortDes: `Available in English, Size 6*9 inches, 18 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images`,
      price: 349,

      number: "18",
    },
    VegetablesFruits: {
      longDesc: `<b>6 months to 6 years</b><br>
  
      A healthy diet is necessary for kids of all age groups. <b>Eating healthy and living healthy</b> are the mantras we should teach our kids. Help your child to fall in love with fruits and vegetables with <b>BrainFoods flashcards. </b> <br>
     Safe for kids: <b>Laminated</b> for long use and has rounded edges. </b>
     
     `,
      shortDes: `Available in English, Size 6*9 inches,  46 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images`,
      price: 549,

      number: "46",
    },
    WorldFlags: [
      {
        longDesc: `Flags are the elements that has a lot of meanings in it; let it be the colours or the symbols used. Educating your child about a country or its flag also helps in creating curiosity in the child at a very young age. Flag is not just a piece of fabric; it is a gateway to that country. Open these gateways so that your child can explore more.`,
        shortDes: `Available in English, Size 6*9 inches,  50 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images`,
        price: 599,
        inch: "tqwwe",
        number: "Set1:50",
      },
      {
        longDesc: `Flags are the elements that has a lot of meanings in it; let it be the colours or the symbols used. Educating your child about a country or its flag also helps in creating curiosity in the child at a very young age. Flag is not just a piece of fabric; it is a gateway to that country. Open these gateways so that your child can explore more.`,
        shortDes: `Available in English, Size 6*9 inches,  50 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images`,
        price: 599,
        inch: "te",
        number: "Set2:50",
      },
    ],
    Currency: {
      longDesc: `<b> 4 to 8 years</b> <br>
      Knowledge about the world at a very young age will aid kids to develop their interests and ideas early. Children will love the <b>colours, images and the mix and match ideas</b> that emerge each time they play with these educational flashcards. <br>
     Safe for kids: <b>Laminated</b> for long use and has <b>rounded edges.</b>
     `,
      shortDes: `Available in English, Size 6*9 inches,  20 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images`,
      price: 399,
      inch: "te",
      number: "20",
    },
    VedicMantras: {
      longDesc: `<b>6 months  to 6 years</b><br>
  
      As parents, we want our kids to <b>grow up confident</b>, with an amazing <b>sense of self-worth</b>, a whole lot of resilience and respect for others, and the world around them. For that knowing Vedic mantras help. Cards are available to <b>include in your daily routine</b>.<br>
     Safe for kids: <b>Laminated</b> for long use and has <b>rounded edges</b>.
     `,
      shortDes: `Available, Size 6*9 inches,  11 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images `,
      price: 599,
      inch: "te",
      number: "11",
    },
    Colours: {
      longDesc: `<b>6 months to 6 years</b><br>
      Kids are the individuals who have just starting painting their world. Help them to <b>make their world bright and colourful.</b><br>
     Safe for kids: <b>Laminated</b> for long use and has <b>rounded edges. </b>
     `,
      shortDes: `Available in English, Size 6*9 inches,  15 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images`,
      price: 349,
      inch: "te",
      number: "15",
    },
    LifeCycle: {
      longDesc: `<b>4 to 8 years</b><br>
  
      Everything in nature is made of a hidden element and that’s life. Learning about life and its evolution is not only <b>interesting</b> but also <b>fascinating. </b> Help your child to learn about life cycle of <b>different species.</b><br> 
     Safe for kids: <b>Laminated</b> for long use and has <b>rounded edges. </b>
     `,
      shortDes: `Available in English, Size 6*9 inches,  27 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images`,
      price: 499,
      inch: "te",
      number: "27",
    },
    Numbers: [
      {
        longDesc: ` Learning is a fun process; it must be for <b>both entertainment and education</b>. We know that number is the ruler of forms and ideas; and is the way for passion and destiny. Know about numbers using our <b>delightful flashcards. </b> <br>
        Safe for kids: <b>Laminated</b> for long use and has <b>rounded edges. </b>
        `,
        shortDes: `Available in English, German, French and Sanskrit, Size 6*9 inches, 21 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images`,
        price: 349,
        inch: "tqwwe",
        number: "21",
      },
      {
        longDesc: ` Learning is a fun process; it must be for <b>both entertainment and education</b>. We know that number is the ruler of forms and ideas; and is the way for passion and destiny. Know about numbers using our <b>delightful flashcards. </b> <br>
        Safe for kids: <b>Laminated</b> for long use and has <b>rounded edges. </b>
        `,
        shortDes: `Available in English, German, French and Sanskrit, Size 6*9 inches, 42 cards, Laminated, Thick, Rounded Edges, Colourful, High Quality Images`,
        price: 549,
        inch: "te",
        number: "42",
      },
    ],
  };
  const data = "";
  function setData() {
    if (selected.includes(multiple)) {
    } else {
    }
  }
  const [index, setIndex] = useState(0);
  return (
    <>
      <HeaderSub head={"Products"} />
      <Nav />
      <div className="productdetails">
        <WhyBrainFood image={false} />
        <div className="products">
          <p className="sectiontext">Get it now</p>
          <h2 className="head2">
            Available
            <span>Sets For Your Child</span>
          </h2>

          <div class="productitemlist">
            <div
              className="productitemlist__item"
              onClick={() => {
                SetSelcted(scetionNames[0]);
              }}
            >
              <img
                src="img/itemlist/animal.svg"
                alt=" Items"
                className="productitemlist__item__img"
              />
              <p className="productitemlist__item__txt">Animals</p>
            </div>
            <div
              className="productitemlist__item"
              onClick={() => {
                SetSelcted(scetionNames[1]);
              }}
            >
              <img
                src="img/itemlist/lang.svg"
                alt=" Items"
                className="productitemlist__item__img"
              />
              <p className="productitemlist__item__txt">Sight Words</p>
            </div>
            <div
              className="productitemlist__item"
              onClick={() => {
                SetSelcted(scetionNames[2]);
              }}
            >
              <img
                src="img/itemlist/body.svg"
                alt="Items"
                className="productitemlist__item__img"
              />
              <p className="productitemlist__item__txt">Body Parts</p>
            </div>
            <div
              className="productitemlist__item"
              onClick={() => {
                SetSelcted(scetionNames[3]);
              }}
            >
              <img
                src="img/itemlist/veg.svg"
                alt="Items"
                className="productitemlist__item__img"
              />
              <p className="productitemlist__item__txt">Vegetables & Fruits</p>
            </div>
            <div
              className="productitemlist__item"
              onClick={() => {
                SetSelcted(scetionNames[4]);
              }}
            >
              <img
                src="img/itemlist/flag.svg"
                alt="Items"
                className="productitemlist__item__img"
              />
              <p className="productitemlist__item__txt">World Flags</p>
            </div>
            <div
              className="productitemlist__item"
              onClick={() => {
                SetSelcted(scetionNames[5]);
              }}
            >
              <img
                src="img/itemlist/number.svg"
                alt="Items"
                className="productitemlist__item__img"
              />
              <p className="productitemlist__item__txt">Numbers</p>
            </div>
            <div
              className="productitemlist__item"
              onClick={() => {
                SetSelcted(scetionNames[6]);
              }}
            >
              <img
                src="img/itemlist/cash.svg"
                alt="Items"
                className="productitemlist__item__img"
              />
              <p className="productitemlist__item__txt">Currency</p>
            </div>
            <div
              className="productitemlist__item"
              onClick={() => {
                SetSelcted(scetionNames[7]);
              }}
            >
              <img
                src="img/itemlist/om.svg"
                alt="Items"
                className="productitemlist__item__img"
              />
              <p className="productitemlist__item__txt">Vedic Mantras</p>
            </div>

            <div
              className="productitemlist__item"
              onClick={() => {
                SetSelcted(scetionNames[8]);
              }}
            >
              <img
                src="img/itemlist/id.svg"
                alt="Items"
                className="productitemlist__item__img"
              />
              <p className="productitemlist__item__txt">Life Cycle</p>
            </div>

            <div
              className="productitemlist__item"
              onClick={() => {
                SetSelcted(scetionNames[9]);
              }}
            >
              <img
                src="img/itemlist/brush-solid 1.svg"
                alt="Items"
                className="productitemlist__item__img"
              />
              <p className="productitemlist__item__txt">Colours</p>
            </div>
          </div>
        </div>
        <div className="productwindow">
          <div className="productwindow__col1">
            <div className="card">
              <div class="product__card">
                <img
                  src={`img/itemlistwebp/${
                    scetionNames.indexOf(selected) + 1
                  }.webp`}
                  alt="Of product"
                  class="product__card__img"
                />
                <p class="product__card__text">BrainFoods</p>
              </div>
              <div class="product__card__top">
                <h3>{selected}</h3>
                <h3 class="pricebold">
                  {multiple.includes(selected)
                    ? sectionData[selected][index].price
                    : sectionData[selected].price}

                  <span class="price">₹</span>
                </h3>
              </div>
              <p class="text ">
                {multiple.includes(selected)
                  ? sectionData[selected][index].shortDes
                  : sectionData[selected].shortDes}
              </p>
              <button
                class="product__btn"
                onClick={() =>
                  window.open(
                    `https://wa.me/+919321858455/?text=Hi, Intrested in ${selected} Cards`,
                    "_blank"
                  )
                }
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="productwindow__col2">
            <p className="sectiontext">Card Set</p>
            <h2 className="head2 ">
              <span>{selected}</span>
            </h2>

            {multiple.includes(selected) ? (
              <div className="section-btns">
                <div className="section-btns__btn" onClick={() => setIndex(0)}>
                  <p className="section-btns__text section-btns__price">
                    {sectionData[selected][0].price}₹
                  </p>
                  <p className="section-btns__text">
                    {sectionData[selected][0].number}Cards
                  </p>
                </div>
                <div className="section-btns__btn" onClick={() => setIndex(1)}>
                  <p className="section-btns__text section-btns__price">
                    {sectionData[selected][1].price}₹
                  </p>
                  <p className="section-btns__text">
                    {sectionData[selected][1].number}Cards
                  </p>
                </div>
              </div>
            ) : null}
            <p className="productwindow__text longtext">
              <Markup
                content={
                  multiple.includes(selected)
                    ? sectionData[selected][index].longDesc
                    : sectionData[selected].longDesc
                }
              ></Markup>
            </p>
            <img
              src={`/img/itemBig/${scetionNames.indexOf(selected) + 1}.webp`}
              alt="Product"
              className="productwindow__img"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;

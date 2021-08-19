import "./about.scss";
const AboutPage = () => {
  return (
    <main>
      <div className="aboutpage">
        <div className="aboutpage__col aboutpage__col1">
          <img
            src="/founder.jpeg"
            alt=" of Founder"
            className="aboutpage__img"
          />
          <h2 className="aboutpage__foundr">
            Prachi Khandelwal, Founder
            <span className="aboutpage__foundr__sub">(Brain Foods)</span>
          </h2>
          <p className="aboutpage__col__text">
            As a mother of two and a B.Ed Graduate for Xaviers, I had always
            wanted to make a difference in a child’s early learning. It is said
            that children are the future of our country. I wanted to give them
            proper resources and guidance for a better tomorrow.
          </p>
        </div>
        <div className="aboutpage__col">
          <h3>About Us</h3>
          <h2 className="abouthead aboutpage__foundr">
            Creating Flashcards
            <br />
            that Nurture
          </h2>
          <p className="paragraph about__text aboutpage__col__text">
            A child’s mind is not a container to be filled but rather a fire to
            be kindled. To kindle the fire of passion and curiosity,
            establishing connections with the things around them is of utmost
            importance. And here flashcards come to play. It is a fun way to
            incorporate different concepts in children. To help your children be
            the icons of tomorrow, Brain Foods Flashcards stays as the best
            path.
          </p>
        </div>
      </div>
      <div className="history">
        <div className="history__col">
          <h3>History</h3>
          <h2 className="aboutpage__foundr abouthead">
            The Untold Story
            <br />
            Of Brain Foods
          </h2>
          <p className="paragraph about__text aboutpage__col__text">
            During this lockdown, it was a tough time for both parents and kids
            to get on with online learning. In the world of today, interactive
            learning was something that was dying day by day. We wanted to bring
            that back and introduce in such a way both parents and kids are
            equally benefitted with that. This led to the birth of BrainFoods.
            Our motive is to educate children and along with that inculcating
            the traditional values we have
          </p>
        </div>
        <div className="history__col">
          <img
            src="/woman-child-playing-together.jpg"
            alt="Mom And Child"
            className="history__col__img"
          />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;

import "./footer.scss";
import {
  IoLocationSharp,
  IoMail,
  IoCall,
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__col1">
          <div className="footer__col1__head">BeylaBee</div>
          <div className="text">
            <a
              href="mailto:beylaofficial@gmail.com"
              className="footer__col1__mail text"
            >
              <IoMail className="footer__icn" />
              beylaofficial@gmail.com
            </a>
          </div>
          <div className="text">
            <IoLocationSharp className="footer__icn" />
            Kothad, Kochi
          </div>
          <div className="text">
            <IoCall className="footer__icn" />
            <a href="tel:+91 80863 24545" className="footer__col1__mail text">
              +91 80863 24545
            </a>
          </div>
        </div>
      </div>
      <div className="text copytext">
        <div>
          © 2020 | All rights reserved<br></br> Designed And Developed by &nbsp;
          <a href="https://www.oronium.com/" className="oronium">
            Oronium
          </a>
        </div>
        <div className="copytext__social">
          <Link to="">
            <IoLogoWhatsapp
              color="#b9b9b9"
              className="copytext__icn"
              onClick={() => {
                window.open("https://www.beylabee.com/", "_blank");
              }}
            />
          </Link>
          <Link to="/">
            <IoLogoFacebook
              color="#b9b9b9"
              className="copytext__icn"
              onClick={() => {
                window.open("https://www.facebook.com/BeylaScience", "_blank");
              }}
            />
          </Link>
          <Link to="/">
            <IoLogoInstagram
              onClick={() => {
                window.open("https://www.instagram.com/beyla_bee/", "_blank");
              }}
              color="#b9b9b9"
              className="copytext__icn"
            />
          </Link>
          <Link to="">
            <IoLogoTwitter
              onClick={(e) => {
                window.open("https://twitter.com/BeeBeyla", "_blank");
              }}
              color="#b9b9b9"
              className="copytext__icn"
            />
          </Link>
          <Link to="/">
            <IoLogoYoutube
              onClick={(e) => {
                window.open(
                  "https://www.youtube.com/channel/UC-objGcIMWI3E-d0Hmcj-TQ",
                  "_blank"
                );
              }}
              color="#b9b9b9"
              className="copytext__icn"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

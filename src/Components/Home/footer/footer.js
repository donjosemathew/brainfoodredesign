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
          <div className="footer__col1__head">BrainFoods</div>
          <div className="text">
            <a
              href="mailto:beylaofficial@gmail.com"
              className="footer__col1__mail text"
            >
              <IoMail className="footer__icn" />
              brainfoods2020@gmail.com
            </a>
          </div>
          <div className="text">
            <IoLocationSharp className="footer__icn" />
            Thane, Mumbai
          </div>
          <div className="text">
            <IoCall className="footer__icn" />
            <a href="tel:+91 93218 58455" className="footer__col1__mail text">
              +91 93218 58455
            </a>
          </div>
        </div>
      </div>
      <div className="text copytext">
        <div>
          © 2020 | All rights reserved<br></br> Designed And Developed by &nbsp;
          <a
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            href="https://www.oronium.com/"
            className="oronium"
          >
            Oronium
          </a>
        </div>
        <div className="copytext__social">
          <Link to="">
            <IoLogoWhatsapp
              color="#b9b9b9"
              className="copytext__icn"
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send?phone=919321858455",
                  "_blank"
                );
              }}
            />
          </Link>
          <Link to="/">
            <IoLogoFacebook
              color="#b9b9b9"
              className="copytext__icn"
              onClick={() => {
                window.open(
                  "https://www.facebook.com/brainfoods2020/",
                  "_blank"
                );
              }}
            />
          </Link>
          <Link to="/">
            <IoLogoInstagram
              onClick={() => {
                window.open("https://instagram.com/brainfoods2020", "_blank");
              }}
              color="#b9b9b9"
              className="copytext__icn"
            />
          </Link>
          <Link to="">
            <IoLogoTwitter
              onClick={(e) => {
                window.open("https://twitter.com/", "_blank");
              }}
              color="#b9b9b9"
              className="copytext__icn"
            />
          </Link>
          <Link to="/">
            <IoLogoYoutube
              onClick={(e) => {
                window.open(
                  "https://www.youtube.com/channel/UCykVRRWnJgKTvUIBS5elyaw",
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

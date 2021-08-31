import { SiWhatsapp } from "react-icons/si";
import "./whatsapp.scss";
const Whatsapp = () => {
  return (
    <div
      class="contactWhatsapp"
      onClick={() => {
        window.open(
          "https://api.whatsapp.com/send?phone=919321858455",
          "_blank"
        );
      }}
    >
      <SiWhatsapp className="contactWhatsapp_icon" />
    </div>
  );
};

export default Whatsapp;

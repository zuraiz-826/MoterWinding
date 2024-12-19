import { FaLocationDot, FaLinkedin, FaPhone, FaVoicemail, FaEnvelope } from "react-icons/fa6";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topBarContainer">
      <div className="container-lg">
        <div className="topBar">
          <div className="topBarLeft">
            <a
              href="https://www.google.com/maps?q=144+Ras+Al+Khor+St+-+Ras+Al+Khor+Industrial+Area+-+Dubai+-+United+Arab+Emirates"
              className="locationText"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLocationDot className="locationIcon  " /> 144 Ras Al Khor St -
              Ras Al Khor Industrial Area - Dubai - United Arab Emirates
            </a> 
            <a
              href="tel::+971505181836"
              className="locationText phoneNumberText"
            >
              <FaPhone className="locationIcon" /> <span>+971505181836</span>{" "}
            </a>

            <a
              href="mailto::as.equiprepair@gmail.com"
              className="locationText phoneNumberText"
            >
              <FaEnvelope className="locationIcon" /> <span>as.equiprepair@gmail.com</span>{" "}
            </a>
          </div>
          <div className="topBarRight">
            <div className="social">
              <a
                href="https://sa.linkedin.com/company/etqan-taiba-company?trk=public_post-text"
                target="_blank"
                rel="noopener noreferrer"
                className="socialLink"
              >
                <FaLinkedin className="linkDinIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

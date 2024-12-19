import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footerBarnd">
              <a className="navbar-brand" href="#">
                <span className="brandName"> Azhar Suhail </span> Equipment Repairing
              </a>
              <p className="mainText">Best Service, Best Price</p>

              <a href="mailto::as.equiprepair@gmail.com" className="  phoneNumberText">
                <FaEnvelope className="locationIcon" /> <span>as.equiprepair@gmail.com</span>{" "}
              </a>

              <div className="socilLink">
                <a href="#" className="footerLink">
                  <FaLinkedin className="socialIcon" />{" "}
                </a>
                <a href="#" className="footerLink">
                  <FaInstagram className="socialIcon" />{" "}
                </a>
                <a href="#" className="footerLink">
                  <FaFacebook className="socialIcon" />{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="footerLinksCol">
              <h3 className="mdHeading">Quick Links</h3>
              <ul className="footerLinkList">
                <li>
                  <a className="footerLink" href="#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a className="footerLink" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="footerLink" href="#services">
                    Business & Services
                  </a>
                </li>
                <li>
                  <a className="footerLink" href="#contact">
                    Get in touch
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="footerLinksCol">
              <h3 className="mdHeading">Services</h3>
              <ul className="footerLinkList">
                <p className="footerLink">Motor Repair & Rewinding</p>
                <p className="footerLink">Generator Repair & Maintenance</p>
                <p className="footerLink">Pool Pump Services</p>
                <p className="footerLink">Water Pump Repair & Maintenance</p>
                <p className="footerLink">Bar Bending motors</p>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="footerLinksCol">
              <h3 className="mdHeading">Industrie</h3>
              <ul className="footerLinkList">
                <li>
                  <a className={`footerLink  `} href="#">
                    Real estate & Property manage
                  </a>
                </li>
                <li>
                  <a className={`footerLink  `} href="#">
                    Hospitality
                  </a>
                </li>
                <li>
                  <a className={`footerLink  `} href="#">
                    Construction Companies
                  </a>
                </li>
                <li>
                  <a className={`footerLink  `} href="#">
                    Water & sewerage
                  </a>
                </li>
                <li>
                  <a className={`footerLink  `} href="#">
                    Manufacturing & Industrial Factory
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p className="mainText">Copyright &copy; 2024 All Rights Reserved by Azhar Suhail Equipment Repairing</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

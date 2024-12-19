import "./herosection.css";
import heroVideo from "../../assets/fan-motor-winding-service-5.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Herosection = () => {
  useGSAP(() => {
    gsap.to(".heroContent", {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: "power3.inOut",
    });
  }); 
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (window.innerHeight / 3)) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="heroSection" id="hero">
        <img
          src={heroVideo}
          alt="heroVideo"
          loading="lazy"
          className="heroVideo"
        ></img>
        <div className="heroContent">
          <h1 className="heroHeading">
            Expert Motor Rewinding Service In Dubai
          </h1>
          <p className="mainText">
            We provide top-quality repair services for all types of electric
            motors, pool pumps, submersible pumps, water pumps, generators, bar
            bending machines, and more—ensuring reliability without the high
            cost.
          </p>
          <div className="heroBtn">
            <a href="#" className="mainBtn strokeBtn">
              See how
            </a>
            <a href="#" className="mainBtn whatsappBtn">
            <FaWhatsapp className="whatsappIcon"/>
             WhatsApp Us
            </a>
          </div>
        </div>
      </section>
 
      <button onClick={scrollToTop} className={`backToTopBtn ${!show && "show"}`}>
        <MdOutlineKeyboardArrowUp className="topArrow" />
      </button> 
    </>
  );
};

export default Herosection;

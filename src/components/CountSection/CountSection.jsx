import { useEffect, useState } from "react";
import "./countStyling.css";
import CountUp from "react-countup";
import elemntor from "../../assets/elementor-work.svg"; 

const CountSection = () => {
    const [startCount, setStartCount] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setStartCount(true)
            }
        },
        {threshold: 0.5}
    );

    const section = document.querySelector('.countSection');
    if(section){
        observer.observe(section)
    }
    
    return () => {
        if(section) {
            observer.unobserve(section)
        }
    }
    }) 

  return (
    <section className="countSection">
      <div className="container">
        <div className="col-lg-7 mx-auto">
          <div className="countSectionContainer">
            <div className="row">
              <div className="col-lg-6">
                <div className="countNumberContent">
                  <h1 className="mdHeading">{startCount && <CountUp start={0} end={15} duration={2} />}+</h1>
                  <p className="mainText">years of <br /> experience</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="countNumberContent">
                <h1 className="mdHeading">{startCount && <CountUp start={0} end={1100} duration={2} />}+</h1>
                <p className="mainText">projects <br /> completed</p>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
      <img src={elemntor} alt="elemenor icon" className="countElementorImg" />  
    </section>
  );
};

export default CountSection;

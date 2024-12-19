import "./services.css";
import service1 from "../../assets/services.webp";
import service2 from "../../assets/services-3.webp";
import service3 from "../../assets/services-1.png";
import service4 from  "../../assets/services-4.jpg";
import service5 from "../../assets/services-5.png";
import service6 from  "../../assets/services-6.png";

import { MdArrowForwardIos } from "react-icons/md";

const Services = () => {
  return (
    <section className="servicesSection" id="services">
      <div className="container">
        <h2 className="mdHeading">
          Business and Services
        </h2>

        <div className="row">
          <div
            className="col-lg-4 col-sm-6" 
          >
            <div className="card">
              <img src={service1} className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="smHeading">Motor Rewinding</h5>
                <div className="arrowIconContainer">
                  <MdArrowForwardIos className="arrowIcon" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6" 
          >
            <div className="card">
              <img src={service3} className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="smHeading">Pool Pumps</h5>
                <div className="arrowIconContainer">
                  <MdArrowForwardIos className="arrowIcon" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6" 
          >
            <div className="card">
              <img src={service2} className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="smHeading">Generators</h5>
                <div className="arrowIconContainer">
                  <MdArrowForwardIos className="arrowIcon" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6" 
          >
            <div className="card">
              <img src={service4} className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="smHeading">Water Pumps</h5>
                <div className="arrowIconContainer">
                  <MdArrowForwardIos className="arrowIcon" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6" 
          >
            <div className="card">
              <img src={service5} className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="smHeading">Bar Bending Motors</h5>
                <div className="arrowIconContainer">
                  <MdArrowForwardIos className="arrowIcon" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6" 
          >
            <div className="card">
              <img src={service6} className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="smHeading">Submersible Pumps</h5>
                <div className="arrowIconContainer">
                  <MdArrowForwardIos className="arrowIcon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

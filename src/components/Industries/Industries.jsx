import React from "react";
import "./Insdustries.css";
import industries1 from "../../assets/industires-1.jpg";
import industries2 from "../../assets/industires-2.jpg";
import industries3 from "../../assets/industires-3.jpg";
import industries4 from "../../assets/industires-4.jpg";
import industries5 from "../../assets/industires-5.jpg";
import industries6 from "../../assets/industires-6.jpg";

const Industries = () => {
  return (
    <section className="IndustriesSection" id="Industries">
      <div className="contentHeader">
        <div className="container">
          <div className="InduestiesHead">
            <h2 className="mdHeading  ">Industries We Serve </h2>
            <div className="industriesHeadTextContent">
              <p className="mainText">At Azhar Suhail Equipment Repairing, we specialize in providing expert services for motor rewinding, coil winding, generator repairs, bar-bending motor maintenance, pool pump repairs, water pump repairs, and a wide range of industrial motor and generator solutions</p>

              <p className="mainText">With years of experience and a commitment to excellence, we cater to various industries, ensuring reliable and efficient repairs to minimize downtime and maximize performance. Trust us for all your motor and generator servicing needs.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-xxl-10 col-lg-11 mx-auto">
          <div className="IndustriesRow" id="SwimmingPools">
            <div className="row colReverce">
              <div className="col-lg-6 p-lg-0 ">
                <div className="IndustriesImgCol">
                  <img src={industries1} alt="Swimming Pools" className="IndestreisImage" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="IndustriesTextCol">
                  <h1 className="mdHeading">Swimming Pools </h1>
                  <ul className="industriesList">
                    <li className="mainText">Services: Pool pump repair, maintenance and motor rewinding. </li>
                    <li className="mainText">Starting Price: AED 200.</li>
                    <li className="mainText">Special Offer: Discounts for villa communities and annual maintenance packages. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="IndustriesRow" id="RealEstate">
            <div className="row ">
              <div className="col-lg-6">
                <div className="IndustriesTextCol">
                  <h1 className="mdHeading">Real Estate (Residential & Commercial)</h1>
                  <ul className="industriesList">
                    <li className="mainText">Services: Repair and maintenance of building motors, water pumps and generators.</li>
                    <li className="mainText">Starting Price: AED 200.</li>
                    <li className="mainText">Special Offer: Special rates for bulk work and discounts for repeat customers.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6  p-lg-0  ">
                <div className="IndustriesImgCol">
                  <img src={industries2} alt="real estate" className="IndestreisImage" />
                </div>
              </div>
            </div>
          </div>

          <div className="IndustriesRow" id="WaterAndSewage">
            <div className="row colReverce">
              <div className="col-lg-6  p-lg-0 ">
                <div className="IndustriesImgCol">
                  <img src={industries3} alt="water and sewage" className="IndestreisImage" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="IndustriesTextCol">
                  <h1 className="mdHeading">Water and Sewage Management</h1>
                  <ul className="industriesList">
                    <li className="mainText">Services: Pump repairs for water treatment plants, sewage systems, and borewell motors.</li>
                    <li className="mainText">Starting Price: AED 200.</li>
                    <li className="mainText">Special Offer: Annual maintenance contracts with special rates.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="IndustriesRow" id="ManufacturingAndIndustry">
            <div className="row ">
              <div className="col-lg-6">
                <div className="IndustriesTextCol">
                  <h1 className="mdHeading">Manufacturing and Industry</h1>
                  <ul className="industriesList">
                    <li className="mainText">Services: Industrial motor rewinding, pump repairs, generator motor maintenance, and conveyor belt motor services.</li>
                    <li className="mainText">Starting Price: Based on motor size and type.</li>
                    <li className="mainText">Special Offer: Discounts for factory setups and repeat services.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6  p-lg-0  ">
                <div className="IndustriesImgCol">
                  <img src={industries4} alt="Manufacturing and industry" className="IndestreisImage" />
                </div>
              </div>
            </div>
          </div>

          <div className="IndustriesRow" id="Hospitality">
            <div className="row colReverce">
              <div className="col-lg-6  p-lg-0 ">
                <div className="IndustriesImgCol">
                  <img src={industries5} alt="water and sewage" className="IndestreisImage" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="IndustriesTextCol">
                  <h1 className="mdHeading">Hospitality</h1>
                  <ul className="industriesList">
                    <li className="mainText">Services: Pump repairs for water treatment plants, sewage systems, and borewell motors.</li>
                    <li className="mainText">Starting Price: AED 200.</li>
                    <li className="mainText">Special Offer: Annual maintenance contracts with special rates.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="IndustriesRow" id="constructionsCompanies">
            <div className="row ">
              <div className="col-lg-6">
                <div className="IndustriesTextCol">
                  <h1 className="mdHeading">Constructions Companies</h1>
                  <ul className="industriesList">
                    <li className="mainText">Services: Industrial motor rewinding, pump repairs, generator motor maintenance, and conveyor belt motor services.</li>
                    <li className="mainText">Starting Price: Based on motor size and type.</li>
                    <li className="mainText">Special Offer: Discounts for factory setups and repeat services.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6  p-lg-0  ">
                <div className="IndustriesImgCol">
                  <img src={industries6} alt="Manufacturing and industry" className="IndestreisImage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;

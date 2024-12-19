import "./EquipmentRepairing.css";

const EquipmentRepairing = () => {
  return (
    <section className="EquipmentRepairing">
      <div className="container">
        <div className="col-lg-10 mx-auto">
          <div className="EquipmentRepairingTextContent">
            <h1
              className="mdHeading" 
            >
              Azhar Suhail Equipment Repairing 
              <span > 
                Better Performance, Better Value.
              </span>
            </h1>

            <p className="mainText" data-aos="fade-up" data-aos-duration="2000">
              &quot;Empowering industries with top-quality motor rewinding
              services that exceed expectations. Our commitment to excellence
              ensures superior performance at a cost that beats the competition.
              Experience reliability and efficiency that set the industry
              standard—today, tomorrow, and beyond.&quot;
            </p>
            <p
              className="founterText"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              — Muhammad Zuraiz Ahsan, Founder
            </p>

            <div
              className="heroBtn "
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <a href="#" className="mainBtn">
                Find out why we are the best
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentRepairing;

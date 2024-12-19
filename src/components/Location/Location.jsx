import "./location.css";

const Location = () => {
  return (
    <>
      <section className="LocationSection" id="contact">
        <div className="LocationContainer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contactInfo">
                  <h3 className="mdHeading mb-3">Send Message</h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div className="inputHolder">
                      <label htmlFor="name" className="inputLabal">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="inputArea"
                      />
                    </div>
                    <div className="inputHolder">
                      <label htmlFor="organization" className="inputLabal">
                        Organization/company
                      </label>
                      <input
                        type="text"
                        placeholder="Organization/Company"
                        className="inputArea"
                      />
                    </div>
                    <div className="inputHolder">
                      <label htmlFor="name" className="inputLabal">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="inputArea"
                      />
                    </div>
                    <div className="inputHolder">
                      <label htmlFor="name" className="inputLabal">
                        Your Phone Number
                      </label>
                      <input
                        type="number"
                        placeholder="+971-XX-1234567"
                        className="inputArea"
                      />
                    </div>
                    <div className="inputHolder">
                      <label htmlFor="name" className="inputLabal">
                        Your Message
                      </label>
                      <textarea
                        type="number"
                        rows={3.5}
                        placeholder="Your Message"
                        className="inputArea"
                      ></textarea>
                    </div>

                    <input
                      type="submit"
                      value={"send Message"}
                      className="mainBtn"
                    />
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="mapContainer"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <iframe
                    className="mapIframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4320.429864839061!2d55.3440067!3d25.18486330000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f678ef856e8b7%3A0x402d627b9789a78b!2sAzhar%20Suhail%20Equipment%20Repairing!5e1!3m2!1sen!2s!4v1732608007575!5m2!1sen!2s"
                    width="100%"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;

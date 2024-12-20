import { useState } from "react";
import "./navbar.css";
import { FaWhatsapp } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar navbar-expand-xl  customNavbar">
      <div className="container-xl">
        <a className="navbar-brand" href="#">
          <span className="brandName"> Azhar Suhail </span> Equipment Repairing
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link " href="#hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li
              className="nav-item dropdown"
              onMouseLeave={() => {
                setShow(false);
              }}
            >
              <a
                className="nav-link  "
                href="Industries"
                onMouseEnter={() => {
                  setShow(true);
                }}
              >
                Industries <MdArrowDropDown className="dropArrowDown ms-2" />
              </a>
              <ul
                className={`dropdown-menu ${show && "show"}`}
                aria-labelledby="industriesDropdown"
              >
                <li>
                  <a
                    className={`dropdown-item `}
                    href="#SwimmingPools"
                  >
                  Swimming Pools
                  </a>
                </li>
                <li>
                  <a
                    className={`dropdown-item `}
                    href="#RealEstate"
                  >
                    Real estate & Property manage
                  </a>
                </li>
                
                <li>
                <a
                    className={`dropdown-item `}
                    href="#WaterAndSewage"
                  >
                    Water & sewerage
                  </a>
                </li>
                
                <li>
                <a
                    className={`dropdown-item `}
                    href="#ManufacturingAndIndustry"
                  >
                    Manufacturing & Industrial Factory
                  </a>
                </li>
                <li>
                <a
                    className={`dropdown-item `}
                    href="#Hospitality"
                  >
                    Hospitality
                  </a>
                </li>
                <li>
                <a
                    className={`dropdown-item `}
                    href="#constructionsCompanies"
                  >
                    Construction Companies
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Get in touch
              </a>
            </li>
          </ul>
          <a href="https://wa.me/+971505181836" target="_blank" className="mainBtn ms-1" >
            <FaWhatsapp className="whatsappIcon" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

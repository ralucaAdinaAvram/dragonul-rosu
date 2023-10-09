import React from "react";
import "../components/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { BiAnalyse } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <FaTwitterSquare />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>

      <div className="left-footer">
        <div className="address">
          <p className="adress-links">
            <FaMapMarkerAlt style={{ fontSize: "33px" }} /> 21 Caulidor Terrace,
            NE4 7GB, Newcastle upon Tyne
          </p>
          <p className="adress-links">
            <FaPhoneVolume style={{ fontSize: "33px" }} /> +44 07570 949 597
          </p>
          <p className="adress-links">
            <AiFillMail style={{ fontSize: "33px" }} /> TRL@yahoo.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

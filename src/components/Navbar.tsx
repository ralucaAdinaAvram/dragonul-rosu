import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";
import { BiAnalyse } from "react-icons/bi";
import BarsDark from "../images/barsDark.png";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 768 ? true : false);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768 && !mobile) {
      setMobile(true);
    } else if (window.innerWidth >= 768 && mobile) {
      setMobile(false);
    }
  });

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className="navbar-container">
        <nav className={navbar ? "navbar active" : "navbar"}>
          <div className="logo-nav">
            <p>
              TRL
              <BiAnalyse className="logo-size" />
            </p>
          </div>

          {mobile === true ? (
            <>
              <div onClick={() => setMenuOpened(!menuOpened)}>
                <img
                  src={BarsDark}
                  alt=""
                  style={{ width: "5rem", height: "5rem", marginRight: "30px" }}
                />
              </div>
              <>
                {" "}
                <ul
                  className="tabs"
                  style={!menuOpened ? { display: "none" } : {}}
                >
                  <Link to="/">
                    <li className="menu-tabs">Home</li>
                  </Link>
                  <Link to="/about">
                    <li className="menu-tabs">About</li>
                  </Link>
                  <Link to="/products">
                    <li className="menu-tabs">Products</li>
                  </Link>
                  <Link to="/contact">
                    <li className="menu-tabs">Contact</li>
                  </Link>
                </ul>
              </>
            </>
          ) : (
            <>
              {" "}
              <ul className="tabs">
                <Link to="/">
                  <li className="menu-tabs">Home</li>
                </Link>
                <Link to="/about">
                  <li className="menu-tabs">About</li>
                </Link>
                <Link to="/products">
                  <li className="menu-tabs">Products</li>
                </Link>
                <Link to="/contact">
                  <li className="menu-tabs">Contact</li>
                </Link>
              </ul>
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;

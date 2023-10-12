import React from "react";
import "../components/ZoomImages.css";
import { Link } from "react-router-dom";
import Products from "./Products";

function ZoomImages() {
  return (
    <>
      <div className="Zoom-images">
        <div className="text">
          <h3>You have the ideas! </h3>
          <h2>We have the technology !</h2>
        </div>

        <div className="images-section">
          <div className="card">
            <div className="card-image headphones"></div>
            <h2>High Quality Technology</h2>
            <Link to="/Products">
              <button>Standard Plan</button>
            </Link>
          </div>

          <div className="card">
            <div className="card-image tablet"></div>
            <h2>High Speed Technology</h2>
            <Link to="/Products">
              <button>Premium Plan</button>
            </Link>
          </div>

          <div className="card">
            <div className="card-image watch"></div>
            <h2>Fast tracking technology</h2>
            <Link to="/Products">
              <button>Basic Plan</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZoomImages;

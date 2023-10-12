import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import ZoomImages from "./ZoomImages";

import "../components/Home.css";
import Modal from "./Modal";
import Discover from "./Discover";

function Home() {
  const [modal, setModal] = useState(true);
  const toggleModal = () => {
    setModal(false);
  };

  return (
    <>
      <div onClick={toggleModal} className="btn-modal">
        <HeroSection />
        <ZoomImages />
        <Discover />
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
            <div className="modal-content">
              <Modal open={modal} onClose={() => {}} />
              {/* Alternatively, you can define an empty function separately:
               * const emptyFunction = () => {};
               * And pass it like this: <Modal open={modal} onClose={emptyFunction} /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;

import React from 'react'
import Turbine from '../images/turbine-about.webp';
import './About.css'

const About = () => {
  return (
    <>
   
    <div className="hero-about">
      <div class="hero-container-about">
        <div class="column-left-about">
          <h4>Who are we?</h4>
          <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
        </div>
        <div class="column-right-about">
          <img
            src={Turbine}
            alt="illustration
        "
            class="hero-image-about"
          />
        </div>
      </div>
    </div>
    </>
       
  )
}

export default About
import React from "react";
import { NavLink } from "react-router-dom";
import virat from '../assets/virat.png';

const Home = () => {
  return (
    <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">LOTUS365 INDIA<br/><span>OFFICIAL SITE</span> </p>
            <NavLink>
              <Button>JOIN NOW!</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src={virat}
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
  );
};

export default Home;

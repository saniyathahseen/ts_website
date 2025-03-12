import React from "react";
import "./About.css";
import img4 from "./../../Assets/Images/about/1.jpg";

const About = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row justify-content-center w-100">
        <div className="col-lg-8">
          <div className="card text-center shadow-lg border-0 p-4">
            <div className="row g-0 align-items-center">
              {/* Left Side: Image */}
              <div className="col-md-6 d-flex justify-content-center">
                <img
                  className="about-img"
                  src={img4}
                  alt="Teamshadow Weddings"
                />
              </div>

              {/* Right Side: Text Content */}
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title text-uppercase">Teamshadow Weddings</h1>
                  <div className="meta card-text">
                    <p className="fw-bold">Moment. Memory. Miracle.</p>
                    <p>
                      The journey is never about a shot but the unsaid stories within
                      the shooting experience. The quest within is for something truly
                      <em>epiphanic</em>.
                    </p>
                    <p>
                      As an artist, I seek to capture what is not seen by the naked eye but felt by the soul.
                    </p>
                    <p>
                      The world is material, but I am still searching for a metaphor within it.
                      Anything that allows me to create what is not felt is my true domain.
                    </p>
                    <p className="fw-bold">People. Photographs. Perfection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
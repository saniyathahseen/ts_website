import React from "react";
import "./About.css";
import img4 from "./../../Assets/Images/4.jpg"

const About = () => {
  return (
    <center>
      <div className="card mb-3 text-center" style={{ maxWidth: "50rem" }}>
        <div className="card-body float-end">
          <div className="container">
            <div className="row">
              <div className="col">
                <img className="card-img-top float-start" src={img4} alt="placeholderimage"></img>
              </div>
              <div className="col">
                <h1 className="card-title">Teamshadow Weddings</h1>
                <div className="meta card-text">
                  <p>
                    <strong>Moment. Memory. Miracle.</strong>
                  </p>
                  <p>
                    The journey is never about a shot but the unsaid stories within
                    the shooting experience.The quest within is of something which
                    is ‘epiphanic’.
                  </p>
                  <p>
                    As an artist whose medium of bringing the art to the world is an
                    intent of compartmentalising the moments, I am all about things
                    which are not seen by the naked eye but a soul which feels what
                    cannot be said through any other medium.
                  </p>
                  <p>
                    The world is material but I am still looking for a metaphor in
                    it. Anything which can allow me the space to create what is not
                    felt is the domain I am looking for.
                  </p>
                  <p>
                    <strong>People. Photographs. Perfection.</strong>
                  </p>
                </div>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default About;

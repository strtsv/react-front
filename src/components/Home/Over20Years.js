import React from "react";
import $ from "jquery";

import i1 from "../../assets/images/bg-img-1.jpg";
import i2 from "../../assets/images/home-1-1169x512.png";

// import "../../assets/js/jquery.rd-parallax.js";
// import "../../assets/js/parallax.core.min.js";

class Over20Years extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      // window.RDParallax_autoinit(".parallax-container");
      $(".parallax-container").parallax({ imageSrc: i1 });
    });
  }
  render() {
    return (
      <section
        className="section parallax-container"
        data-parallax-img={i1}
        data-url={i1}
      >
        <div className="parallax-content section-lg context-dark text-center pb-0">
          <div className="container">
            <h3 className="wow fadeInLeft text-center">
              Over 20 Years of Industry Experience
            </h3>
            <p className="wow fadeInRight text-center subtitle">
              Founded in 1999, our studio is a team of creative web development
              experts you can trust.
            </p>
            <div className="offset-xl-60 wow fadeInUp">
              <img src={i2} alt width={1169} height={512} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Over20Years;

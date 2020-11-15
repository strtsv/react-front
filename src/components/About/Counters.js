import React from "react";
import $ from "jquery";

import i from "../../assets/images/bg-img-1.jpg";

class Counters extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="section parallax-container"
        data-image-src={i}
        data-parallax-img={i}
      >
        <div className="parallax-content section-md context-dark text-center">
          <div className="container">
            <div className="row row-30">
              <div className="col-6 col-md-3">
                {}
                <div className="box-counter">
                  <div className="box-counter-main">
                    <div className="counter">320</div>
                  </div>
                  <div className="box-counter-divider" />
                  <p className="box-counter-title">Projects Done</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                {}
                <div className="box-counter">
                  <div className="box-counter-main">
                    <div className="counter">150</div>
                  </div>
                  <div className="box-counter-divider" />
                  <p className="box-counter-title">Happy Clients</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                {}
                <div className="box-counter">
                  <div className="box-counter-main">
                    <div className="counter">933</div>
                  </div>
                  <div className="box-counter-divider" />
                  <p className="box-counter-title">Coffee Cups </p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                {}
                <div className="box-counter">
                  <div className="box-counter-main">
                    <div className="counter">975</div>
                  </div>
                  <div className="box-counter-divider" />
                  <p className="box-counter-title">Great Ideas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Counters;

import React from "react";

class About extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default">
        <div className="container">
          <h3 className="wow fadeInLeft text-center">About us</h3>
          <p className="wow fadeInRight text-center subtitle">
            A few words about our company
          </p>
          <div className="row row-20 row-xl justify-content-center">
            <div className="col-lg-6 col-md-10 wow fadeInUp">
              <p className="text-sm">
                We are a growing team of creative and business thinkers, our
                sole purpose is to bring you quality web development solutions
                and digital marketing services. We were founded on a belief that
                when we do what we love, there is no need to strive for
                excellence, rather there is a desire to excel. Our studio is
                driven by a passion to design, build, and market eCommerce
                stores, websites and web/cloud applications, thus delivering
                quality work to all our customers and business partners.
              </p>
            </div>
            <div
              className="col-lg-6 col-md-10 wow fadeInUp"
              data-wow-delay=".2s"
            >
              {}
              <div className="progress-linear progress-creative yellow">
                <div className="progress-linear-header">
                  <p className="progress-linear-title">Knowledge</p>
                  <span className="progress-linear-counter">54</span>
                </div>
                <div className="progress-linear-body">
                  <div className="progress-linear-bar" />
                </div>
              </div>
              {}
              <div className="progress-linear progress-creative orange">
                <div className="progress-linear-header">
                  <p className="progress-linear-title">Dedication</p>
                  <span className="progress-linear-counter">73</span>
                </div>
                <div className="progress-linear-body">
                  <div className="progress-linear-bar" />
                </div>
              </div>
              {}
              <div className="progress-linear progress-creative primary">
                <div className="progress-linear-header">
                  <p className="progress-linear-title">Professionalism</p>
                  <span className="progress-linear-counter">87</span>
                </div>
                <div className="progress-linear-body">
                  <div className="progress-linear-bar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

import React from "react";

class Service extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default">
        <div className="container">
          <div className="row row-40">
            <div
              className="col-xl-3 col-sm-6 wow fadeInUp"
              data-wow-delay=".1s"
            >
              <div className="service-box-classic">
                <span className="icon tm-magic" />
                <a className="h6" href="#">
                  WEB-DESIGN
                </a>
                <p>
                  We create responsive and content-driven websites that allow
                  our customers to attract more potential customers to their
                  companies’ products and services, while also looking
                  professional and compelling.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-box-classic">
                <span className="icon tm-gear" />
                <a className="h6" href="#">
                  WEB DEVELOPMENT
                </a>
                <p>
                  From conceptualizing your idea on our whiteboard to
                  maintaining the integrity of the final result, we fully
                  understand what it takes to create a successful website and
                  stay relevant to your consumers.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-box-classic">
                <span className="icon tm-support" />
                <a className="h6" href="#">
                  customer Support
                </a>
                <p>
                  By providing qualified and efficient customer support 24/7, we
                  guarantee that you will get an instant consultation and an
                  easy solution for any issues you may have with your website.
                  We are always ready to help you.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="service-box-classic">
                <span className="icon tm-volume" />
                <a className="h6" href="#">
                  digital Marketing
                </a>
                <p>
                  Our skilled team of marketers will create, manage, and deliver
                  top-performing digital media campaigns for your business. With
                  our solutions, you can become a business influencer through
                  the qualified approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;

import React from "react";

import OwlCarousel from "react-owl-carousel";
import "../../assets/css/owl.carousel.css";

import i1 from "../../assets/images/user-1-70x70.jpg";
import i2 from "../../assets/images/user-2-70x70.jpg";
import i3 from "../../assets/images/user-3-70x70.jpg";

const options = {
  loop: false,
  autoplay: false,
  dots: false,
  nav: true,
  items: 1,
  navText: [],
};

class Owl extends React.Component {
  render() {
    return (
      <section className="section section-md bg-secondary">
        <div className="container">
          <div className="owl-wrapper">
            <ul className="owl-pagination-custom">
              <li data-owl-item={0}>
                <img src={i1} alt width={70} height={70} />
              </li>
              <li data-owl-item={1}>
                <img src={i2} alt width={70} height={70} />
              </li>
              <li data-owl-item={2}>
                <img src={i3} alt width={70} height={70} />
              </li>
            </ul>
            <div
              className="owl-dots-secondary dots-offset-lg"
              // className="owl-carousel owl-dots-secondary dots-offset-lg"
              data-dots-custom=".owl-pagination-custom"
              data-items={1}
              data-sm-items={1}
              data-dots-each={2}
              data-lg-items={1}
              data-dots="false"
              data-arrows="true"
              data-nav="false"
              data-stage-padding={0}
              data-loop="false"
              data-margin={30}
              data-mouse-drag="false"
            >
              <OwlCarousel {...options}>
                <div className="owl-slide">
                  <span>Robert Adams</span>
                  <p>
                    “After an extensive search and an interview process with
                    several Web Development companies, we had chosen this studio
                    to create what we believe is a perfect representation of our
                    company’s image. Mr. Johnson with his dedicated and creative
                    team has exceeded our expectations on all levels. We are
                    very grateful for what they delivered.”
                  </p>
                </div>
                <div className="owl-slide">
                  <span> Monica Perry</span>
                  <p>
                    “This web development & marketing studio has provided web
                    services for our company, as well as for some of our
                    clients. They have given each of us effective, creative, and
                    successful ways to bring our companies and products to life
                    on the web. All our suggestions and ideas were taken into
                    consideration and successfully implemented.“
                  </p>
                </div>
                <div className="owl-slide">
                  <span>John Smith</span>
                  <p>
                    “We have worked with this team on many website building and
                    online marketing projects and have found them to be great
                    partners. They are efficient, flexible and very responsive
                    to our needs. The company is also very community-minded,
                    providing many of our non-profit clients with technical
                    support and in-kind services. We love their design ideas and
                    highly recommend them.”
                  </p>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Owl;

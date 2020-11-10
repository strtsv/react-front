import React from "react";
import Swiper from "swiper";

import s1 from "../../assets/images/swiper-slide-1.jpg";
import s2 from "../../assets/images/swiper-slide-2.jpg";

import i1 from "../../assets/images/home-1-144x144.png";
import i2 from "../../assets/images/home-1-144x144.png";

export default class Slider extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      speed: 1000,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
      },
    });
  }
  render() {
    return (
      <section className="section swiper-container swiper-slider swiper-style-1">
        <div className="swiper-wrapper text-center">
          <div
            className="swiper-slide context-dark"
            data-slide-bg={s1}
            style={{
              backgroundImage: "url(" + s1 + ")",
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="row justify-content-lg-center">
                  <div className="col-12">
                    <img
                      src={i1}
                      alt
                      width={144}
                      height={144}
                      data-caption-animate="fadeInUp"
                      data-caption-delay={100}
                    />
                    <div
                      className="h1"
                      data-caption-animate="fadeInRight"
                      data-caption-delay={100}
                    >
                      Web Development
                    </div>
                    <p
                      className="lead"
                      data-caption-animate="fadeInLeft"
                      data-caption-delay={250}
                    >
                      Providing qualified web development services
                    </p>
                    <a
                      className="button-sm button text-lowercase button-primary button-animated"
                      href="#"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={450}
                    >
                      more info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg={s2}
            style={{
              backgroundImage: "url(" + s2 + ")",
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="row justify-content-lg-center">
                  <div className="col-12">
                    <img
                      src={i2}
                      alt
                      width={144}
                      height={144}
                      data-caption-animate="fadeInUp"
                      data-caption-delay={100}
                    />
                    <div
                      className="h1"
                      data-caption-animate="fadeInRight"
                      data-caption-delay={100}
                    >
                      Online Marketing
                    </div>
                    <p
                      className="lead"
                      data-caption-animate="fadeInLeft"
                      data-caption-delay={250}
                    >
                      Solutions that really drive your company’s success
                    </p>
                    <a
                      className="button-sm button text-lowercase button-primary button-animated"
                      href="#"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={450}
                    >
                      more info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="swiper-pagination" />
        {}
        <div className="swiper-button-prev fa-arrow-left" />
        <div className="swiper-button-next fa-arrow-right" />
      </section>
    );
  }
}

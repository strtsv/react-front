import React from "react";

import OwlCarousel from "react-owl-carousel";

import i1 from "../../assets/images/project-4-270x264.jpg";
import i2 from "../../assets/images/project-5-270x264.jpg";
import i3 from "../../assets/images/project-6-270x264.jpg";
import i4 from "../../assets/images/project-7-270x264.jpg";
import i5 from "../../assets/images/project-4-270x264.jpg";
import i6 from "../../assets/images/project-5-270x264.jpg";
import i7 from "../../assets/images/project-6-270x264.jpg";
import i8 from "../../assets/images/project-7-270x264.jpg";

const options = {
  loop: false,
  autoplay: false,
  dots: true,
  nav: false,
  items: 4,
  navText: [
    "<div class='owl-prev'><i class='fa fa-angle-left'></i></div>",
    "<div class='owl-next'><i class='fa fa-angle-right'></i></div>",
  ],
};

class Gallery extends React.Component {
  render() {
    return (
      <section className="section section-md bg-dark-gray">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="owl-style-2"
                // className="owl-carousel owl-style-2"
                data-dots-custom=".owl-pagination-custom"
                data-items={1}
                data-sm-items={2}
                data-md-items={3}
                data-lg-items={3}
                data-xl-items={4}
                data-dots-each={2}
                data-dots="true"
                data-arrows="false"
                data-nav="false"
                data-stage-padding={0}
                data-loop="false"
                data-margin={30}
                data-mouse-drag="false"
              >
                <OwlCarousel {...options}>
                  <div className="item">
                    <a
                      className="gallery-item"
                      href="images/project-4-954x583.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i1} alt width={270} height={264} />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      className="gallery-item"
                      href="images/project-5-954x583.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i2} alt width={270} height={264} />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      className="gallery-item"
                      href="images/project-6-954x583.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i3} alt width={270} height={264} />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      className="gallery-item"
                      href="images/project-7-954x583.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i4} alt width={270} height={264} />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      className="gallery-item"
                      href="images/project-4-954x583.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i5} alt width={270} height={264} />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      className="gallery-item"
                      href="images/project-5-954x583.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i6} alt width={270} height={264} />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      className="gallery-item"
                      href="images/project-6-954x583.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i7} alt width={270} height={264} />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      className="gallery-item"
                      href="images/project-7-954x583.jpg"
                      data-lightgallery="item"
                    >
                      <img src={i8} alt width={270} height={264} />
                    </a>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;

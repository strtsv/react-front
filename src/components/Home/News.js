import React from "react";

import i1 from "../../assets/images/news-1-370x217.jpg";
import i2 from "../../assets/images/news-2-370x217.jpg";
import i3 from "../../assets/images/news-3-370x217.jpg";

class News extends React.Component {
  render() {
    return (
      <section className="section section-md bg-gray-200">
        <div className="container">
          <h3 className="wow fadeInLeft text-center">Our news</h3>
          <p className="wow fadeInRight text-center subtitle">
            Read the latest news posted regularly by our experts
          </p>
          <div className="row row-xl row-30">
            <div className="col-lg-4 col-md-6 wow fadeInRight">
              <div className="news-box-classic">
                <a
                  className="news-box-classic-media"
                  href="images/news-1-1200x800-original.jpg"
                  data-lightgallery="item"
                >
                  <img src={i1} alt width={370} height={217} />
                </a>
                <a className="h6" href="#">
                  30 Examples of Illustration in Web Design
                </a>
                <p>
                  The illustration can turn an average website into something
                  really unique, it's a powerful and creative medium which can
                  identify and communicate...
                </p>
                <div className="news-box-classic-date">09 / 02 / 2020</div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="news-box-classic">
                <a
                  className="news-box-classic-media"
                  href="images/news-2-1200x800-original.jpg"
                  data-lightgallery="item"
                >
                  <img src={i2} alt width={370} height={217} />
                </a>
                <a className="h6" href="#">
                  Popular Web Design Trends in 2020
                </a>
                <p>
                  The concept of “Trends” can often be taken as less than
                  complimentary. However, knowing and experimenting with the
                  latest advancements leads to...
                </p>
                <div className="news-box-classic-date">09 / 02 / 2020</div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInRight wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="news-box-classic">
                <a
                  className="news-box-classic-media"
                  href="images/news-3-1200x800-original.jpg"
                  data-lightgallery="item"
                >
                  <img src={i3} alt width={370} height={217} />
                </a>
                <a className="h6" href="#">
                  15 Best Websites with Parallax Scrolling
                </a>
                <p>
                  Parallax scroll has become mainstream, Ian Coyle created the
                  very first parallax website for Nike in 2011, nowadays it is
                  overused as a trendy effect...
                </p>
                <div className="news-box-classic-date">09 / 02 / 2020</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;

import React from "react";

class HowToFindUs extends React.Component {
  render() {
    return (
      <section className="section section-md">
        <div className="container">
          <h3 className="wow fadeInLeft text-center">How to Find Us</h3>
          <p className="wow fadeInRight text-center subtitle">
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp
          </p>
          <div className="row row-xl row-20">
            <div className="col-12 wow fadeInUp">
              {}
              {}
              {}
              {}
              <div
                className="google-map-container"
                data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                data-zoom={5}
                data-icon="images/gmap_marker.png"
                data-icon-active="images/gmap_marker_active.png"
                data-styles="[]"
              >
                <div className="google-map" />
                <ul className="google-map-markers">
                  <li
                    data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                    data-description="9870 St Vincent Place, Glasgow"
                  />
                </ul>
              </div>
            </div>
            <div className="col-12">
              <p className="wow fadeInRIght">
                Praesent vestibulum molestie lacus. Aenean nonummy hendrerit
                mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis
                natoque penatibus et magnis dis parturient. montes, nascetur
                ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi
                nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas
                tristique orci ac sem. Duis ultricies pharetra magna. Donec
                accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit. Mauris fermentum dictum
                magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                elementum vel, cursus eleifend, elit.
              </p>
            </div>
            <div className="col-12 custom-col-1">
              <div className="contact-box wow fadeInUp" data-wow-delay=".1s">
                <div className="contact-box__name">Address:</div>
                <ul className="contact-box__list">
                  <li>8901 Marmora Road, Glasgow, D04 89GR</li>
                </ul>
              </div>
              <div className="contact-box wow fadeInUp" data-wow-delay=".2s">
                <div className="contact-box__name">Telephones:</div>
                <ul className="contact-box__list">
                  <li>
                    <a className="gray-link" href="tel:#">
                      +1 800 559 6580
                    </a>
                  </li>
                  <li>
                    <a className="gray-link" href="tel:#">
                      +1 800 603 6035
                    </a>
                  </li>
                </ul>
              </div>
              <div className="contact-box wow fadeInUp" data-wow-delay=".3s">
                <div className="contact-box__name">E-mail:</div>
                <ul className="contact-box__list">
                  <li>
                    <a className="primary-link" href="mailto:#">
                      info@demolink.org
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HowToFindUs;

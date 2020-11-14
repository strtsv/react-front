import React from "react";

import i1 from "../../assets/images/services-1-370x217.jpg";
import i2 from "../../assets/images/services-2-370x217.jpg";
import i3 from "../../assets/images/services-3-370x217.jpg";

class Development extends React.Component {
  render() {
    return (
      <section className="section section-md bg-dark-gray context-dark">
        <div className="container">
          <div className="row row-40">
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay=".1s"
            >
              <div className="service-big">
                <div className="h3">Professional Website Build</div>
                <a className="service-big__media" href="#">
                  <img src={i1} alt width={370} height={217} />
                </a>
                <p>
                  Nuacilisis at vero eros et accumsan et iusto odio dignissim
                  qui blandit praesent luptaum zzelenit augue duis dolore te
                  feugat claritatem insitam; est usus legentis in iis qui facit
                  eorum claritatem vestigationes demonstraverunt lectores legere
                  me lius quod ii legunt saepius.
                </p>
                <a href="#">more info</a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-big">
                <div className="h3">XTML & CSS Development</div>
                <a className="service-big__media" href="#">
                  <img src={i2} alt width={370} height={217} />
                </a>
                <p>
                  Planetas messis in antverpia! Abactuss messis, tanquam ferox
                  tumultumque. Vae. Lacteas volare! Flavum, bassus guttuss vix
                  quaestio de magnum, emeritis ventus. Vita de teres castor,
                  manifestum lacta! Nomens cantare, tanquam castus ventus.
                  Brevis, albus exemplars aliquando tractare de pius, velox
                  medicina.
                </p>
                <a href="#">more info</a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-big">
                <div className="h3">Wordpress Websites & Themes</div>
                <a className="service-big__media" href="#">
                  <img src={i3} alt width={370} height={217} />
                </a>
                <p>
                  Parmas tolerare! Cum extum trabem, omnes navises desiderium
                  varius, peritus turpises. Detrius, lumen, et cobaltum.
                  Indictios congregabo in ferox chremisa! Indexs credere! Imber,
                  hibrida, et cotta. Zeta alter lixa est. Cum usus favere, omnes
                  assimilatioes vitare regius, placidus tataes.
                </p>
                <a href="#">more info</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Development;

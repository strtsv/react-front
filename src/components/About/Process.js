import React from "react";

import i1 from "../../assets/images/about-1-570x251.jpg";
import i2 from "../../assets/images/about-2-570x251.jpg";

class Process extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default">
        <div className="container">
          <h3 className="wow fadeInLeft text-center"> Our Process</h3>
          <p className="wow fadeInRight text-center subtitle">
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp
          </p>
          <div className="row row-40 row-xl justify-content-center">
            <div className="col-12">
              <div className="row row-30">
                <div className="col-lg-6">
                  <div className="info-box">
                    <img src={i1} alt width={570} height={251} />
                    <p>
                      Ceonsequat,{" "}
                      <a className="primary-link" href="#">
                        vel illum dolore eu
                      </a>{" "}
                      feugiat nulla facilisis at vero eros et accumsan et iusto
                      odio dignissim qui blandit praesent luptaum zzelenit augue
                      duis dolore te feugait nulla facilisi. Typi non habent
                      claritatem insitam; est usus legentis in iis qui facit
                      eorum claritatem vestigationes demonstraverunt.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-box">
                    <img src={i2} alt width={570} height={251} />
                    <p>
                      Typi non habent claritatem insitam; est usus legentis in
                      iis qui facit eorum claritatem vestigationes
                      demonstraverunt lectores legere me lius quod ii legunt
                      saepius. Claritas est etiam{" "}
                      <a className="primary-link" href="#">
                        processus dynamicus, qui sequitur mutationem
                      </a>{" "}
                      consuetudium lectorum. Mirum est notare quam littera
                      gothica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row row-20">
                <div className="col-sm-6 col-lg-3">
                  <div className="process-step-box">
                    <span />
                    <div className="icon fa fa-lightbulb-o" />
                    <a className="h6" href="#">
                      Ideas
                    </a>
                    <p>
                      Cum frondator mori, omnes hippotoxotaes visum brevis,
                      ferox fraticinidaes.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="process-step-box">
                    <span />
                    <div className="icon fa fa-comments-o" />
                    <a className="h6" href="#">
                      discussion
                    </a>
                    <p>
                      Cum castor peregrinationes, omnes accolaes magicae castus,
                      nobilis compateres.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="process-step-box">
                    <span />
                    <div className="icon fa fa-desktop" />
                    <a className="h6" href="#">
                      design
                    </a>
                    <p>
                      Cum terror ire, omnes classises experientia fatalis,
                      domesticus hippotoxotaes.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="process-step-box">
                    <span />
                    <div className="icon fa fa-lightbulb-o" />
                    <a className="h6" href="#">
                      development
                    </a>
                    <p>
                      Cum bubo manducare, omnes heureteses aperto fatalis,
                      germanus fraticinidaes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Process;

import React from "react";

import i1 from "../../assets/images/project-1-670x342.jpg";
import i2 from "../../assets/images/project-2-670x342.jpg";
import i3 from "../../assets/images/project-3-670x342.jpg";

class RecentProjects extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default">
        <div className="container">
          <h3 className="wow fadeInLeft text-center">Recent Projects</h3>
          <p className="wow fadeInRight text-center subtitle">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </p>
          <div className="row row-xl row-40">
            <div className="col-12 wow fadeInUp" data-wow-delay=".1s">
              <div className="project-box">
                <a
                  className="project-box__media"
                  href="images/project-1-970x583-original.jpg"
                  data-lightgallery="item"
                >
                  <img src={i1} alt width={670} height={342} />
                </a>
                <div className="project-box__details">
                  <div className="project-box__head">
                    <a href="#">Praesent justo dolor</a>
                  </div>
                  <ul className="project-list">
                    <li>
                      <div className="icon fa fa-calendar" />
                      <span className="item-name">Date: Dec.12, 2020</span>
                    </li>
                    <li>
                      <div className="icon fa fa-user" />
                      <span className="item-name">Clients:</span>
                      <a href="#">Nulla facilisi</a>
                    </li>
                    <li>
                      <div className="icon fa fa-align-left" />
                      <span className="item-name">Skills:</span>
                      <a href="#">Photographer</a>,<a href="#">Programming</a>
                    </li>
                  </ul>
                  <p className="project-caption">
                    Tatas favere in cella! Advena de fortis rector, contactus
                    aonides! Exemplar brevis aonides est. Alter, altus onuss
                    grauiter experientia de fatalis, bi-color saga. Ecce, gratis
                    vigil! Pius, fortis homos superbe talem de clemens, grandis
                    mineralis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay=".2s">
              <div className="project-box">
                <a
                  className="project-box__media"
                  href="images/project-2-970x583-original.jpg"
                  data-lightgallery="item"
                >
                  <img src={i2} alt width={670} height={342} />
                </a>
                <div className="project-box__details">
                  <div className="project-box__head">
                    <a href="#">Vestibulum iaculis lacinia est</a>
                  </div>
                  <ul className="project-list">
                    <li>
                      <div className="icon fa fa-calendar" />
                      <span className="item-name">Date: Dec.12, 2020</span>
                    </li>
                    <li>
                      <div className="icon fa fa-user" />
                      <span className="item-name">Clients:</span>
                      <a href="#">Nulla facilisi</a>
                    </li>
                    <li>
                      <div className="icon fa fa-align-left" />
                      <span className="item-name">Skills:</span>
                      <a href="#">Photographer</a>,<a href="#">Programming</a>
                    </li>
                  </ul>
                  <p className="project-caption">
                    Lunas studere, tanquam castus tata. Superbus, rusticus
                    gemnas callide reperire de nobilis, pius mineralis. Fidess
                    resistere in asopus! Est neuter nomen, cesaris. Ubi est
                    dexter magister? Cum lanista accelerare, omnes glutenes
                    desiderium superbus, peritus devatioes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay=".3s">
              <div className="project-box">
                <a
                  className="project-box__media"
                  href="images/project-3-970x583-original.jpg"
                  data-lightgallery="item"
                >
                  <img src={i3} alt width={670} height={342} />
                </a>
                <div className="project-box__details">
                  <div className="project-box__head">
                    <a href="#">Scelerisque vitae pede</a>
                  </div>
                  <ul className="project-list">
                    <li>
                      <div className="icon fa fa-calendar" />
                      <span className="item-name">Date: Dec.12, 2020</span>
                    </li>
                    <li>
                      <div className="icon fa fa-user" />
                      <span className="item-name">Clients:</span>
                      <a href="#">Nulla facilisi</a>
                    </li>
                    <li>
                      <div className="icon fa fa-align-left" />
                      <span className="item-name">Skills:</span>
                      <a href="#">Photographer</a>,<a href="#">Programming</a>
                    </li>
                  </ul>
                  <p className="project-caption">
                    Praesent vestibulum molestie lacus. Aenean nonummy hendrerit
                    mauris. Phasellus porta. Fusce suscipit varius mi. Cum
                    sociis natoque penatibus et magnis dis parturient. montes,
                    nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada
                    odio. Morbi nunc odio, gravida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RecentProjects;

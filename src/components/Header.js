import React from "react";
import $ from "jquery";
import { WOW } from "../assets/js/wow.js";
import "../assets/js/tmstickup.js";
import "../assets/js/parallax.js";

import i1 from "../assets/images/logo-default-271x61.png";
import i2 from "../assets/images/logo-inverse-271x61.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
      new WOW().init();
      $(".rd-navbar").TMStickUp({});
    });
  }
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="600px"
            data-xl-stick-up-offset="896px"
            data-xxl-stick-up-offset="896px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div
              className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1 toggle-original"
              data-rd-navbar-toggle=".rd-navbar-collapse"
            >
              <span />
            </div>
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
                    {}
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src={i1}
                        alt
                        width={135}
                        height={30}
                      />
                      <img
                        className="brand-logo-light"
                        src={i2}
                        alt
                        width={135}
                        height={30}
                      />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about.html">
                          About
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Testimonials
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              History
                            </a>
                            <ul className="rd-menu rd-navbar-dropdown">
                              <li className="rd-dropdown-item">
                                <a className="rd-dropdown-link" href="#">
                                  Lorem
                                </a>
                              </li>
                              <li className="rd-dropdown-item">
                                <a className="rd-dropdown-link" href="#">
                                  Ipsum
                                </a>
                              </li>
                              <li className="rd-dropdown-item">
                                <a className="rd-dropdown-link" href="#">
                                  Dolor
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Clients
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="services.html">
                          Services
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="projects.html">
                          Projects
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contacts.html">
                          Contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;

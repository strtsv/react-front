import React from "react";

import i1 from "../assets/images/logo-default-271x61.png";
import i2 from "../assets/images/logo-inverse-271x61.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic context-dark">
        <div className="container wow fadeInUp">
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
          <p className="rights">
            <span>©  </span>
            <span className="copyright-year" />
            <span> </span>
            <span>All Rights Reserved</span>
            <span>. </span>
            <a href="privacy-policy.html">Privacy Policy</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;

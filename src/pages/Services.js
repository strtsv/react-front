import React from "react";

import Header from "../components/Header";
import Content from "../components/Services/Content";
import Development from "../components/Services/Development";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="page animated">
      <Header />
      <Content />
      <Development />
      <Footer />
    </div>
  );
};

export default Services;

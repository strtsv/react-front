import React from "react";

import Header from "../components/Header";
import Process from "../components/About/Process";
import Counters from "../components/About/Counters";
import OurTeam from "../components/About/OurTeam";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="page animated">
      <Header />
      <Process />
      <Counters />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default About;

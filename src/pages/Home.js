import React from "react";

import Slider from "../components/Home/Slider";
import Header from "../components/Header";
import About from "../components/Home/About";
import Over20Years from "../components/Home/Over20Years";
import Owl from "../components/Home/Owl";
import Service from "../components/Home/Service";
import News from "../components/Home/News";
import Contact from "../components/Home/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Slider />
      <About />
      <Over20Years />
      <Owl />
      <Service />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

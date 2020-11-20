import React from "react";

import Header from "../components/Header";
import RecentProjects from "../components/Projects/RecentProjects";
import Gallery from "../components/Projects/Gallery";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div className="page animated">
      <Header />
      <RecentProjects />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Projects;

import React from "react";

import Header from "../components/Testimonials/Header";
import Breadcrumbs from "../components/Testimonials/Breadcrumbs";
import Quotes1 from "../components/Testimonials/Quotes1";
import Divider from "../components/Testimonials/Divider";
import Quotes2 from "../components/Testimonials/Quotes2";
import Quotes3 from "../components/Testimonials/Quotes3";
import Quotes4 from "../components/Testimonials/Quotes4";
import Quotes5 from "../components/Testimonials/Quotes5";
import Quotes6 from "../components/Testimonials/Quotes6";
import Quotes7 from "../components/Testimonials/Quotes7";
import PageFooter from "../components/Testimonials/PageFooter";
import FooterLinks from "../components/Testimonials/FooterLinks";

const Home = () => {
  return (
    <div className="page">
      <Header />
      <Breadcrumbs />
      <Quotes1 />
      <Divider />
      <Quotes2 />
      <Divider />
      <Quotes3 />
      <Divider />
      <Quotes4 />
      <Divider />
      <Quotes5 />
      <Divider />
      <Quotes6 />
      <Divider />
      <Quotes7 />
      <PageFooter />
      <FooterLinks />
    </div>
  );
};

export default Home;

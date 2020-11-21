import React from "react";

import Header from "../components/CatalogGrid/Header";
import ShopGrid from "../components/CatalogGrid/ShopGrid";
import ShowingResults from "../components/CatalogGrid/ShowingResults";
import PageFooter from "../components/CatalogGrid/PageFooter";
import FooterLinks from "../components/CatalogGrid/FooterLinks";

const CatalogGrid = () => {
  return (
    <div className="page">
      <Header />
      <ShopGrid />
      <ShowingResults />
      <PageFooter />
      <FooterLinks />
    </div>
  );
};

export default CatalogGrid;

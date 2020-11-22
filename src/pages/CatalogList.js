import React from "react";

import Header from "../components/CatalogList/Header";
import ShopList from "../components/CatalogList/ShopList";
import ShowingResults from "../components/CatalogList/ShowingResults";
import PageFooter from "../components/CatalogList/PageFooter";
import FooterLinks from "../components/CatalogList/FooterLinks";

const CatalogList = () => {
  return (
    <div className="page">
      <Header />
      <ShopList />
      <ShowingResults />
      <PageFooter />
      <FooterLinks />
    </div>
  );
};

export default CatalogList;

import React from "react";

import Header from "../components/Header";
import HowToFindUs from "../components/Contacts/HowToFindUs";
import ContactForm from "../components/Contacts/ContactForm";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <div className="page animated">
      <Header />
      <HowToFindUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contacts;

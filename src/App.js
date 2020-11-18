import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
// import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
// import CatalogList from "./pages/CatalogList";

function App() {
  return (
    <Switch>
      <Route exact path="/services.html" component={Services} />
      <Route exact path="/projects.html" component={Projects} />;
      <Route exact path="/about.html" component={About} />
      <Route exact path="/contacts.html" component={Contacts} />; return{" "}
      <Route exact path="/" component={Home} />; return{" "}
      <Route exact path="/index.html" component={Home} />;
    </Switch>
  );
}

export default App;

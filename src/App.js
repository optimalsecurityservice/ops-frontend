import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  BrowserRouter as Router
} from 'react-router-dom';
import ScrollTop from "./components/Scroll Top";

function App() {

  return (
     <Router>
        <Nav />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/services/:name" component={ServicesPage} />
          <Route render={() => <Redirect to={`/home`} />} />
        </Switch>
        <Footer />
        <ScrollTop/>
      </Router>
  );
}

export default App;

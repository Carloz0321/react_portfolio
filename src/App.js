import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutMe/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Navbar from "./navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/port" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}
export default App;

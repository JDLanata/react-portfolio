import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import React, { useState, useEffect } from "react";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="page">
      <Nav className="justify-content-end nav">
        <Nav.Item>
          <Nav.Link className='link-color' href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='link-color' href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='link-color' href="/contact">contact</Nav.Link>
        </Nav.Item>
      </Nav>
      <Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <footer className="footer fixed-bottom">

        <Nav className="justify-content-center nav">
        <Nav.Item>
          <Nav.Link className='link-color' href="tel:555-555-5555">555-555-5555</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='link-color' href="mailto:email@email.com">Email</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='link-color' href="https://https://github.com/JDLanata/">Github</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='link-color' href="https://www.linkedin.com/in/jdlanata/">Linkedin</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='link-color' href="https://drive.google.com/file/d/1Fu9nH9CIR3g9lfYdsFo6fTT7AQR2VFGn/view?usp=sharing" target = "_blank">Resume</Nav.Link>
        </Nav.Item>
        </Nav>

      </footer>
    </div>
  );
}

export default App;

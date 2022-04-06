import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import { Navbar } from "./components";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import { AboutData } from "./data/AboutData";
import GlobalStyle from "./globalStyle";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./data/InfoData";
import { InfoDataTwo } from "./data/InfoData";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutUs from "./components/aboutus";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path="/about">
            <AboutUs about={AboutData} />
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            <Hero slides={SliderData} />
            <InfoSection {...InfoData} />
            <InfoSection {...InfoDataTwo} />
            <InfoSection {...InfoData} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

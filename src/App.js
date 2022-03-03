import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
import { Navbar } from "./components";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyle";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./data/InfoData";
import {InfoDataTwo} from "./data/InfoData";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle= () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <InfoSection {...InfoDataTwo}/>
    </>
  );
}

export default App;

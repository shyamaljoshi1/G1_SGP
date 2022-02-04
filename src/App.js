import React from "react";
//import { Route } from 'react-router-dom';
import { Navbar } from "./components";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <Hero slides={SliderData}/>
    </>
  );
}

export default App;

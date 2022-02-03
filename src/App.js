import React from "react";
import { Route } from 'react-router-dom';
import { Navbar } from "./components";

function App() {
  return (
    <>
      <div>
        <Route exact path="/" component={Navbar}>
          <Navbar />
        </Route>
      </div>
    </>
  );
}

export default App;

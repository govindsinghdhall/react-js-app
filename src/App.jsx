import { useState, Fragment } from "react";
// import componentsImg from "./assets/components.png";
// import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
// import CoreConcept from "./components/CoreConcept.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx"
// import TabButton from "./components/TabButton.jsx";
// import { EXAMPLES } from "./data.js";
import Examples from "./components/Examples.jsx";

function App() {
  

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        {/* <h2>Time to get started!</h2> */}
      </main>
    </>
  );
}

export default App;

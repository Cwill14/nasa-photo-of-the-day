import React from "react";
import "./App.scss";

import NasaPictures from "./components/NasaPictures";

function App() {
  return (
    <div className="App">
      <NasaPictures />
      <div style={{visibility: "hidden"}}>in here!</div>
    </div>
  );
}

export default App;

import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="brand">Adopt Me!</h1>
      <Pet name="Kilindo" animal="Cat" breed="SRD" />
      <Pet name="Nicole" animal="Cat" breed="SRD" />
      <Pet name="Pandora" animal="Dog" breed="Pastor Alemão" />
    </div>
  );
};
render(<App />, document.getElementById("root"));

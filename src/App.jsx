import React from "react";
import { StrictMode } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 id="brand">Adopt Me!</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
};
render(<App />, document.getElementById("root"));

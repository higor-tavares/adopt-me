import React from "react";
import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Link to="/"><h1 id="brand">Adopt Me!</h1></Link>
        <Routes>
          <Route path="details/:id" element={<Details/>} />
          <Route path="/" element={<SearchParams/>} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};
render(<App />, document.getElementById("root"));

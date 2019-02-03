import "@babel/polyfill";
import * as React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "shared/components/App";

document.addEventListener("DOMContentLoaded", () => {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("react-app")
  );
});

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import "./styles.css"; 여기에 import 하면 전체 적용

const root = ReactDOM.createRoot(document.getElementById("root"));

<BrowserRouter basename={process.env.PUBLIC_URL}>
  root.render(
  <App />
  );
</BrowserRouter>;

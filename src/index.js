import React from "react";
import { StrictMode } from "react";
// import ReactDOM from "react-dom";

import ReactDOM from "react-dom/client";
import "./scss/main.scss";


import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );

//=========dole je stari kod============

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App
     number={10}
     title="String from index file" 
     text="Text from index file" />);
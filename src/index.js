



import React from "react";
// import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import "./scss/main.scss";


import App from "./App";

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App
     number={10}
     title="String from index file" 
     text="Text from index file" />);

// const container = document.getElementById("root");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);





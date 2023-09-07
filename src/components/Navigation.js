import React from "react";
import { Link, Routes, Route, NavLink, HashRouter } from 'react-router-dom';


import Kalorije from "./Kalorije";
import Odnosi from "./Odnosi";
import Tajmer from "./Tajmer";

export default function Navigation() {
  return (
    <HashRouter basename="/">
      <div className="navContainer">


        <div>
          <NavLink to='/' className="linker"
              style={({ isActive }) => {
                return {
                color: isActive ? "#cdcdcd" : "rgb(83, 85, 83)",                
                };
              }}
          >
            ODNOSI
          </NavLink>
        </div>
        <div>
          <NavLink to="kalorije" className="linker"
              style={({ isActive }) => {
                return {
                color: isActive ? "#cdcdcd" : "rgb(83, 85, 83)",
                };
              }}
          >
            KALORIJE</NavLink>
        </div>
        <div>
          <NavLink to="tajmer" className="linker"
              style={({ isActive }) => {
                return {
                color: isActive ? "#cdcdcd" : "rgb(83, 85, 83)",
                };
              }}
          >
            TAJMER
          </NavLink>
        </div>







      </div>
      <Routes>

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Odnosi />} />
 
        <Route path="/kalorije" element={<Kalorije />} />
        <Route path="/tajmer" element={<Tajmer />} />

      </Routes>
      <div className="home">
        <div className="img"></div>
        {/* <img src="../img/politic-glob.png" alt="globus" /> */}
      </div>

    </HashRouter>
  )
}

import React from "react";
import { Routes, Route, NavLink, HashRouter } from 'react-router-dom';


import Kalorije from "./Kalorije";
import Odnosi from "./Odnosi";
import Tajmer from "./Tajmer";
import ResultsNutrition from "./ResultsNutrition";
import Recepti from "./Recepti";
import ResultsRecipe from "./ResultsRecipe";
import VremeSati from "./VremeSati";

export default function Navigation() {
  return (
    <>

    <HashRouter basename="/">
      <div className="navContainer">


        <div>
          <NavLink to='/' className="linker"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "rgb(83, 85, 83)",
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
                color: isActive ? "white" : "rgb(83, 85, 83)",
              };
            }}
          >
            KALORIJE</NavLink>
        </div>
        <div>
          <NavLink to="recepti" className="linker"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "rgb(83, 85, 83)",
              };
            }}
          >
            RECEPTI</NavLink>
        </div>
        <div>
          <NavLink to="tajmer" className="linker"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "rgb(83, 85, 83)",
              };
            }}
          >
            TAJMER
          </NavLink>
        </div>

      </div>
        <VremeSati />
      <Routes>
        <Route path="/" element={<Odnosi />} />
        <Route path="/kalorije" element={<Kalorije />} />
        <Route path="/recepti" element={<Recepti />} />
        <Route path="/tajmer" element={<Tajmer />} />
        <Route path="/kalorije/nutrition" element={<ResultsNutrition />} />
        <Route path="/recept" element={<ResultsRecipe />} />
      </Routes>
      <div className="home">
        <div className="img"></div>
      </div>

    </HashRouter>
    </>
  )
}

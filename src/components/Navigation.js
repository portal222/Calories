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
          <Link to='/' className="linker">
            ODNOSI
          </Link>
        </div>
        <div>
          <Link to="kalorije" className="linker">
            KALORIJE</Link>
        </div>
        <div>
          <Link to="tajmer" className="linker">
            TAJMER
          </Link>
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

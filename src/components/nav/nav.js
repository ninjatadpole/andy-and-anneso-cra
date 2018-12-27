import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.scss";

export default function Nav(props) {
  return (
    <nav className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/map">Map</NavLink>
      <NavLink to="/timeline">Timeline</NavLink>
    </nav>
  );
}

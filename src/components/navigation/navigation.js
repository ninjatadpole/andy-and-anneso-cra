import React from "react";
import { NavLink } from "react-router-dom";

import "./navigation.scss";

export default function Navigation(props) {
  return (
    <nav className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/map">Map</NavLink>
      <NavLink to="/timeline">Timeline</NavLink>
      <NavLink to="/questions">Questions</NavLink>
    </nav>
  );
}

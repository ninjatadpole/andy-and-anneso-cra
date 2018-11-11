import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/map">Map</NavLink>
      <NavLink to="/timeline">Timeline</NavLink>
    </nav>
  );
}

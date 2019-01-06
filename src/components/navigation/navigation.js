import React from "react";
import { NavLink } from "react-router-dom";

import Translation from "../translation";

import "./navigation.scss";

export default function Navigation(props) {
  return (
    <nav className="navigation">
      <NavLink to="/">
        <Translation id="navigation.home" />
      </NavLink>
      <NavLink to="/map">
        <Translation id="navigation.maps" />
      </NavLink>
      <NavLink to="/schedule">
        <Translation id="navigation.timeline" />
      </NavLink>
      <NavLink to="/answers">
        <Translation id="navigation.answers" />
      </NavLink>
    </nav>
  );
}

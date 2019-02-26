import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

import Translation from "../translation";

import "./navigation.scss";

class Navigation extends React.Component {
  state = {
    menuOpen: false
  };

  toggleMenu = () => {
    this.setState(currentState => {
      return { menuOpen: !currentState.menuOpen };
    });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  render() {
    return (
      <nav className={classnames("navigation", { open: this.state.menuOpen })}>
        <button className="menu-button" onClick={this.toggleMenu}>
          <Translation id="navigation.menu" />
        </button>
        <div className="veil" onClick={this.closeMenu} />
        <div className="menu-items">
          <NavLink to="/" exact onClick={this.closeMenu}>
            <Translation id="navigation.home" />
          </NavLink>
          <NavLink to="/locations" onClick={this.closeMenu}>
            <Translation id="navigation.locations" />
          </NavLink>
          <NavLink to="/programme" onClick={this.closeMenu}>
            <Translation id="navigation.timeline" />
          </NavLink>
          <NavLink to="/info" onClick={this.closeMenu}>
            <Translation id="navigation.info" />
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Navigation;

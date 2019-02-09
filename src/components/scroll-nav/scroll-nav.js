import React from "react";
import classnames from "classnames";

import Translation from "../translation";
import scrollTo from "./scrollTo";

import "./scroll-nav.scss";

class ScrollNav extends React.Component {
  state = {
    open: false
  };

  scrollToItem = e => {
    this.closeMenu();

    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) {
      const parent = new scrollTo(target.offsetParent);
      parent.top(target.offsetTop - 80, 400);
    }
  };

  closeMenu = () => {
    this.setState({ open: false });
  };

  openMenu = () => {
    this.setState({ open: true });
  };

  render() {
    const { className, items } = this.props;

    return (
      <nav
        className={classnames("scroll-nav", className, {
          open: this.state.open
        })}
      >
        <Translation
          className="trigger"
          tag="button"
          id="scrollNav.sections"
          onClick={this.openMenu}
        />
        <div className="veil" onClick={this.closeMenu}>
          <Translation tag="button" className="close" id="scrollNav.close" />
        </div>
        <ul>
          <Translation className="title" tag="li" id="scrollNav.sections" />
          {items.map((item, i) => {
            return (
              <li key={`scroll-nav-${i}`}>
                <button href={item.link} onClick={this.scrollToItem}>
                  {item.text}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default ScrollNav;

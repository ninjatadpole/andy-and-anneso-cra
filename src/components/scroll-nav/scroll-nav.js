import React from "react";
import classnames from "classnames";

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
        <button className="trigger" onClick={this.openMenu}>
          Sections
        </button>
        <div className="veil" onClick={this.closeMenu} />
        <ul>
          <li className="title">Sections</li>
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

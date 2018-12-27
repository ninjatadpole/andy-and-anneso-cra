import React from "react";

import "./landscape.scss";

export default function Landscape(props) {
  return (
    <div className="landscape">
      <div className="mountain mirror" />
      <div className="trees mirror">
        <div className="tree-1" />
        <div className="tree-2" />
      </div>
      {props.children}
    </div>
  );
}

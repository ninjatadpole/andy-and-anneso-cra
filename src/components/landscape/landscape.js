import React from "react";

import Blobs from "../blobs";

import "./landscape.scss";

export default function Landscape(props) {
  return (
    <div className="landscape">
      <div className="mountain mirror">
        <Blobs purple={[1, 3]} />
      </div>
      <div className="trees mirror">
        <div className="tree-1">
          <Blobs green={[1, 2, 3]} />
        </div>
        <div className="tree-2">
          <Blobs green={[1, 2, 3]} />
        </div>
      </div>
      {props.children}
    </div>
  );
}

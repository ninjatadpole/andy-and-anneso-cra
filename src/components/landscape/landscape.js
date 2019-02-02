import React from "react";

import Blobs from "../blobs";
import Leaves from "../leaves";
import Tree from "../tree";

import "./landscape.scss";

export default function Landscape(props) {
  return (
    <div className="landscape">
      <div className="mountain mirror">
        <Blobs purple={[1, 3]} />
      </div>
      <div className="trees mirror">
        <Tree version={1} className="tree-1">
          <Leaves className="leaves-1" leaves={[1, 2, 3]} />
        </Tree>
        <Tree version={2} className="tree-2">
          <Leaves className="leaves-2" leaves={[1, 2, 3]} />
        </Tree>
        <Tree version={2} className="tree-3">
          <Leaves className="leaves-3" leaves={[1, 2, 3]} />
        </Tree>
      </div>
      {props.children}
    </div>
  );
}

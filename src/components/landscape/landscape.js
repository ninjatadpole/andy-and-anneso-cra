import React from "react";

import Blobs from "../blobs";
import FairyLight from "../fairy-light";
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
          <div className="fairy-lights-1">
            <FairyLight className="light-1" gold={[1, 2, 3]} />
            <FairyLight className="light-2" gold={[1, 2, 3]} />
            <FairyLight className="light-3" gold={[1, 2, 3]} />
            <FairyLight className="light-4" gold={[1, 2, 3]} />
            <FairyLight className="light-5" gold={[1, 2, 3]} />
            <FairyLight className="light-6" gold={[1, 2, 3]} />
            <FairyLight className="light-7" gold={[1, 2, 3]} />
            <FairyLight className="light-8" gold={[1, 2, 3]} />
            <FairyLight className="light-9" gold={[1, 2, 3]} />
            <FairyLight className="light-10" gold={[1, 2, 3]} />
          </div>
        </Tree>
        <Tree version={2} className="tree-2">
          <Leaves className="leaves-2" leaves={[1, 2, 3]} />
          <div className="fairy-lights-2">
            <FairyLight className="light-1" gold={[1, 2, 3]} />
            <FairyLight className="light-2" gold={[1, 2, 3]} />
            <FairyLight className="light-3" gold={[1, 2, 3]} />
            <FairyLight className="light-4" gold={[1, 2, 3]} />
            <FairyLight className="light-5" gold={[1, 2, 3]} />
          </div>
        </Tree>
        <Tree version={2} className="tree-3">
          <Leaves className="leaves-3" leaves={[1, 2, 3]} />
          <div className="fairy-lights-3">
            <FairyLight className="light-1" gold={[1, 2, 3]} />
            <FairyLight className="light-2" gold={[1, 2, 3]} />
          </div>
        </Tree>
      </div>
      {props.children}
    </div>
  );
}

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
        <Tree version={1}>
          <Leaves className="leaves-1" leaves={[1, 2, 3]} />
          <div className="fairy-lights fairy-lights-1">
            <FairyLight className="fairy-light-1" gold={[1, 2, 3]} />
            <FairyLight className="fairy-light-2" purple={[1, 2, 3]} />
            <FairyLight className="fairy-light-3" gold={[1, 2, 3]} />
            <FairyLight className="fairy-light-4" purple={[1, 2, 3]} />
            <FairyLight className="fairy-light-5" gold={[1, 2, 3]} />
            <FairyLight className="fairy-light-6" purple={[1, 2, 3]} />
            <FairyLight className="fairy-light-7" gold={[1, 2, 3]} />
            <FairyLight className="fairy-light-8" purple={[1, 2, 3]} />
            <FairyLight className="fairy-light-9" gold={[1, 2, 3]} />
            <FairyLight className="fairy-light-10" purple={[1, 2, 3]} />
          </div>
        </Tree>
        <Tree version={2}>
          <Leaves className="leaves-2" leaves={[1, 2, 3]} />
          <div className="fairy-lights fairy-lights-2">
            <FairyLight className="fairy-light-1" gold={[1, 2, 3]} />
            <FairyLight className="fairy-light-2" purple={[1, 2, 3]} />
            <FairyLight className="fairy-light-3" gold={[1, 2, 3]} />
            <FairyLight className="fairy-light-4" purple={[1, 2, 3]} />
            <FairyLight className="fairy-light-5" gold={[1, 2, 3]} />
            <FairyLight className="fairy-light-6" purple={[1, 2, 3]} />
            <FairyLight className="fairy-light-7" gold={[1, 2, 3]} />
            <FairyLight className="fairy-light-8" purple={[1, 2, 3]} />
            <FairyLight className="fairy-light-9" gold={[1, 2, 3]} />
            <FairyLight className="fairy-light-10" purple={[1, 2, 3]} />
          </div>
        </Tree>
      </div>
      {props.children}
    </div>
  );
}

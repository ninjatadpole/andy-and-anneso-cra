import React from "react";
import classnames from "classnames";

import Blobs from "../blobs";

import "./drop-cap.scss";

export default function DropCap(props) {
  const [cap, ...rest] = props.children;

  return (
    <React.Fragment>
      <span className="drop-cap">
        <span className="letter">{cap}</span>
      </span>
      <span className="drop-cap-rest">{rest.join("")}</span>
    </React.Fragment>
  );
}

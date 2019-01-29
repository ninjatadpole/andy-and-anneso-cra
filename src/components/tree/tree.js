import React from "react";
import classnames from "classnames";

import Blobs from "../blobs";

import "./tree.scss";

export default function Tree(props) {
  const { className, children, version } = props;

  return (
    <div className={classnames("tree", className, `tree-${version}`)}>
      {children}
    </div>
  );
}

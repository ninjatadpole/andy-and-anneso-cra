import React from "react";
import classnames from "classnames";

import "./tree.scss";

export default function Tree(props) {
  const { className, children, version } = props;

  return (
    <div className={classnames("tree", className, `tree-${version}`)}>
      {children}
    </div>
  );
}

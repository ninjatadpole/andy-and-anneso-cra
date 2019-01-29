import React from "react";
import classnames from "classnames";

import Blobs from "../blobs";

import "./leaves.scss";

export default function Leaves(props) {
  return (
    <Blobs
      className={classnames("leaves", props.className)}
      green={[1, 2, 3]}
    />
  );
}

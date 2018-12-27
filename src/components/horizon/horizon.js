import React from "react";

import "./horizon.scss";

export default function Horizon(props) {
  return (
    <div className="horizon">
      <img
        src={require("../../static/images/horizon.png")}
        alt=""
        className="line"
      />
      {props.children}
    </div>
  );
}

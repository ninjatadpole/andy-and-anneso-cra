import React from "react";
import classnames from "classnames";

import { WithCtx } from "../../context";

import "./moon.scss";

function Moon(props) {
  const {
    ctx: { languages }
  } = props;

  return (
    <div className="moon-container">
      <div className="moon">
        {languages.map(language => (
          <div
            className={classnames("half-moon", language)}
            key={`moon-${language}`}
          />
        ))}
      </div>
    </div>
  );
}

export default WithCtx(Moon);

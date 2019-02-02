import React from "react";
import classnames from "classnames";

import { WithCtx } from "../../utils/context";
import Blobs from "../blobs";

import "./moon.scss";

function Moon(props) {
  const {
    ctx: { languages }
  } = props;

  return (
    <div className="moon-container">
      <div className="moon">
        <Blobs gold={[1, 2, 3]} />
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

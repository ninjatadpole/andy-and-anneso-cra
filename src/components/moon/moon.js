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
        {languages.map(language => (
          <div
            className={classnames("half-moon", language)}
            key={`moon-${language}`}
          />
        ))}
        <Blobs gold={[3, 2]} />
      </div>
    </div>
  );
}

export default WithCtx(Moon);

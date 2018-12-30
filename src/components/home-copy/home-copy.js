import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { WithCtx } from "../../context";

import "./home-copy.scss";

function HomeCopy(props) {
  const {
    language,
    ctx: { translate }
  } = props;

  const line1 = translate("homeLine1", language);
  const [line2Initial, ...line2Rest] = translate("homeLine2", language);
  const line3 = translate("homeLine3", language);
  const line4 = translate("homeLine4", language);

  return (
    <div className={classnames("home-copy", language)}>
      <h1>
        <span className="line-1">{line1}</span>
        <span className="line-2">
          <span className="drop-cap">{line2Initial}</span>
          {line2Rest}
        </span>
      </h1>
      <p className="line-3">{line3}</p>
      <p className="line-4">{line4}</p>
      {props.children}
    </div>
  );
}

HomeCopy.propTypes = {
  ctxt: PropTypes.object,
  language: PropTypes.string
};

export default WithCtx(HomeCopy);

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./home-copy.scss";

function HomeCopy(props) {
  const {
    language,
    line1,
    line2: [initial, ...line2rest],
    line3,
    line4
  } = props;

  return (
    <div className={classnames("home-copy", language)}>
      <h1>
        <span className="line-1">{line1}</span>
        <span className="line-2">
          <span className="drop-cap">{initial}</span>
          {line2rest}
        </span>
      </h1>
      <p className="line-3">{line3}</p>
      <p className="line-4">{line4}</p>
      {props.children}
    </div>
  );
}

HomeCopy.propTypes = {
  language: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  line4: PropTypes.string
};

export default HomeCopy;

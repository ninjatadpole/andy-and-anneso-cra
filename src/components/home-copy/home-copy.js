import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { WithCtx } from "../../context";
import Translation from "../translation";

import "./home-copy.scss";

function HomeCopy(props) {
  const {
    language,
    ctx: { translate }
  } = props;

  return (
    <div className={classnames("home-copy", language)}>
      <h1>
        <Translation className="line-1" id="home.line1" language={language} />
        <Translation className="line-2" id="home.line2" language={language} />
      </h1>
      <Translation
        className="line-3"
        tag="p"
        id="home.line3"
        language={language}
      />
      <Translation
        className="line-4"
        tag="p"
        id="home.line4"
        language={language}
      />
      {props.children}
    </div>
  );
}

HomeCopy.propTypes = {
  ctxt: PropTypes.object,
  language: PropTypes.string
};

export default WithCtx(HomeCopy);

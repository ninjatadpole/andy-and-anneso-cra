import React from "react";
import classnames from "classnames";

import { translate } from "../../data/translations";

import "./translation.scss";

class Translation extends React.Component {
  render() {
    const { id, language, tag } = this.props;

    const Wrapper = tag || "span";

    return (
      <Wrapper className={classnames("translation", this.props.className)}>
        <span className={`lang lang-${language}`}>
          {translate(id, language)}.
        </span>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default Translation;

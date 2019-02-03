import React from "react";
import classnames from "classnames";

import { WithCtx } from "../../utils/context";

import "./translation.scss";

class Translation extends React.Component {
  render() {
    const {
      ctx: { currentLanguage, translate },
      id,
      language,
      tag
    } = this.props;

    const Wrapper = tag || "span";
    const translationLanguage = language || currentLanguage;

    return (
      <Wrapper className={classnames("translation", this.props.className)}>
        <span className={`lang lang-${translationLanguage}`}>
          {translate(id, translationLanguage)}
        </span>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default WithCtx(Translation);

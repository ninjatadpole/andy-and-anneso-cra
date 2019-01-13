import React from "react";
import classnames from "classnames";

import { WithCtx } from "../../utils/context";

import "./language-switcher.scss";

function LanguageSwitcher(props) {
  const {
    ctx: { currentLanguage, languages, swapLanguage, translate }
  } = props;

  return (
    <div className="language-switcher">
      {languages.map(language => {
        return (
          <button
            className={classnames("language", language)}
            disabled={currentLanguage === language}
            onClick={swapLanguage}
            title={translate(`switcher.${language}`)}
            key={`lang-${language}`}
          >
            <span className="text">{translate(`switcher.${language}`)}</span>
          </button>
        );
      })}
    </div>
  );
}

export default WithCtx(LanguageSwitcher);

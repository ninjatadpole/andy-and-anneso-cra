import React from "react";
import classnames from "classnames";

import { WithCtx } from "../../context";

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
            className={classnames("flag", language)}
            disabled={currentLanguage === language}
            onClick={swapLanguage}
            title={translate(`languageSwitcher.${language}`)}
            key={`lang-${language}`}
          >
            <span className="language">{language.toUpperCase()}</span>
          </button>
        );
      })}
    </div>
  );
}

export default WithCtx(LanguageSwitcher);

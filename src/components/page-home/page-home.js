import React from "react";
import DocumentTitle from "react-document-title";

import { WithCtx } from "../../context";

import HomeCopy from "../home-copy";
import Horizon from "../horizon";
import Landscape from "../landscape";
import LanguageSwitcher from "../language-switcher";
import Moon from "../moon";

import "./page-home.scss";

function PageHome(props) {
  const {
    ctx: { translate }
  } = props;

  return (
    <DocumentTitle title={props.translate("siteTitle")}>
      <section className="page home">
        <div className="language-switcher">
          <button
            className="en"
            disabled={props.language === "en"}
            onClick={props.swapLanguage}
          >
            EN
          </button>
          <button
            className="fr"
            disabled={props.language === "fr"}
            onClick={props.swapLanguage}
          >
            FR
          </button>
        </div>

        <article>
          <HomeCopy language="en">
            <Landscape>
              <div className="stag" />
            </Landscape>
          </HomeCopy>

          <Horizon>
            <Moon />
          </Horizon>

          <HomeCopy language="fr">
            <Landscape>
              <div className="fox mirror" />
            </Landscape>
          </HomeCopy>
        </article>
      </section>
    </DocumentTitle>
  );
}

export default WithCtx(PageHome);

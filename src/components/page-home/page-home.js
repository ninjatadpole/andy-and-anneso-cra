import React from "react";
import DocumentTitle from "react-document-title";

import { ContextConsumer } from "../../context";

import HomeCopy from "../home-copy";
import Horizon from "../horizon";
import Landscape from "../landscape";
import Moon from "../moon";

import "./page-home.scss";

function PageHome(props) {
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
          <HomeCopy
            language="en"
            line1={props.translate("homeLine1", "en")}
            line2={props.translate("homeLine2", "en")}
            line3={props.translate("homeLine3", "en")}
            line4={props.translate("homeLine4", "en")}
          >
            <Landscape>
              <div className="stag" />
            </Landscape>
          </HomeCopy>

          <Horizon>
            <Moon />
          </Horizon>
          <HomeCopy
            language="fr"
            line1={props.translate("homeLine1", "fr")}
            line2={props.translate("homeLine2", "fr")}
            line3={props.translate("homeLine3", "fr")}
            line4={props.translate("homeLine4", "fr")}
          >
            <Landscape>
              <div className="fox mirror" />
            </Landscape>
          </HomeCopy>
        </article>
      </section>
    </DocumentTitle>
  );
}

class PageHomeController extends React.Component {
  render() {
    return <ContextConsumer>{ctxt => <PageHome {...ctxt} />}</ContextConsumer>;
  }
}

export default PageHomeController;

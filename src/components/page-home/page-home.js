import React from "react";
import DocumentTitle from "react-document-title";

import { WithCtx } from "../../context";

import HomeCopy from "../home-copy";
import Horizon from "../horizon";
import Landscape from "../landscape";
import Moon from "../moon";

import "./page-home.scss";

function PageHome(props) {
  const {
    ctx: { translate }
  } = props;

  return (
    <DocumentTitle title={translate("home.title")}>
      <section className="page home">
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

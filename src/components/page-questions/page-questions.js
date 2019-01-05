import React from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

import { WithCtx } from "../../context";
import Translation from "../translation";

import "./page-questions.scss";

function PageQuestions(props) {
  const {
    ctx: { translate }
  } = props;

  return (
    <DocumentTitle title={translate("questions.title")}>
      <section className="page questions">
        <article>
          <Translation tag="h1" id="questions.title" />
          <Translation tag="h2" id="questions.before" />
          <dl>
            <Translation tag="dt" id="questions.before.items[0].q" />
            <Translation tag="dd" id="questions.before.items[0].a" />
            <Translation tag="dt" id="questions.before.items[1].q" />
            <Translation tag="dd" id="questions.before.items[1].a" />
            <Translation tag="dt" id="questions.before.items[2].q" />
            <Translation tag="dd" id="questions.before.items[2].a" />
          </dl>
          <Translation tag="h2" id="questions.ceremony" />
          <dl>
            <Translation tag="dt" id="questions.ceremony.items[0].q" />
            <Translation tag="dd" id="questions.ceremony.items[0].a" />
            <Translation tag="dt" id="questions.ceremony.items[1].q" />
            <Translation tag="dd" id="questions.ceremony.items[1].a" />
            <Translation tag="dt" id="questions.ceremony.items[2].q" />
            <Translation tag="dd" id="questions.ceremony.items[2].a" />
            <Translation tag="dt" id="questions.ceremony.items[3].q" />
            <Translation tag="dd" id="questions.ceremony.items[3].a" />
            <Translation tag="dt" id="questions.ceremony.items[4].q" />
            <Translation tag="dd" id="questions.ceremony.items[4].a" />
            <Translation tag="dt" id="questions.ceremony.items[5].q" />
            <Translation tag="dd" id="questions.ceremony.items[5].a" />
          </dl>
          <Translation tag="h2" id="questions.party" />
          <dl>
            <Translation tag="dt" id="questions.party.items[0].q" />
            <Translation tag="dd" id="questions.party.items[0].a" />
            <Translation tag="dt" id="questions.party.items[1].q" />
            <Translation tag="dd" id="questions.party.items[1].a" />
            <Translation tag="dt" id="questions.party.items[2].q" />
            <Translation tag="dd" id="questions.party.items[2].a" />
            <Translation tag="dt" id="questions.party.items[3].q" />
            <Translation tag="dd" id="questions.party.items[3].a" />
          </dl>
          <Translation tag="h2" id="questions.other" />
          <dl>
            <Translation tag="dt" id="questions.other.items[0].q" />
            <Translation tag="dd" id="questions.other.items[0].a" />
            <Translation tag="dt" id="questions.other.items[1].q" />
            <Translation tag="dd" id="questions.other.items[1].a" />
            <Translation tag="dt" id="questions.other.items[2].q" />
            <Translation tag="dd" id="questions.other.items[2].a" />
            <Translation tag="dt" id="questions.other.items[3].q" />
            <Translation tag="dd" id="questions.other.items[3].a" />
            <Translation tag="dt" id="questions.other.items[4].q" />
            <Translation tag="dd" id="questions.other.items[4].a" />
          </dl>
        </article>
      </section>
    </DocumentTitle>
  );
}

export default WithCtx(PageQuestions);

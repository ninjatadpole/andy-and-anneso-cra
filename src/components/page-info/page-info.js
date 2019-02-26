import React from "react";

import { WithCtx } from "../../utils/context";
import Page from "../page";
import QuestionSection from "../question-section";
import Translation from "../translation";
import ScrollNav from "../scroll-nav";

import "./page-info.scss";

function PageQuestions(props) {
  return (
    <Page className="page-info" title="info.metaTitle">
      <Translation tag="h1" id="info.title" />

      <ScrollNav
        items={[
          {
            link: "#info-before",
            textId: "info.before"
          },
          {
            link: "#info-ceremony",
            textId: "info.ceremony"
          },
          { link: "#info-party", textId: "info.party" },
          { link: "#info-other", textId: "info.other" }
        ]}
      />

      <div className="content">
        <QuestionSection
          className="section"
          id="info-before"
          dictionary="info.before"
          count="3"
        />

        <QuestionSection
          className="section"
          id="info-ceremony"
          dictionary="info.ceremony"
          count="6"
        />

        <QuestionSection
          className="section"
          id="info-party"
          dictionary="info.party"
          count="4"
        />

        <QuestionSection
          className="section"
          id="info-other"
          dictionary="info.other"
          count="5"
        />
      </div>
    </Page>
  );
}

export default WithCtx(PageQuestions);

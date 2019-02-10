import React from "react";

import { WithCtx } from "../../utils/context";
import Page from "../page";
import QuestionSection from "../question-section";
import Translation from "../translation";
import ScrollNav from "../scroll-nav";

import "./page-answers.scss";

function PageQuestions(props) {
  const {
    ctx: { translate }
  } = props;

  return (
    <Page className="page-answers" title="questions.metaTitle">
      <Translation tag="h1" id="questions.title" />

      <ScrollNav
        items={[
          {
            link: "#questions-before",
            text: translate("questions.before")
          },
          {
            link: "#questions-ceremony",
            text: translate("questions.ceremony")
          },
          { link: "#questions-party", text: translate("questions.party") },
          { link: "#questions-other", text: translate("questions.other") }
        ]}
      />

      <div className="content">
        <QuestionSection
          id="questions-before"
          dictionary="questions.before"
          count="3"
        />

        <QuestionSection
          id="questions-ceremony"
          dictionary="questions.ceremony"
          count="6"
        />

        <QuestionSection
          id="questions-party"
          dictionary="questions.party"
          count="4"
        />

        <QuestionSection
          id="questions-other"
          dictionary="questions.other"
          count="5"
        />
      </div>
    </Page>
  );
}

export default WithCtx(PageQuestions);

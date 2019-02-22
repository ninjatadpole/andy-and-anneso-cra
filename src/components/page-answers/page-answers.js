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
            textId: "questions.before"
          },
          {
            link: "#questions-ceremony",
            textId: "questions.ceremony"
          },
          { link: "#questions-party", textId: "questions.party" },
          { link: "#questions-other", textId: "questions.other" }
        ]}
      />

      <div className="content">
        <QuestionSection
          className="section"
          id="questions-before"
          dictionary="questions.before"
          count="3"
        />

        <QuestionSection
          className="section"
          id="questions-ceremony"
          dictionary="questions.ceremony"
          count="6"
        />

        <QuestionSection
          className="section"
          id="questions-party"
          dictionary="questions.party"
          count="4"
        />

        <QuestionSection
          className="section"
          id="questions-other"
          dictionary="questions.other"
          count="5"
        />
      </div>
    </Page>
  );
}

export default WithCtx(PageQuestions);

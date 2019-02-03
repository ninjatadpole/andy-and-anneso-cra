import React from "react";
import DocumentTitle from "react-document-title";

import { WithCtx } from "../../utils/context";
import QuestionSection from "../question-section";
import Translation from "../translation";

import "./page-answers.scss";

function PageQuestions(props) {
  const {
    ctx: { translate }
  } = props;

  return (
    <DocumentTitle title={translate("questions.metaTitle")}>
      <section className="page page-answers">
        <article>
          <Translation tag="h1" id="questions.title" />

          <QuestionSection dictionary="questions.before" count="3" />

          <QuestionSection dictionary="questions.ceremony" count="6" />

          <QuestionSection dictionary="questions.party" count="4" />

          <QuestionSection dictionary="questions.other" count="5" />
        </article>
      </section>
    </DocumentTitle>
  );
}

export default WithCtx(PageQuestions);

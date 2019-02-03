import React from "react";
import DocumentTitle from "react-document-title";

import { WithCtx } from "../../utils/context";
import Timeline from "../timeline";
import Translation from "../translation";

import "./page-timeline.scss";

function PageTimeline(props) {
  const {
    ctx: { translate }
  } = props;

  return (
    <DocumentTitle title={translate("schedule.metaTitle")}>
      <section className="page page-timeline">
        <article>
          <Translation tag="h1" id="schedule.title" />
          <Timeline />
        </article>
      </section>
    </DocumentTitle>
  );
}

export default WithCtx(PageTimeline);

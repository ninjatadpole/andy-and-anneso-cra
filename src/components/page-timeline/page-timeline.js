import React from "react";
import DocumentTitle from "react-document-title";

import Timeline from "../timeline";
import Translation from "../translation";

import "./page-timeline.scss";

export default function PageTimeline(props) {
  return (
    <DocumentTitle title="Wedding Schedule - Andy & Anne-So - August 24th 2019">
      <section className="page page-timeline">
        <article>
          <Translation tag="h1" id="schedule.title" />
          <Timeline />
        </article>
      </section>
    </DocumentTitle>
  );
}

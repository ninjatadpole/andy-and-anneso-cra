import React from "react";
import DocumentTitle from "react-document-title";

import Timeline from "../timeline";

import "./page-timeline.scss";

export default function PageTimeline(props) {
  return (
    <DocumentTitle title="Wedding Schedule - Andy & Anne-So - August 24th 2019">
      <section className="page page-timeline">
        <h1>Timeline</h1>
        <Timeline />
      </section>
    </DocumentTitle>
  );
}

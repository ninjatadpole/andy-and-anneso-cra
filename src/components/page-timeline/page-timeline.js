import React from "react";
import DocumentTitle from "react-document-title";

import Page from "../page";
import ScrollNav from "../scroll-nav";
import Timeline from "../timeline";
import Translation from "../translation";

import "./page-timeline.scss";

function PageTimeline(props) {
  return (
    <Page className="page-timeline" title="schedule.metaTitle">
      <Translation tag="h1" id="schedule.title" />

      <ScrollNav
        items={[
          {
            link: "#timeline-ceremony",
            text: "Ceremony"
          },
          {
            link: "#timeline-party",
            text: "Party"
          }
        ]}
      />

      <div className="content">
        <h2 id="timeline-ceremony">Ceremony</h2>
        <Timeline section="ceremony" />
        <h2 id="timeline-party">Party</h2>
        <Timeline section="party" />
      </div>
    </Page>
  );
}

export default PageTimeline;

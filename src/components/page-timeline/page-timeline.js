import React from "react";

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
        <div className="section" id="timeline-ceremony">
          <h2>Ceremony</h2>
          <Timeline section="ceremony" />
        </div>
        <div className="section" id="timeline-party">
          <h2>Party</h2>
          <Timeline section="party" />
        </div>
      </div>
    </Page>
  );
}

export default PageTimeline;

import React from "react";

import Page from "../page";
import ScrollNav from "../scroll-nav";
import Timeline from "../timeline";
import Translation from "../translation";

import "./page-programme.scss";

function PageTimeline(props) {
  return (
    <Page className="page-programme" title="programme.metaTitle">
      <Translation tag="h1" id="programme.title" />

      <ScrollNav
        items={[
          {
            link: "#timeline-ceremony",
            textId: "programme.ceremony.title"
          },
          {
            link: "#timeline-party",
            textId: "programme.party.title"
          }
        ]}
      />

      <div className="content">
        <div className="section" id="timeline-ceremony">
          <Translation tag="h2" id="programme.ceremony.title" />
          <Timeline section="ceremony" />
        </div>
        <div className="section" id="timeline-party">
          <Translation tag="h2" id="programme.party.title" />
          <Timeline section="party" />
        </div>
      </div>
    </Page>
  );
}

export default PageTimeline;

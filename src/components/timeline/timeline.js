import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import classnames from "classnames";

import Blobs from "../blobs";
import Translation from "../translation";

import "react-vertical-timeline-component/style.min.css";
import "./timeline.scss";

function Icon(props) {
  return (
    <span className={classnames("icon", props.className)}>
      {props.children}
    </span>
  );
}

function CeremonyIcon(props) {
  return (
    <Icon className="ceremony">
      {" "}
      <Blobs green={[1, 2, 3]} />
    </Icon>
  );
}

function PartyIcon(props) {
  return (
    <Icon className="party">
      <Blobs purple={[1, 2, 3]} />
    </Icon>
  );
}

function Timeline(props) {
  const { section } = props;

  if (section === "ceremony") {
    return (
      <VerticalTimeline className="timeline" layout="1-column">
        <VerticalTimelineElement
          className="ceremony-element"
          date="11:30"
          icon={<CeremonyIcon />}
          position="left"
        >
          <Translation tag="h3" id="schedule.ceremony.arrival.title" />
          <Translation tag="h4" id="schedule.ceremony.arrival.subtitle" />
          <Translation tag="p" id="schedule.ceremony.arrival.note" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="ceremony-element"
          date="12:00"
          icon={<CeremonyIcon />}
        >
          <Translation tag="h3" id="schedule.ceremony.ceremony.title" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="ceremony-element"
          date="12:50"
          icon={<CeremonyIcon />}
        >
          <Translation tag="h3" id="schedule.ceremony.blessing.title" />
          <Translation tag="h4" id="schedule.ceremony.blessing.subtitle" />
          <Translation tag="p" id="schedule.ceremony.blessing.note" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="ceremony-element"
          date="13:00"
          icon={<CeremonyIcon />}
        >
          <Translation tag="h3" id="schedule.ceremony.photos.title" />
          <Translation tag="h4" id="schedule.ceremony.photos.subtitle" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="ceremony-element"
          date="13:30"
          icon={<CeremonyIcon />}
        >
          <Translation tag="h3" id="schedule.ceremony.transport.title" />
          <Translation tag="p" id="schedule.ceremony.transport.note" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="ceremony-element"
          date="14:00"
          icon={<CeremonyIcon />}
        >
          <Translation tag="h3" id="schedule.ceremony.welcome.title" />
          <Translation tag="h4" id="schedule.ceremony.welcome.subtitle" />
          <Translation tag="p" id="schedule.ceremony.welcome.note" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="ceremony-element"
          date="15:00"
          icon={<CeremonyIcon />}
        >
          <Translation tag="h3" id="schedule.ceremony.lunch.title" />
          <Translation tag="p" id="schedule.ceremony.lunch.note" />
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  } else if (section === "party") {
    return (
      <VerticalTimeline className="timeline" layout="1-column">
        <VerticalTimelineElement
          className="party-element"
          date="19:00"
          icon={<PartyIcon />}
        >
          <Translation tag="h3" id="schedule.party.party.title" />
          <Translation tag="h4" id="schedule.party.party.subtitle" />
          <Translation tag="p" id="schedule.party.party.note" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="party-element"
          date="21:00"
          icon={<PartyIcon />}
        >
          <Translation tag="h3" id="schedule.party.buffet.title" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="party-element"
          date="02:00"
          icon={<PartyIcon />}
        >
          <Translation tag="h3" id="schedule.party.carriages.title" />
          <Translation tag="h4" id="schedule.party.carriages.subtitle" />
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  } else {
    return null;
  }
}

export default Timeline;

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import classnames from "classnames";

import Blobs from "../blobs";

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
      <Blobs gold={[1, 2, 3]} />
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
          <h3>Guests arrive</h3>
          <h4>
            Islington Town Hall, Islington{" "}
            <span className="map">
              (
              <a href="https://goo.gl/maps/NXHVM4mU77F2" target="town-hall">
                map
              </a>
              )
            </span>
          </h4>
          <p>
            Family and full-day guests are requested to arrive in good time.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="ceremony-element"
          date="12:00"
          icon={<CeremonyIcon />}
        >
          <h3>Ceremony</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="ceremony-element"
          date="12:50"
          icon={<CeremonyIcon />}
        >
          <h3>Blessing</h3>
          <h4>Islington public gardens</h4>
          <p>The gardens are a short (5 minute) walk from the ceremony</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="ceremony-element"
          date="13:00"
          icon={<CeremonyIcon />}
        >
          <h3>Photographs</h3>
          <p>Refreshments will be provided</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="ceremony-element"
          date="13:30"
          icon={<CeremonyIcon />}
        >
          <h3>Transport to reception</h3>
          <p>
            All guests will be provided with traditional journeys to the
            reception.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="ceremony-element"
          date="14:00"
          icon={<CeremonyIcon />}
        >
          <h3>Vin d'honneur</h3>
          <h4>
            The Depot, Caledonian Road{" "}
            <span className="map">
              (
              <a href="https://goo.gl/maps/RD1xETHPyYJ2" target="party">
                map
              </a>
              )
            </span>
          </h4>
          <p>Cannapés and bubbles and greetings</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="ceremony-element"
          date="15:00"
          icon={<CeremonyIcon />}
        >
          <h3>Lunch</h3>
          <p>
            We will contact our full-day guests for menu preferences before the
            day
          </p>
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
          <h3>Party</h3>
          <h4>
            The Depot, Caledonian Road{" "}
            <span className="map">
              (
              <a href="https://goo.gl/maps/RD1xETHPyYJ2" target="party">
                map
              </a>
              )
            </span>
          </h4>
          <p>
            All guests are invited to join for music and games and celebration
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="party-element"
          date="21:00"
          icon={<PartyIcon />}
        >
          <h3>Evening buffet</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="party-element"
          date="02:00"
          icon={<PartyIcon />}
        >
          <h3>(Hackney) Carriages</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  } else {
    return null;
  }
}

export default Timeline;

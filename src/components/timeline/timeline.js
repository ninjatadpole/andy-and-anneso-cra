import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import classnames from "classnames";

import "react-vertical-timeline-component/style.min.css";
import "./timeline.scss";

function Icon(props) {
  return (
    <span className={classnames("icon", props.className)}>
      {props.children}
    </span>
  );
}

function WorkIcon(props) {
  return <Icon className="work">W</Icon>;
}

function SchoolIcon(props) {
  return <Icon className="school">S</Icon>;
}

function Timeline(props) {
  const { section } = props;

  if (section === "ceremony") {
    return (
      <VerticalTimeline className="timeline">
        <VerticalTimelineElement
          date="11:30"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
          position="left"
        >
          <h3>Guests arrive</h3>
          <h4>Islington Town Hall, Islington</h4>
          <p>
            Family and full-day guests are requested to arrive in good time.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="12:00"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Ceremony</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="12:50"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Blessing</h3>
          <h4>Islington public gardens</h4>
          <p>The gardens are a short (5 minute) walk from the ceremony</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="13:00"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Photographs</h3>
          <p>Refreshments will be provided</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="13:30"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Transport to reception</h3>
          <p>
            All guests will be provided with traditional journeys to the
            reception.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="14:00"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Vin d'honneur</h3>
          <h4>The Depot, Caledonian Road</h4>
          <p>Cannapés and bubbles and greetings</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="15:00"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
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
      <VerticalTimeline className="timeline">
        <VerticalTimelineElement
          date="19:00"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Party</h3>
          <h4>The Depot, Caledonian Road</h4>
          <p>
            All guests are invited to join for music and games and celebration
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="21:00"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Evening buffet</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="02:00"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
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

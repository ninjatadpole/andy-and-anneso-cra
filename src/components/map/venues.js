import React from "react";

import BaseMap from "./map";

function VenuesMap(props) {
  const markers = [
    {
      translationId: "map.venues.ceremony",
      autoOpen: true,
      title: "",
      pos: {
        lat: 51.541785,
        lng: -0.102833
      }
    },
    {
      translationId: "map.venues.party",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.548871,
        lng: -0.121735
      }
    }
  ];

  return <BaseMap {...props} markers={markers} />;
}

export default VenuesMap;

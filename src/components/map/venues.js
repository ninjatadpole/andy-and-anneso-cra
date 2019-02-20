import React from "react";

import BaseMap from "./map";

function VenuesMap(props) {
  const markers = [
    {
      translationId: "map.ceremony",
      autoOpen: true,
      title: "",
      pos: {
        lat: 51.5412773,
        lng: -0.1023817
      }
    },
    {
      translationId: "map.party",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.5413382,
        lng: -0.1286466
      }
    }
  ];

  return <BaseMap {...props} markers={markers} />;
}

export default VenuesMap;

import React from "react";

import BaseMap from "./map";

function AccommodationKingsCrossMap(props) {
  const markers = [
    {
      translationId: "map.accommodation.hubPremierInn",
      autoOpen: true,
      title: "",
      pos: {
        lat: 51.533793,
        lng: -0.122023
      }
    },
    {
      translationId: "map.accommodation.travelodgeKingsCross",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.529271,
        lng: -0.1156
      }
    },
    {
      translationId: "map.accommodation.kingsCrossInnHotel",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.530346,
        lng: -0.12291
      }
    },
    {
      translationId: "map.accommodation.travelodgeCentralKingsCross",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.530142,
        lng: -0.120346
      }
    },
    {
      translationId: "map.accommodation.comfortInnKingsCross",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.530115,
        lng: -0.121365
      }
    }
  ];

  return <BaseMap {...props} markers={markers} />;
}

export default AccommodationKingsCrossMap;

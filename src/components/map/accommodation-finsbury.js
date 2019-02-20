import React from "react";

import BaseMap from "./map";

function AccommodationFinsburyMap(props) {
  const markers = [
    {
      translationId: "map.accommodation.pemburyHotel",
      autoOpen: true,
      title: "",
      pos: {
        lat: 51.566116,
        lng: -0.101975
      }
    },
    {
      translationId: "map.accommodation.bestWesternHighbury",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.567963,
        lng: -0.099228
      }
    },
    {
      translationId: "map.accommodation.queensHotel",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.565929,
        lng: -0.102197
      }
    },
    {
      translationId: "map.accommodation.travelodgeFinsbury",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.562181,
        lng: -0.10773
      }
    },
    {
      translationId: "map.accommodation.queensDrive",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.565835,
        lng: -0.10141
      }
    },
    {
      translationId: "map.accommodation.unitedLodge",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.574267,
        lng: -0.097605
      }
    },
    {
      translationId: "map.accommodation.finsburyServicedAppts",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.564263,
        lng: -0.107939
      }
    }
  ];

  return <BaseMap {...props} markers={markers} />;
}

export default AccommodationFinsburyMap;

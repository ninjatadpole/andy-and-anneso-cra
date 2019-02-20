import React from "react";

import BaseMap from "./map";

function AccommodationCaledonianMap(props) {
  const markers = [
    {
      translationId: "map.accommodation.cuckooN1",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.541033,
        lng: -0.113772
      }
    },
    {
      translationId: "map.accommodation.makedoniaHotel",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.545823,
        lng: -0.118098
      }
    },
    {
      translationId: "map.accommodation.caledonianStudioFlats",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.540548,
        lng: -0.117166
      }
    },
    {
      translationId: "map.accommodation.nativeCamden",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.552753,
        lng: -0.124
      }
    },
    {
      translationId: "map.accommodation.cornerHouseHotel",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.548183,
        lng: -0.130496
      }
    }
  ];

  return <BaseMap {...props} markers={markers} />;
}

export default AccommodationCaledonianMap;

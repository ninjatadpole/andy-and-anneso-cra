import React from "react";

import {
  AccommodationFinsbury,
  AccommodationCaledonian,
  AccommodationKingsCross,
  Venues
} from "../map";
import Page from "../page";
import ScrollNav from "../scroll-nav";
import Translation from "../translation";

import "./page-map.scss";

function PageMap(props) {
  return (
    <Page className="page-map" title="map.metaTitle">
      <Translation tag="h1" id="map.title" />

      <ScrollNav
        items={[
          {
            link: "#maps-venues",
            text: "Venues"
          },
          {
            link: "#maps-accommodation",
            text: "Accommodation"
          },
          { link: "#maps-transport", text: "Transport" }
        ]}
      />

      <div className="content">
        <div id="maps-venues" className="section">
          <Translation tag="h2" id="map.venueTitle" />
          <ul>
            <Translation tag="li" id="map.venues.ceremony" />
            <Translation tag="li" id="map.venues.party" />
          </ul>
          <Venues />
        </div>
        <div id="maps-accommodation" className="section">
          <Translation tag="h2" id="map.accommodationTitle" />

          <Translation tag="h3" id="map.accommodationFinsburyTitle" />
          <Translation tag="p" id="map.accommodationFinsburyDesc" />
          <ul>
            <Translation tag="li" id="map.accommodation.pemburyHotel" />
            <Translation tag="li" id="map.accommodation.bestWesternHighbury" />
            <Translation tag="li" id="map.accommodation.queensHotel" />
            <Translation tag="li" id="map.accommodation.travelodgeFinsbury" />
            <Translation tag="li" id="map.accommodation.queensDrive" />
            <Translation tag="li" id="map.accommodation.unitedLodge" />
            <Translation
              tag="li"
              id="map.accommodation.finsburyServicedAppts"
            />
          </ul>
          <AccommodationFinsbury />

          <Translation tag="h3" id="map.accommodationCaledonianTitle" />
          <ul>
            <Translation tag="li" id="map.accommodation.cornerHouseHotel" />
            <Translation tag="li" id="map.accommodation.cuckooN1" />
            <Translation tag="li" id="map.accommodation.makedoniaHotel" />
            <Translation tag="li" id="map.accommodation.nativeCamden" />
            <Translation
              tag="li"
              id="map.accommodation.caledonianStudioFlats"
            />
          </ul>
          <AccommodationCaledonian />

          <Translation tag="h3" id="map.accommodationKingsCrossTitle" />
          <Translation tag="p" id="map.accommodationKingsCrossDesc" />
          <ul>
            <Translation tag="li" id="map.accommodation.hubPremierInn" />
            <Translation tag="li" id="map.accommodation.travelodgeKingsCross" />
            <Translation tag="li" id="map.accommodation.kingsCrossInnHotel" />
            <Translation
              tag="li"
              id="map.accommodation.travelodgeCentralKingsCross"
            />
            <Translation tag="li" id="map.accommodation.comfortInnKingsCross" />
          </ul>
          <AccommodationKingsCross />

          <Translation tag="h3" id="map.accommodationAirBnbTitle" />
          <Translation tag="p" id="map.accommodationAirBnbDesc" />

          <Translation tag="h3" id="map.accommodationHostelTitle" />
          <Translation tag="p" id="map.accommodationHostelDesc" />
        </div>
        <div id="maps-transport" className="section">
          <Translation tag="h2" id="map.transportTitle" />

          <Translation tag="h3" id="map.transportNavigatingTitle" />
          <Translation tag="p" id="map.transportNavigatingDesc" />

          <Translation tag="h3" id="map.transportTubeTitle" />
          <Translation tag="p" id="map.transportTubeDesc" />

          <Translation tag="h3" id="map.transportBetweenTitle" />
          <Translation tag="p" id="map.transportBetweenDesc" />
        </div>
      </div>
    </Page>
  );
}

export default PageMap;

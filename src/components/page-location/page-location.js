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

import "./page-location.scss";

function PageLocation(props) {
  return (
    <Page className="page-location" title="location.metaTitle">
      <Translation tag="h1" id="location.title" />

      <ScrollNav
        items={[
          {
            link: "#locations-venues",
            textId: "location.venueTitle"
          },
          {
            link: "#locations-accommodation",
            textId: "location.accommodationTitle"
          },
          { link: "#locations-transport", textId: "location.transportTitle" }
        ]}
      />

      <div className="content">
        <div id="locations-venues" className="section">
          <Translation tag="h2" id="location.venueTitle" />
          <ul>
            <Translation tag="li" id="location.venues.ceremony" />
            <Translation tag="li" id="location.venues.party" />
          </ul>
          <Venues />
        </div>
        <div id="locations-accommodation" className="section">
          <Translation tag="h2" id="location.accommodationTitle" />

          <Translation tag="h3" id="location.accommodationFinsburyTitle" />
          <Translation tag="p" id="location.accommodationFinsburyDesc" />
          <ul>
            <Translation tag="li" id="location.accommodation.pemburyHotel" />
            <Translation
              tag="li"
              id="location.accommodation.bestWesternHighbury"
            />
            <Translation tag="li" id="location.accommodation.queensHotel" />
            <Translation
              tag="li"
              id="location.accommodation.travelodgeFinsbury"
            />
            <Translation tag="li" id="location.accommodation.queensDrive" />
            <Translation tag="li" id="location.accommodation.unitedLodge" />
            <Translation
              tag="li"
              id="location.accommodation.finsburyServicedAppts"
            />
          </ul>
          <AccommodationFinsbury />

          <Translation tag="h3" id="location.accommodationCaledonianTitle" />
          <ul>
            <Translation
              tag="li"
              id="location.accommodation.cornerHouseHotel"
            />
            <Translation tag="li" id="location.accommodation.cuckooN1" />
            <Translation tag="li" id="location.accommodation.makedoniaHotel" />
            <Translation tag="li" id="location.accommodation.nativeCamden" />
            <Translation
              tag="li"
              id="location.accommodation.caledonianStudioFlats"
            />
          </ul>
          <AccommodationCaledonian />

          <Translation tag="h3" id="location.accommodationKingsCrossTitle" />
          <Translation tag="p" id="location.accommodationKingsCrossDesc" />
          <ul>
            <Translation tag="li" id="location.accommodation.hubPremierInn" />
            <Translation
              tag="li"
              id="location.accommodation.travelodgeKingsCross"
            />
            <Translation
              tag="li"
              id="location.accommodation.kingsCrossInnHotel"
            />
            <Translation
              tag="li"
              id="location.accommodation.travelodgeCentralKingsCross"
            />
            <Translation
              tag="li"
              id="location.accommodation.comfortInnKingsCross"
            />
          </ul>
          <AccommodationKingsCross />

          <Translation tag="h3" id="location.accommodationAirBnbTitle" />
          <Translation tag="p" id="location.accommodationAirBnbDesc" />

          <Translation tag="h3" id="location.accommodationHostelTitle" />
          <Translation tag="p" id="location.accommodationHostelDesc" />
        </div>
        <div id="locations-transport" className="section">
          <Translation tag="h2" id="location.transportTitle" />

          <Translation tag="h3" id="location.transportNavigatingTitle" />
          <Translation tag="p" id="location.transportNavigatingDesc" />

          <Translation tag="h3" id="location.transportTubeTitle" />
          <Translation tag="p" id="location.transportTubeDesc" />

          <Translation tag="h3" id="location.transportBetweenTitle" />
          <Translation tag="p" id="location.transportBetweenDesc" />
        </div>
      </div>
    </Page>
  );
}

export default PageLocation;

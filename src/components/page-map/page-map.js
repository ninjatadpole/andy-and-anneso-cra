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
        <h2 id="maps-venues">Venues</h2>
        <Venues />
        <h2 id="maps-accommodation">Accommodation</h2>
        <h3>Near our house (Finsbury Park)</h3>
        <p>
          We live quite close to the Arsenal stadium, and our wedding will be
          during the football season - depending on whether the team is playing
          at home that week, accommodation may be harder to secure.
        </p>
        <ul>
          <li>Pembury Hotel, £60-90</li>
          <li>Best Western Highbury, £96</li>
          <li>Queens Hotel, £86</li>
          <li>Travelodge Finsbury Park, £69</li>
          <li>Queens Drive, £80</li>
          <li>United Lodge Hotel and Appartments, £94</li>
          <li>Finsbury Serviced Appartments, £125</li>
        </ul>
        <AccommodationFinsbury />
        <h3>Near the party (Caledonian Road)</h3>
        <ul>
          <li>Corner House Hotel, £70</li>
          <li>Cuckoo N1, £90</li>
          <li>Makedonia Hotel, £100</li>
          <li>Camden Town Hotel, £85</li>
          <li>Native Camden, £110</li>
          <li>Caledonian Road Studio Flats</li>
        </ul>
        <AccommodationCaledonian />
        <h3>Near Kings Cross (1 tube stop from the party)</h3>
        <p>
          Kings Cross is at the edge of central London and a trasport hub which
          makes it both very convenient to stay and quite expensive
        </p>
        <ul>
          <li>Hub by Premier Inn Kings Cross, £60-100</li>
          <li>Travelodge Kings Cross, £90-130</li>
          <li>Kings Cross Inn Hotel, £110</li>
          <li>Travelodge Central Kings Cross, £110</li>
        </ul>
        <AccommodationKingsCross />
        <h3>AirBnB</h3>
        <p>
          Air BnB properties are available at a range of prices and locations
          across London.
        </p>
        <h3>Hostels</h3>
        <p>
          Camden is a youthful area of the city and hosts a couple of hostels.
        </p>
        <h2 id="maps-transport">Transport</h2>
        Both Victoria and Piccadilly lines run all night on Saturday into Sunday
        https://tfl.gov.uk/plan-a-journey/
        https://itunes.apple.com/gb/app/citymapper-the-ultimate-transport-app/id469463298
        https://play.google.com/store/apps/details?id=com.citymapper.app.release&hl=en_GB
        <h4>Islington Town Hall</h4>
        Buses: 4, 19, 43 (south to north), 30 (centre to East) Tube: Highbury
        and Islington station is on the Victoria line (light blue) Join the
        Victoria from other lines at Kings Cross (in the South) or Finsbury Park
        (in the North)
        <h4>The Depot</h4>
        Guests at the ceremony will be provided with transport to The Depot.
        Buses: 17, 91, 259 (centre to north), 393 (north West to North East)
        Tube: Caledonian Road station is on the Piccadilly Line (dark blue).
        Join the Piccadilly from other lines at Kings Cross (in the South) or
        Finsbury Park (in the North)
      </div>
    </Page>
  );
}

export default PageMap;

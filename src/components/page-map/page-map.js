import React from "react";

import Map from "../map";
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
        <Map />
        <h2 id="maps-accommodation">Accommodation</h2>
        <Map />
        <h3 id="maps-transport">Transport</h3>
        <Map />
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

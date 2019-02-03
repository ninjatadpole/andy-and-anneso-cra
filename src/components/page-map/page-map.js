import React from "react";
import DocumentTitle from "react-document-title";

import Map from "../map";

import "./page-map.scss";

export default function PageMap(props) {
  return (
    <DocumentTitle title="Maps for the venues - Andy & Anne-So - August 24th 2019">
      <section className="page page-map max-width">
        <h1>Map</h1>
        <Map />
      </section>
    </DocumentTitle>
  );
}

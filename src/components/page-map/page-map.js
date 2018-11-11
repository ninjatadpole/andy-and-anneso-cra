import React from "react";
import DocumentTitle from "react-document-title";

import Map from "../map";

export default function PageMap(props) {
  return (
    <DocumentTitle title="Maps for the venues - Andy & Anne-So - August 24th 2019">
      <section className="page map">
        <h1>Map</h1>
        <Map />
      </section>
    </DocumentTitle>
  );
}

import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

function WeddingMap(props) {
  return (
    <Map
      google={props.google}
      zoom={15}
      style={{ width: "400px", height: "400px" }}
      initialCenter={{
        lat: 51.5412773,
        lng: -0.1023817
      }}
    />
  );
}

export default GoogleApiWrapper({})(WeddingMap);

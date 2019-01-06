import React from "react";
import { InfoWindow, Map, Marker, GoogleApiWrapper } from "google-maps-react";

import { WithCtx } from "../../context";

import "./map.scss";

class WeddingMap extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    markers: [],
    refs: { map: null, marker: null }
  };

  markers = [
    {
      translationId: "map.ceremony",
      autoOpen: true,
      title: "",
      pos: {
        lat: 51.5412773,
        lng: -0.1023817
      }
    },
    {
      translationId: "map.party",
      // autoOpen: true,
      title: "",
      pos: {
        lat: 51.5413382,
        lng: -0.1286466
      }
    }
  ];

  bounds = null;

  componentDidMount() {
    this.addMarkers();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.ctx.language !== this.props.ctx.language) {
      this.addMarkers();
      this.clickMarker();
    }
  }

  addMarkers = () => {
    const adjustment = 0;
    this.bounds = new this.props.google.maps.LatLngBounds();
    for (let i = 0; i < this.markers.length; i++) {
      const { lat, lng } = this.markers[i].pos;
      const greaterPos = { lat: lat + adjustment, lng: lng + adjustment };
      const lesserPos = { lat: lat - adjustment, lng: lng - adjustment };
      this.bounds.extend(lesserPos);
      this.bounds.extend(greaterPos);
    }
  };

  createMarkerRef = markerRef => {
    if (markerRef) {
      this.setState(currentState => {
        return {
          ...currentState,
          refs: {
            ...currentState.refs,
            marker: markerRef
          }
        };
      });
    }
  };

  clickMarker = () => {
    const { marker } = this.state.refs;
    if (marker) {
      this.onMarkerClick(marker.props, marker.marker);
    }
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const {
      google,
      ctx: { translate, currentLanguage }
    } = this.props;

    return (
      <div className="wedding-map">
        <Map
          google={google}
          style={{ width: "600px", height: "400px" }}
          bounds={this.bounds}
          initialCenter={this.markers[0].pos}
          onReady={this.clickMarker}
          fullscreenControl={false}
          mapTypeControl={false}
        >
          {this.markers.map((marker, index) => {
            return (
              <Marker
                name={translate(marker.translationId)}
                title={translate(marker.translationId)}
                position={marker.pos}
                onClick={this.onMarkerClick}
                key={`marker-${index}-${currentLanguage}`}
                ref={marker.autoOpen ? this.createMarkerRef : () => {}}
              />
            );
          })}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onOpen={this.windowHasOpened}
            onClose={this.windowHasClosed}
            disableAutoPan={true}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS,
  wrappingComponent: React.Fragment
})(WithCtx(WeddingMap));

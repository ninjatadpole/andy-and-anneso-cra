import React from "react";
import PropTypes from "prop-types";
import { InfoWindow, Map, Marker, GoogleApiWrapper } from "google-maps-react";

import { WithCtx } from "../../utils/context";

import "./map.scss";

class BaseMap extends React.Component {
  static propTypes = {
    ctx: PropTypes.object.isRequired,
    google: PropTypes.object.isRequired,
    markers: PropTypes.array
  };

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    markers: [],
    refs: { map: null, marker: null }
  };

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
    const { google, markers } = this.props;

    const adjustment = 0;
    this.bounds = new google.maps.LatLngBounds();
    for (let i = 0; i < markers.length; i++) {
      const { lat, lng } = markers[i].pos;
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
      ctx: { translate, currentLanguage },
      google,
      markers
    } = this.props;

    return (
      <div className="wedding-map">
        <Map
          className="map-display"
          google={google}
          style={{ width: "100%", height: "100%" }}
          bounds={this.bounds}
          initialCenter={markers.length ? markers[0].pos : null}
          fullscreenControl={false}
          mapTypeControl={false}
        >
          {markers.map((marker, index) => {
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
              <h3>{this.state.selectedPlace.name}</h3>
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
})(WithCtx(BaseMap));

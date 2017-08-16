import React, { Component } from 'react';
import { MapView } from 'expo';

class MapViewMarker extends Component {
  render() {
    const { condinates, title, description } = this.props;

    return (
      <MapView.Marker
        coordinate={condinates}
        title={title}
        description={description}
      />
    );
  }
}

export default MapViewMarker;

import React, { Component } from 'react';
import MapViewMarker from './MapViewMarker';

const markers = [
  {
    title: 'SEMCOMP 20',
    description: 'ICMC USP - São Carlos',
    cordinates: {
      latitude: -22.0055948,
      longitude: -47.8933842,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    title: 'SEMCOMP 19',
    description: 'ICMC USP - São Carlos',
    cordinates: {
      latitude: -22.0052948,
      longitude: -47.8933842,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    title: 'SEMCOMP 18',
    description: 'ICMC USP - São Carlos',
    cordinates: {
      latitude: -22.0054948,
      longitude: -47.8933842,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
];

class MapViewMarkers extends Component {
  render() {
    return markers.map(marker =>
      <MapViewMarker
        coordinate={marker.condinates}
        title={marker.title}
        description={marker.description}
      />,
    );
  }
}

export default MapViewMarkers;

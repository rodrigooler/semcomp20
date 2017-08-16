import React, { Component } from 'react';

import MapView from './components/MapView';
import MapViewMarkers from './components/MapViewMarkers';

class App extends Component {
  render() {
    return (
      <MapView>
        <MapViewMarker />
      </MapView>
    );
  }
}

export default App;

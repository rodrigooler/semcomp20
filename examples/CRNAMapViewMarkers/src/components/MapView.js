import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { MapView } from 'expo';

const { width, height } = Dimensions.get('window');

const initialRegion = {
  latitude: -22.0055948,
  longitude: -47.8933842,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

class App extends Component {
  render() {
    return (
      <MapView style={styles.map} initialRegion={initialRegion}>
        {this.props.childrens}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width,
    height,
  },
});

export default App;

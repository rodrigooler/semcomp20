import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { MapView } from 'expo';

const { width, height } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width,
    height,
  },
});

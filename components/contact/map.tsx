import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30.7046, // Example latitude for Chandigarh, India
          longitude: 76.7179, // Example longitude for Chandigarh, India
          latitudeDelta: 0.05, // Zoom level for latitude
          longitudeDelta: 0.05, // Zoom level for longitude
        }}
      >
        {/* Marker for the specific place */}
        <Marker
          coordinate={{
            latitude: 30.7046,
            longitude: 76.7179,
          }}
          title="Chandigarh"
          description="The City Beautiful"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

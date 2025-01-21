import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const SideDrawer = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const drawerAnimation = useState(new Animated.Value(-screenWidth))[0];

  const toggleDrawer = () => {
    if (drawerVisible) {
      Animated.timing(drawerAnimation, {
        toValue: -screenWidth,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setDrawerVisible(false));
    } else {
      setDrawerVisible(true);
      Animated.timing(drawerAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const closeDrawer = () => {
    if (drawerVisible) {
      toggleDrawer();
    }
  };

  return (
    <View style={styles.container}>
      {/* Hamburger Icon */}
      <TouchableOpacity onPress={toggleDrawer} style={styles.hamburger}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </TouchableOpacity>

      {/* Overlay to detect taps outside the drawer */}
      {drawerVisible && (
        <TouchableWithoutFeedback onPress={closeDrawer}>
          <View style={styles.overlay}>
            <Animated.View style={[styles.drawer, { left: drawerAnimation }]}>
              <Text style={styles.drawerText}>Home</Text>
              <Text style={styles.drawerText}>Profile</Text>
              <Text style={styles.drawerText}>Settings</Text>
              <Text style={styles.drawerText}>Logout</Text>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  hamburger: {
    padding: 15,
  },
  line: {
    width: 30,
    height: 3,
    backgroundColor: "#000",
    marginVertical: 4,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent overlay
  },
  drawer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: screenWidth * 0.75,
    backgroundColor: "#f0f0f0",
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  drawerText: {
    fontSize: 18,
    marginVertical: 15,
    color: "#333",
  },
});

export default SideDrawer;

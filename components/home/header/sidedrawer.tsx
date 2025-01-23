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
import { Drawer, Icon } from "react-native-paper";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const SideDrawer = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const drawerAnimation = useState(new Animated.Value(screenWidth))[0];

  const toggleDrawer = () => {
    if (drawerVisible) {
      Animated.timing(drawerAnimation, {
        toValue: screenWidth, // Move drawer off-screen to the right
        duration: 300,
        useNativeDriver: false,
      }).start(() => setDrawerVisible(false));
    } else {
      setDrawerVisible(true);
      Animated.timing(drawerAnimation, {
        toValue: screenWidth * 0.75, // Bring drawer to visible position
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
            <Icon
              source="camera"
              size={40}
            />
            <Text>Camera</Text>
            <Icon
              source="delete"
              size={40}
            />
            <Text>Delete</Text>
            <Icon
              source="email"
              size={40}
            />
            <Text>Contact</Text>
            <Icon
              source="inbox"
              size={40}
            />
            <Text>Inbox</Text>
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
    alignSelf: "flex-end", // Align hamburger to the right
    marginRight: 20,
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
    backgroundColor: "rgba(240, 234, 249, 0.89)", // Semi-transparent overlay
  },
  drawer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: screenWidth * 0.75,
    backgroundColor: "rgba(227, 210, 252, 0.89)",
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 2 }, // Shadow adjusted for right-side drawer
    shadowOpacity: 0.3,
    shadowRadius: 5,
    gap:20
  },
  drawerText: {
    fontSize: 18,
    marginVertical: 15,
    color: "#333",
  },
});

export default SideDrawer;

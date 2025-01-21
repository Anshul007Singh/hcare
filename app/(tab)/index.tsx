import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const data = [
  {
    title: "First Slide",
    description: "This is the first slide description.",
    image: "https://www.shutterstock.com/image-vector/set-ui-ux-gui-screens-600nw-1473999881.jpg",
  },
  {
    title: "Second Slid",
    description: "This is the second slide description.",
    image: "https://i.ytimg.com/vi/J-ohOirBCJM/maxresdefault.jpg",
  },
  {
    title: "Third Slide",
    description: "This is the third slide description.",
    image: "https://via.placeholder.com/400x200.png?text=Slide+3",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event:any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveIndex(slideIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Dots Indicator */}
      <View style={styles.dotsContainer}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  slide: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#000",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});

export default Home;
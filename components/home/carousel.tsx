import React, { useState, useRef } from "react";
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
    image: "https://www.hcareindia.com/wp-content/uploads/2024/11/Best.webp",
  },
  {
    title: "Second Slide",
    description: "This is the second slide description.",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    title: "Third Slide",
    description: "This is the third slide description.",
    image: "https://picsum.photos/600/400?random=3",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event:any) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const slideIndex = Math.round(xOffset / screenWidth);
    setActiveIndex(slideIndex);
  };

  const handleDotPress = (index:any) => {
    setActiveIndex(index);
    scrollViewRef.current.scrollTo({ x: index * screenWidth, animated: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginBottom:20
  },
  slide: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode:'cover'
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

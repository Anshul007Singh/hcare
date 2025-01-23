import React, { useRef, useState } from "react";
import { Text } from 'react-native-paper';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { IconButton } from "react-native-paper";

const { width: screenWidth } = Dimensions.get("window");

const data = [
  { id: 1, image: "https://picsum.photos/600?random=1" },
  { id: 2, image: "https://picsum.photos/500?random=2" },
  { id: 3, image: "https://picsum.photos/700?random=3" },
  { id: 4, image: "https://picsum.photos/400?random=4" },
  { id: 5, image: "https://picsum.photos/600?random=5" },
  { id: 6, image: "https://picsum.photos/300?random=6" },
];

const HighQualityProducts = () => {
  const scrollViewRef = useRef(null);
  const itemWidth = screenWidth / 2; // Two images visible at once
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    const newPosition = Math.max(scrollPosition - itemWidth, 0);
    setScrollPosition(newPosition);
    scrollViewRef.current.scrollTo({ x: newPosition, animated: true });
  };

  const handleScrollRight = () => {
    const maxPosition = (data.length - 2) * itemWidth;
    const newPosition = Math.min(scrollPosition + itemWidth, maxPosition);
    setScrollPosition(newPosition);
    scrollViewRef.current.scrollTo({ x: newPosition, animated: true });
  };

  return (
    <View style={styles.container}>
      {/* Scroll Left Button */}
      <Text variant="headlineSmall">High Quality PCD Pharma Products</Text>
      <IconButton
        icon="chevron-left"
        size={30}
        onPress={handleScrollLeft}
        style={styles.arrowLeft}
      />

      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth}
        decelerationRate="fast"
        onScroll={(event) => {
          const currentOffset = event.nativeEvent.contentOffset.x;
          setScrollPosition(currentOffset);
        }}
        scrollEventThrottle={16}
      >
        {data.map((item) => (
          <View key={item.id} style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <IconButton
        icon="chevron-right"
        size={30}
        onPress={handleScrollRight}
        style={styles.arrowRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin:10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: screenWidth / 2,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  arrowLeft: {
    position: "absolute",
    left: 10,
    zIndex: 1,
  },
  arrowRight: {
    position: "absolute",
    right: 10,
    zIndex: 1,
  },
});

export default HighQualityProducts;

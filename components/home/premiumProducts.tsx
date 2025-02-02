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
  { id: 1, image: "https://hcareindia.com/wp-content/uploads/2024/09/1-5.png" },
  { id: 2, image: "https://hcareindia.com/wp-content/uploads/2024/09/2-4.png" },
  { id: 3, image: "https://hcareindia.com/wp-content/uploads/2024/09/3-5.png" },
  { id: 4, image: "https://hcareindia.com/wp-content/uploads/2024/09/4-4.png" },
  { id: 5, image: "https://hcareindia.com/wp-content/uploads/2024/09/5-2.png" },
  { id: 6, image: "https://hcareindia.com/wp-content/uploads/2024/09/7-2.png" },
  { id: 7, image: "https://hcareindia.com/wp-content/uploads/2024/09/8-2.png" },
];

const PremiumProducts = () => {
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
      <Text variant="headlineMedium">Premium Products</Text>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(247, 244, 253, 0.89)",
    marginBottom:20
  },
  imageContainer: {
    width: screenWidth / 2,
    padding: 10,
    resizeMode:'cover'

  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 30,
    resizeMode:'stretch'
  },
  arrowLeft: {
    position: "absolute",
    left: 10,
    zIndex: 1,
    backgroundColor:'rgba(208, 184, 245, 0.89)'

  },
  arrowRight: {
    position: "absolute",
    right: 10,
    zIndex: 100,
    backgroundColor:'rgba(208, 184, 245, 0.89)'
  },
});

export default PremiumProducts;

import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const ImageWithDescription = ({ imageSource, title, description }: { imageSource: any; title: string; description: string }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://www.hcareindia.com/wp-content/uploads/2024/12/pharma-franchise-company-2.png" }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>What Makes US Best Pcd Pharma Franchise COmpany In India</Text>
        <Text style={styles.description}>We are an ISO 9001:2015 certified pharma company working with 600+ associates and all products are CGMP/WHO-certified, excellent packaging with latest molecules and compbinaions. We provide high-quality products with monopoly rights, which means the freedom to operate with no competition and significant decisio-making authority.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // ✅ Aligns image and text side by side
    alignItems: "center", // ✅ Centers items vertically
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
    gap:10
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: Dimensions.get("window").width > 600 ? 16 : 0,
    marginBottom: Dimensions.get("window").width > 600 ? 0 : 10,
    resizeMode:'stretch'
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default ImageWithDescription;

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { List, Text } from "react-native-paper";

const AccordionExample = () => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Accordion
          title="H & Care Incorp - PCD Pharma Company"
          left={(props) => <List.Icon {...props} icon="heart" />}
          expanded={expanded}
          onPress={handlePress}
        >
          <Text variant="titleSmall">
          H & Care Incorp is one of the best PCD pharma franchise company with pharmaceutical segments covering cardiovascular, diabetes, orthopedics, dermatology and general medicines range. Start your pharma franchise with our franchise opportunity in India. Benefit from a complete range of product categories to enter new markets with our PCD pharma franchise. We are supplying and marketing a complete range of GMP-certified Pharmaceutical Formulations, Herbal Products and Supplements.
          </Text>
        </List.Accordion>

        <List.Accordion
          title="What makes us Best"
          left={(props) => <List.Icon {...props} icon="heart-outline" />}
        >
          <Text variant="titleSmall">
          We are an ISO 9001:2015 certified pharma company working with 600+ associates and all products are CGMP/WHO-certified, excellent packaging with latest molecules and combinations. We provide high-quality products with monopoly rights, which means the freedom to operate with no competition and significant decision-making authority.
          </Text>
        </List.Accordion>
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});

export default AccordionExample;

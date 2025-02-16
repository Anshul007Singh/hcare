import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, List } from 'react-native-paper';

const AccordionComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <List.Accordion
        left={(props) => <List.Icon {...props} icon='heart' />}
        expanded={expanded}
        onPress={handlePress}
        titleStyle={{
          fontWeight: 700,
          fontSize: 15,
        }}
        title='H & Care Incorp - PCD Pharma Company'
      >
        <View>
          <Text>
            H & Care Incorp is one of the best PCD pharma franchise company with
            pharmaceutical segments covering cardiovascular, diabetes,
            orthopedics, dermatology and general medicines range. Start your
            pharma franchise with our franchise opportunity in India. Benefit
            from a complete range of product categories to enter new markets
            with our PCD pharma franchise. We are supplying and marketing a
            complete range of GMP-certified Pharmaceutical Formulations, Herbal
            Products and Supplements.
            {'\n'}
          </Text>
          <View style={styles.buttons}>
            <Button
              mode='contained'
              onPress={() => console.log('Pressed')}
              style={{ width: 130 }}
            >
              <Text>Read More..</Text>
            </Button>
            <Button
              mode='outlined'
              onPress={() => console.log('Pressed')}
              style={{ width: 170 }}
            >
              Request For Quote
            </Button>
          </View>
        </View>
      </List.Accordion>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontWeight: 500,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

export default AccordionComponent;

import { View, Text } from 'react-native'
import React from 'react';
import { Avatar, Button, Card } from 'react-native-paper';

export default function Settings() {
  return (
    <View>
      <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle"  />
    <Card.Content>
      <Text >Card tie</Text>
      <Text >Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
    </View>
  )
}
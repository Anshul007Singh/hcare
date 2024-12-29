import { View} from 'react-native'
import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native';
import { Button } from 'react-native-paper';

export default function Home() {
  return (
    <View>
      <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur doloribus, quod soluta neque eaque odio voluptatibus omnis cupiditate. Tempora veritatis numquam id architecto veniam quas reiciendis praesentium ipsum quod alias. Lorem100</Text>
      <Pressable style={styles.button} onPress={()=>alert('clicked')}>
      <Text style={styles.buttonText}>Click Me</Text>
    </Pressable>
    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    alignSelf: 'center',
    padding: 8,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    color: 'black',
    marginBottom: 16,
  },
});
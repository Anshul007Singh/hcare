import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Alert,
  ScrollView,
} from "react-native";
import Address from "./address";
import { Divider } from "react-native-paper";
import { Button } from 'react-native-paper';
import MapComponent from "./map";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !city || !phone || !query) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    Alert.alert(
      "Thank You!",
      `We have received your details:\n\nName: ${name}\nEmail: ${email}\nCity: ${city}\nPhone: ${phone}\nQuery: ${query}`
    );

    // Clear the form
    setName("");
    setEmail("");
    setCity("");
    setPhone("");
    setQuery("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Leave us a message</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />

      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={styles.input}
      />

      <TextInput
        placeholder="Query"
        value={query}
        onChangeText={setQuery}
        multiline
        numberOfLines={4}
        style={[styles.input, styles.textArea]}
      />

      <View style={styles.buttonContainer}>
        {/* <Button title="Submit Your Details" onPress={handleSubmit} /> */}
        <Button icon="check" mode="contained" onPress={handleSubmit}>
    Submit Your Detials
  </Button>
      </View>
      <Divider/>
      <Address/>
      <MapComponent/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    marginBottom:20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top", // Align text to the top for multiline
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom:20,
    borderRadius: 8,
    overflow: "hidden", // To clip the button corners
  },
});

export default ContactForm;

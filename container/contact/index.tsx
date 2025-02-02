import ContactForm from '@/components/contact/contactForm';
import Map from '@/components/contact/map';
import * as React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

const ContactPage = () => {
 return (
    <View>
        <ContactForm/>
    </View>
  );
};

export default ContactPage;
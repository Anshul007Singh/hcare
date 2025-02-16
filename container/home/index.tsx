import AccordionExample from '@/components/home/accordion/accordion';
import AccordionDetails from '@/components/home/accordion/accordionDetails';
import Carousel from '@/components/home/carousel';
import Divsions from '@/components/home/division/divsion';
import HighQualityProducts from '@/components/home/highQualityProducts';
import PremiumProducts from '@/components/home/premiumProducts';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Divider } from 'react-native-paper';

const Home = () => {
  return (
    <ScrollView>
      <View>
        <Carousel />
        <Divider />
      </View>
      <PremiumProducts />
      <Divider />
      <AccordionExample />
      <Divider />
      <HighQualityProducts />
      <Divider />
      <AccordionDetails />
      <Divider />
      <Divsions />
    </ScrollView>
  );
};

export default Home;

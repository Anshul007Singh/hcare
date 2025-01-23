import AccordionExample from "@/components/home/accordion";
import Carousel from "@/components/home/carousel";
import SideDrawer from "@/components/home/header/sidedrawer";
import HighQualityProducts from "@/components/home/highQualityProducts";
import PremiumProducts from "@/components/home/premiumProducts";
import React from "react";
import {
    ScrollView,
  View,
} from "react-native";
import { Divider } from "react-native-paper";


const Home = () => {

  return (
    <ScrollView>
        <View style = {{marginBottom:30}}>
           <SideDrawer />
        </View>
        <Divider/>
        <View >
        <Carousel/>
        <Divider/>
        </View>
        <PremiumProducts/>
        <Divider/>
        <AccordionExample/>
        <Divider/>
        <HighQualityProducts/>
    </ScrollView>
  );
};

export default Home;

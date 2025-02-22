import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Dimensions, Button } from 'react-native';
import { Divider, List, Text } from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get('window').width;

function CustomDrawerContent() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image
        source={{
          uri: 'https://hcareindia.com/wp-content/uploads/2024/09/Untitled-design-65-1.png',
        }}
        style={{
          width: 200,
          height: 70,
          marginLeft: -25,
        }}
        resizeMode='contain'
      />

      <List.Section>
        <List.Item
          titleStyle={{ color: 'rgba(149, 101, 238, 0.89)', fontWeight: '700' }}
          title='Home'
          left={() => <List.Icon icon='home' color='rgba(88, 26, 204, 0.89)' />}
        />
        <Divider
          style={{ backgroundColor: 'rgba(199, 179, 236, 0.89)', height: 2 }}
        />
        <List.Item
          title='About Us'
          titleStyle={{ color: 'rgba(149, 101, 238, 0.89)', fontWeight: '700' }}
          left={() => (
            <List.Icon
              icon='information-outline'
              color='rgba(88, 26, 204, 0.89)'
            />
          )}
        />
        <Divider
          style={{ backgroundColor: 'rgba(199, 179, 236, 0.89)', height: 2 }}
        />
        <List.Item
          title='Contact Us'
          titleStyle={{ color: 'rgba(149, 101, 238, 0.89)', fontWeight: '700' }}
          left={() => (
            <List.Icon icon='email' color='rgba(88, 26, 204, 0.89)' />
          )}
        />
        <Divider
          style={{ backgroundColor: 'rgba(199, 179, 236, 0.89)', height: 2 }}
        />
        <List.Item
          title='Settings'
          titleStyle={{ color: 'rgba(149, 101, 238, 0.89)', fontWeight: '700' }}
          left={() => (
            <List.Icon icon='cog-outline' color='rgba(88, 26, 204, 0.89)' />
          )}
        />
        <Divider
          style={{ backgroundColor: 'rgba(199, 179, 236, 0.89)', height: 2 }}
        />
        <List.Item
          title='Products'
          titleStyle={{ color: 'rgba(149, 101, 238, 0.89)', fontWeight: '700' }}
          left={() => (
            <List.Icon
              icon='shopping-outline'
              color='rgba(88, 26, 204, 0.89)'
            />
          )}
        />
        <Divider
          style={{ backgroundColor: 'rgba(199, 179, 236, 0.89)', height: 2 }}
        />
      </List.Section>
    </View>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={({ navigation }) => ({
          drawerPosition: 'left',
          drawerStyle: {
            width: SCREEN_WIDTH * 0.5,
          },
          headerLeft: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}
            >
              <Image
                source={{
                  uri: 'https://hcareindia.com/wp-content/uploads/2024/09/Untitled-design-65-1.png',
                }}
                style={{ width: 120, height: 70 }}
                resizeMode='contain'
              />
              <TouchableOpacity
                onPress={() => alert('Button Clicked!')}
                style={{
                  marginLeft: 70,
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  borderRadius: 5,
                  borderColor: 'rgba(184, 141, 245, 0.89)',
                  borderWidth: 1,
                }}
              >
                <Text style={{ color: 'black', fontWeight: 700 }}>
                  PRODUCT LIST
                </Text>
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={{ marginRight: 15 }}
            >
              <Ionicons name='menu' size={28} color='black' />
            </TouchableOpacity>
          ),
          title: '',
        })}
      >
        {/* <Drawer.Screen name='Home' /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
}

import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Dimensions, Button } from 'react-native';
import { Text } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

function CustomDrawerContent() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Drawer Logo (Inside Drawer) */}
      <Image
        source={{
          uri: 'https://hcareindia.com/wp-content/uploads/2024/09/Untitled-design-65-1.png',
        }}
        style={{ width: 100, height: 50, alignSelf: 'center' }}
        resizeMode='contain'
      />
      {/* Drawer Items will go here */}
    </View>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent} // Custom drawer with logo
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
              {/* Logo */}
              <Image
                source={{
                  uri: 'https://hcareindia.com/wp-content/uploads/2024/09/Untitled-design-65-1.png',
                }}
                style={{ width: 100, height: 40 }}
                resizeMode='contain'
              />
              {/* Button Next to Logo */}
              <TouchableOpacity
                onPress={() => alert('Button Clicked!')}
                style={{
                  marginLeft: 40,
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
          title: '', // Remove "H & Care" from header
        })}
      >
        <Drawer.Screen name='Home' />
      </Drawer>
    </GestureHandlerRootView>
  );
}

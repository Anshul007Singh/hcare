import AboutUs from '@/container/about';
import ContactPage from '@/container/contact';
import ContactForm from '@/container/contact';
import Home from '@/container/home';
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Home/>;

const AlbumsRoute = () => <ContactPage/>;

const RecentsRoute = () => <AboutUs/>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Home', focusedIcon: 'home'},
    { key: 'albums', title: 'Contact', focusedIcon: 'contacts' },
    { key: 'recents', title: 'About Us', focusedIcon: 'account-group' },
    // { key: 'notifications', title: 'Notifications', focusedIcon: 'account-group', unfocusedIcon: 'account-group' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
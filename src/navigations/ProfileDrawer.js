import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {LogoutScreen, ProfileScreen} from '../screens';

const Drawer = createDrawerNavigator();

const ProfileDrawer = () => {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Setting" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default ProfileDrawer;

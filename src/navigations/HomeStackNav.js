import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailScreen, FeedScreen} from '../screens';

const Stack = createStackNavigator();

const HomeStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feeds" component={FeedScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNav;

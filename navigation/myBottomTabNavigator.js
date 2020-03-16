import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home'
import Chat from '../components/Chat'
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();
// const INITIAL_ROUTE_NAME = 'Chat';
export default function Tabs() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}

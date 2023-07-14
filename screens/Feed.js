import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./bottomTab/Home";
import Chat from './bottomTab/chat';
import Settings from "./bottomTab/Settings";


const BottomTab = createBottomTabNavigator();



export default function Feed() {
  return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Chat" component={Chat} />
            <BottomTab.Screen name="Settings" component={Settings} />
        </BottomTab.Navigator>
  );
}
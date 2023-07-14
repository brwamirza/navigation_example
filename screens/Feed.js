import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import Home from "./bottomTab/Home";
import Chat from './bottomTab/Chat';
import Settings from "./bottomTab/Settings";


const BottomTab = createBottomTabNavigator();



export default function Feed() {
  return (
        <BottomTab.Navigator screenOptions={{headerShown:false}}>         
            <BottomTab.Screen name="Home" component={Home} 
               options={{
                tabBarIcon: ({ focused })=>{
                    return (
                        <Ionicons 
                          name={focused ? "home" : "home-outline"} 
                          size={26} 
                          color={focused ? "#48b095" : "grey"} />
                    )
                },
                tabBarActiveTintColor:"#48b095",
                tabBarInactiveTintColor:"grey",
                // tabBarLabel:"Settings"
              }}
            />
            <BottomTab.Screen name="Chat" component={Chat} />
            <BottomTab.Screen name="Settings" component={Settings} />
        </BottomTab.Navigator>
  );
}
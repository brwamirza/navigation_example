import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {useState,useEffect} from 'react';

import Home from "./bottomTab/Home";
import Chat from './bottomTab/Chat';
import Settings from "./bottomTab/Settings";
import { createStackNavigator } from '@react-navigation/stack';


const BottomTab = createBottomTabNavigator();
const FeedStack = createStackNavigator();


const FeedTabs = () => (
<BottomTab.Navigator screenOptions={{headerShown:false}}>         
        <BottomTab.Screen name="Home" 
            // component={Home} 
              children={()=><Home updateCount={()=>setCount(count+1)}/>}
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
            <BottomTab.Screen name="Chat" component={Chat} 
                options={{
                tabBarIcon: ({ focused })=>{
                    return (
                        <MaterialCommunityIcons 
                          name={focused ? "chat" : "chat-outline"} 
                          size={26} 
                          color={focused ? "#48b095" : "grey"} />
                    )
                },
                tabBarActiveTintColor:"#48b095",
                tabBarInactiveTintColor:"grey",
                // tabBarLabel:"Settings"
              }}
            />
            <BottomTab.Screen name="Settings" component={Settings} 
              options={{
              tabBarIcon: ({ focused })=>{
                  return (
                      <Ionicons 
                        name={focused ? "settings" : "settings-outline"} 
                        size={26} 
                        color={focused ? "#48b095" : "grey"} />
                  )
              },
              tabBarActiveTintColor:"#48b095",
              tabBarInactiveTintColor:"grey",
              // tabBarLabel:"Settings"
            }}
            />
        </BottomTab.Navigator>
)


export default function Feed() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(count);
  },[count]) 

  return (
    <FeedStack.Navigator screenOptions={{headerShown:false}}>
      <FeedStack.Screen name='bottomTab' component={FeedTabs} />
    </FeedStack.Navigator>
  );
}
import "react-native-gesture-handler"
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { I18nManager } from "react-native";
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
import Feed from "./screens/Feed";
import Article from "./screens/Article";

const Drawer = createDrawerNavigator();



export default function App() {


  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerShown: true,
      }}>
        <Drawer.Screen name="Feed" component={Feed}/>
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
import "react-native-gesture-handler"
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Feed from "./screens/Feed";
import Article from "./screens/Article";
import { Provider } from "react-redux";
import { Store } from "./redux/store";

const Drawer = createDrawerNavigator();



export default function App() {


  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          headerShown: true,
        }}>
          <Drawer.Screen name="Feed" component={Feed}/>
          <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}
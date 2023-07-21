import { SafeAreaView,ScrollView,StyleSheet, Text, View } from 'react-native';
import useFetch from '../../api/getColors';
import {useEffect,useState} from 'react';
import { FAB ,Dialog, ListItem } from '@rneui/themed';
import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';

import AddColor from '../AddColor'

const ChatStack = createStackNavigator();


const ColorList = () =>{
  const navigation = useNavigation();

  const {data,error,isLoading} = useFetch();

  return (<>
    <ScrollView>
    {(isLoading===false) ?data.map((color)=>{
        return <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{color.color_id}</ListItem.Title>
                    <ListItem.Subtitle>EN: {color.color_en}</ListItem.Subtitle>
                    <ListItem.Subtitle>KU: {color.color_ku}</ListItem.Subtitle>
                    <ListItem.Subtitle>AR: {color.color_ar}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
      }):<Dialog.Loading />}


    </ScrollView>
    <FAB
      visible={true}
      onPress={() => navigation.navigate('AddColor')}
      placement="right"
      title="+ Add"
      // icon={{ name: 'edit', color: 'white' }}
      color="green"
    />
  </>)}


export default function Chat() {

  return (
    <ChatStack.Navigator  screenOptions={{headerShown: false,}}>
      <ChatStack.Screen name='ColorList' component={ColorList} />
      <ChatStack.Screen name='AddColor' component={AddColor} />

    </ChatStack.Navigator>
  );
}

import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import useFetch from '../../api/getColors';
import {useEffect} from 'react';
import { ListItem } from '@rneui/themed';


export default function Chat() {

  const {data,error,isLoading} = useFetch();

  console.log(data)
  return (
    <SafeAreaView>
    {data.map((color)=>{
      return  <ListItem>
      <ListItem.Content>
        <ListItem.Title>{color.color_id}</ListItem.Title>
        <ListItem.Subtitle>EN: {color.color_en}</ListItem.Subtitle>
        <ListItem.Subtitle>KU: {color.color_ku}</ListItem.Subtitle>
        <ListItem.Subtitle>AR: {color.color_ar}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    })}
    </SafeAreaView>
  );
}

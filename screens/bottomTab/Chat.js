import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import useFetch from '../../api/getColors';
import {useEffect} from 'react';
import { ListItem } from '@rneui/themed';


export default function Chat() {

  const {data,error,isLoading} = useFetch();

  console.log(data)
  return (
    <SafeAreaView>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>John Doe</ListItem.Title>
            <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
    </SafeAreaView>
  );
}

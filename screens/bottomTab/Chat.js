import { SafeAreaView,ScrollView,StyleSheet, Text, View } from 'react-native';
import useFetch from '../../api/getColors';
import {useEffect} from 'react';
import { FAB ,Dialog, ListItem } from '@rneui/themed';



export default function Chat() {

  const {data,error,isLoading} = useFetch();

  console.log(data)
  return (
    <SafeAreaView>
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
              //  onPress={() => setVisible(!visible)}
               placement="right"
               title="Show"
               icon={{ name: 'edit', color: 'white' }}
               color="green"
              />
    </SafeAreaView>
  );
}

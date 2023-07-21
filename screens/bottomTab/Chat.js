import { SafeAreaView,ScrollView,StyleSheet, Text, View } from 'react-native';
import useFetch from '../../api/getColors';
import {useEffect,useState} from 'react';
import { FAB ,Dialog, ListItem } from '@rneui/themed';
import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';


export default function Chat() {

  const {data,error,isLoading} = useFetch();
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20,};

  console.log(data)
  return (
    <>
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
       onPress={showModal}
        placement="right"
        title="+ Add"
        // icon={{ name: 'edit', color: 'white' }}
        color="green"
      />



    </SafeAreaView>

    </>
  );
}

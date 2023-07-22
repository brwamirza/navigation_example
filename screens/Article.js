import { SafeAreaView,StyleSheet, Text, View,ScrollView } from 'react-native';
import { useSelector} from 'react-redux';
import { Dialog, ListItem } from '@rneui/themed';

export default function Article() {
const {color} = useSelector(state=> state.colorReducer);
console.log(color)

  return (
    <SafeAreaView>
      <ScrollView>
      {(color)?color.map((colorItem)=>{
          return <ListItem bottomDivider>
                    <ListItem.Content>
                      <ListItem.Title>{colorItem.color_id}</ListItem.Title>
                      <ListItem.Subtitle>EN: {colorItem.color_en}</ListItem.Subtitle>
                      <ListItem.Subtitle>KU: {colorItem.color_ku}</ListItem.Subtitle>
                      <ListItem.Subtitle>AR: {colorItem.color_ar}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
        }) : <Text>No data</Text>}
      </ScrollView>
    </SafeAreaView>
  );
}
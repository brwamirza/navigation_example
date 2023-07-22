import { Alert, SafeAreaView,StyleSheet, Text, View } from 'react-native';
import { TextInput,Button  } from 'react-native-paper';
import { useState } from 'react';

import addColor from '../api/addColor.service';

export default function AddColor() {
    
    //1- edit each item
    //2-delete each item

    const [colorEN, setColorEN] = useState("");
    const [colorAR, setColorAR] = useState("");
    const [colorKR, setColorKR] = useState("");
    
    const{data,error,sendData} = addColor();

    const submitData =()=> {
        let newData = {
            color_ku:colorKR,
            color_en:colorEN,
            color_ar:colorAR
        }
        if (colorKR !=="" && colorAR !=="" && colorEN!==""){
            sendData(newData);
            if(data){
                Alert.alert(`Data submited ${data}`)
            }
            if(error){
                Alert.alert(`${error}`)
            }
        }
    }

  return (
    <SafeAreaView>
        <Text >Color EN</Text>
        <TextInput
            label="en"
            value={colorEN}
            onChangeText={text => setColorEN(text)}
        />

        <Text>Color AR</Text>
        <TextInput
            label="ar"
            value={colorAR}
            onChangeText={text => setColorAR(text)}
        />

        <Text>Color KR</Text>
        <TextInput
            label="kr"
            value={colorKR}
            onChangeText={text => setColorKR(text)}
        />
        <Button icon="camera" mode="contained" onPress={() => submitData()}>
            Add Color
        </Button>
    </SafeAreaView>
  );
}
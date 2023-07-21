import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

export default function AddColor() {
    const [colorEN, setColorEN] = useState("");
    const [colorAR, setColorAR] = useState("");
    const [colorKR, setColorKR] = useState("");


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
    </SafeAreaView>
  );
}
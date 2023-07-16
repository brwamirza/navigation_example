import { SafeAreaView,StyleSheet, Text, View, Button } from 'react-native';
import { useEffect,useState } from 'react';

export default function Home({updateCount}) {

  //only works when page loads first time
  // useEffect(()=>{
  //   console.log("use effect worked");
  // },[])  
  // console.log(count)

 //only works when page loads first time



  return (
    <SafeAreaView>
        <Button title='increase' onPress={()=>updateCount()}/>
    </SafeAreaView>
  );
}
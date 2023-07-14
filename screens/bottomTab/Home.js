import { SafeAreaView,StyleSheet, Text, View, Button } from 'react-native';
import { useEffect,useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  //only works when page loads first time
  // useEffect(()=>{
  //   console.log("use effect worked");
  // },[])  

  useEffect(()=>{
    console.log("use effect worked");
  },[])  //only works when page loads first time

  return (
    <SafeAreaView>
        <Button title='increase' onPress={()=>setCount(count+1)}/>
    </SafeAreaView>
  );
}
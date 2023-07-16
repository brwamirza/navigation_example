import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import useFetch from '../../api/getColors';

export default function Chat() {

  const {data,error,isLoading} = useFetch();

  console.log(data)
  return (
    <SafeAreaView>
        <Text>CRUD APP</Text>
    </SafeAreaView>
  );
}
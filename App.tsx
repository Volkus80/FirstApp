import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Rout } from './routes/MainRout';
import { AuthProvider } from './hoc/AuthProvider';
// import YaMap from 'react-native-yamap';
import axios from 'axios';
import { URL } from './constants/constants';


// YaMap.init('b8a8bbf9-00ec-43e7-92d0-b083087a40b5');
axios.defaults.baseURL = URL;
export default function App() {
  // YaMap.init('b8a8bbf9-00ec-43e7-92d0-b083087a40b5');
  return (
    <AuthProvider>
      <Rout />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

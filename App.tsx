import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Rout } from './routes/MainRout';
import { AuthProvider } from './hoc/AuthProvider';

export default function App() {
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

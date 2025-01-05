import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
   <PaperProvider>
      <ScrollView>
           <Login/>
      </ScrollView>



   </PaperProvider>
   
    
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

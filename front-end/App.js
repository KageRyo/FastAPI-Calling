import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View, Keyboard } from 'react-native';

const onButtonPress = () => {
  console.log('submit: ');
  Keyboard.dismiss();
}


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <TextInput style={styles.input}/>
      <Button title="送出" style={styles.btn} onPress={() => onButtonPress()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
});

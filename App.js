import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Source/Navigation/Navigation';
export default function App() {
  return (
    <View style={styles.container}>
     <Navigation/>
      <StatusBar style="inverted"  translucent={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

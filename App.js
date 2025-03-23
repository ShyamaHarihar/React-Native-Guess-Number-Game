import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';
import Colors from '../constants/Colors';
export default function App() {
  //by default display startgamescreen
  //if confirm is pressed, go to gamescreen
  const [userNumber, setUserNumber] = useState();
  function pickedNumberHandler(pickednumber) {
    setUserNumber(pickednumber)
  }
  //pickedNumberHanlder to be executed from inside of StartGameScreen via props
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen />
  }
  return (
    <SafeAreaView style={styles.rootContainer}>
      {screen}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.accent500
  }
})



import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  //by default display startgamescreen
  //if confirm is pressed, go to gamescreen
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  function gameOverHandler(numberofRounds) {
    setGameOver(true);
    setGuessRounds(numberofRounds);
  }
  function pickedNumberHandler(pickednumber) {
    setUserNumber(pickednumber)
    setGameOver(false);
  }
  function onStartNewGame() {
    setUserNumber(null);
    setGuessRounds(0);
  }
  //pickedNumberHanlder to be executed from inside of StartGameScreen via props
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;


  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }
  if (gameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={onStartNewGame} />
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
    //backgroundColor: Colors.accent500
  }
})



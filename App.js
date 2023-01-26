import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameSreen';

export default function App() {
  const [loaded] = useFonts({
    SatisfyRegular: require("./src/assets/fonts/Satisfy-Regular.ttf"),
  })
  const [userNumber, setuserNumber] = useState()

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />

  if (userNumber && winOrLose === true) {
    content = <ResultScreen result={result} />
  } else if (userNumber) {
    content = <GameScreen handleResult={handleFinishGame} />
  }

  if (!loaded) {
    return null
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header
      title={"Guess the Number"}
      newStyles={{fontFamily: "SatisfyRegular"}}/>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

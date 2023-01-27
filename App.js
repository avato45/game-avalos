import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameSreen';
import GameScreen from './src/screens/GameScreen';

export default function App() {
  const [loaded] = useFonts({
    SatisfyRegular: require("./src/assets/fonts/Satisfy-Regular.ttf"),
  })
  const [userNumber, setUserNumber] = useState()

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />

  if (userNumber) {
    content = <GameScreen />
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
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

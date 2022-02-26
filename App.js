import { useState } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setuserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const startGameHandler = (selectedNumber) => {
    setuserNumber(selectedNumber);
  }
  const configNewGame = () => {
    setGuessRounds(0)
    setuserNumber(null)
  }
  const gameOverHandler = numofRounds => {
    setGuessRounds(numofRounds)
  }
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen
      userNumber={userNumber}
      roundNumber={guessRounds}
      onRestart={configNewGame}
    />
  }
  return (
    <View>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 }
});

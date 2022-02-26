import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Alert,
  Button,
  StyleSheet,
  View,
} from 'react-native';

import Card from '../components/Card';
import Number from '../components/Number';

const generateNumber = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateNumber(min, max, exclude)
    } else {
        return randomNumber;
    }
}
const GameScreen = props => {

    const [guessNumber, setGuessNumber] = useState(
        generateNumber(1, 100, userChoice)
    )
    const currentLower = useRef(1)
    const currentHigh = useRef(100)
    const [rounds, setRounds] = useState(0)
    const {userChoice, onGameOver}  = props;
    useEffect(()=>{
        if(guessNumber === userChoice) {
            onGameOver(rounds)
        }
    },[guessNumber, userChoice, onGameOver]);
    const nextGuessNumberHandler = direction => {
        if ((direction === 'lower' && guessNumber < userChoice) ||
            (direction === 'greater' && guessNumber > userChoice)) {
            Alert.alert('Don\'t lie', 'You know that this is wrong...',
                [{ text: 'Sorry!', style: 'cancel' }])
            return;
        }
        if(direction === 'lower') {
            currentHigh.current = guessNumber
        } else {
            currentLower.current = guessNumber
        }
        const nexNumber = generateNumber(currentLower.current, currentHigh.current, guessNumber)
        setGuessNumber(nexNumber)
        setRounds(curRounds => curRounds + 1)
    }
    return (
        <View style={styles.screen}>
            <Number>{guessNumber}</Number>
            <Card style={styles.buttonContainer}>
                <View style={styles.button}><Button title='LOWER'
                    onPress={nextGuessNumberHandler.bind(this, 'lower')}
                    color='grey' /></View>
                <View style={styles.button}><Button title='GREATER'
                    onPress={nextGuessNumberHandler.bind(this, 'greater')}
                    color='grey' /></View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '80%',
    },
    button: {
        width: 100,
        borderRadius: 10
    }
})
export default GameScreen

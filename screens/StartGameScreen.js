import React, { useState } from 'react';

import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';

import Card from '../components/Card';
import Input from '../components/Input';
import Number from '../components/Number';
import colors from '../constant/colors';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }
    const resetInputHandler =()=> {
        setEnteredValue('')
        setConfirmed(false)
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', 
            [{text:'Okay',style:'destructive',onPress:resetInputHandler}])
            return; 
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }
     
    let confirmOutput;
    if(confirmed) {
        confirmOutput = 
        <Card style={styles.numberContainer}>
            <Text>You Selected</Text>
            <Number>{selectedNumber}</Number>
            <Button title='START GAME' color={colors.primary} onPress={()=>{ props.onStartGame(selectedNumber)}} />
        </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input}
                        blurOnSubmit autoCapitalize="none"
                        autoCorrect={false} keyboardType='number-pad'
                        maxLength={2} value={enteredValue} onChangeText={numberInputHandler} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title='Reset' onPress={resetInputHandler} color={colors.accent} /></View>
                        <View style={styles.button}><Button title='Confirm' onPress={confirmInputHandler} color={colors.primary} /></View>
                    </View>
                </Card>
                {confirmOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 20,
        marginVertical: 20
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 10
    },
    button: {
        width: 100,
        borderRadius: 10
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    numberContainer:{
        marginTop:20,
        alignItems:'center'
    }
})

export default StartGameScreen

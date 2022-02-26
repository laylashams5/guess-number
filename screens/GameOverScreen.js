import React from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Card from '../components/Card';
import colors from '../constant/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Text>The Game is Over!</Text>
                <Text>Number of rounds: {props.roundNumber}</Text>
                <Text>Number was: {props.userNumber}</Text>
                    
                <View style={styles.button}>
                    <Button title='NEW GAME' onPress={props.onRestart} color={colors.primary}/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        padding:20
    },
    card: {
        alignItems:'center',
        justifyContent:'center',
        width:'80%',
    },
    button: {
        width: 100,
        borderRadius: 10,
        marginVertical:20
    }
})
export default GameOverScreen

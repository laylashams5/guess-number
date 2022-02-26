import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import colors from '../constant/colors';

const Number = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderWidth:2,
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center',
        borderColor:colors.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10
    },
    number :{
        color:colors.accent,
        fontSize:22
    }
})
export default Number

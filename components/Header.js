import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import colors from '../constant/colors';

const Header = props=> {
  return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
        color:'#333333',
        fontSize:18
    }
})
export default Header

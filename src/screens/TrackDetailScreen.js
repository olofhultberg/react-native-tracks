import React, { useContext, useEffect } from 'react';
import {View, Text, StyleSheet } from 'react-native';

const TrackDetailScreen = ({navigation}) =>{
    
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <View >
         <Text style={styles.text}>TrackDetails</Text>  
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:48
    }
})

export default TrackDetailScreen
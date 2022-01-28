import React, { useContext, useEffect } from 'react';
import {View,TextInput, Text, StyleSheet,TouchableWithoutFeedback, Button } from 'react-native';
import {Keyboard} from 'react-native'

const TrackListScreen = ({navigation}) =>{

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    })

    //Keyboard.dismiss()
    return (
        <View style={{flex:1}}>
         <Text style={styles.text}>TrackList</Text>  
         <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
             <TextInput style={styles.input} showSoftInputOnFocus={true} keyboardType='numeric'/>
         </TouchableWithoutFeedback>
         <Button title='Go to track detail' onPress={()=>{ navigation.navigate('TrackDetail')}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:48
    },
    input:{
        borderColor: 'black',
        borderWidth: 2
    }
})

export default TrackListScreen
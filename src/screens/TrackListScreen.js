import React, { useContext, useEffect } from 'react';
import {View,FlatList, Text, StyleSheet,ActivityIndicator, TouchableOpacity, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';


const TrackListScreen = ({navigation}) =>{

    const { state, fetchTracks } = useContext(TrackContext);

    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', ()=>{
            fetchTracks();
        })
        return () => unsubscribe();
    },[])

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    })

    if (!state){
        return <ActivityIndicator size="large" style={{ marginTop: 200 }}/>; 
    }

    //Keyboard.dismiss()
    return (
        <View style={{flex:1}}>
        
        <FlatList
            data={state}
            keyExtractor={(item)=>item._id}
            renderItem={({item})=> {
                return (
                <TouchableOpacity onPress={()=>navigation.navigate('TrackDetail', { _id: item._id})}>
                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </TouchableOpacity>
                )
            }}

        />
        
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:32
    },
    input:{
        borderColor: 'black',
        borderWidth: 2
    }
})

export default TrackListScreen
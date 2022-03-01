import React, { useContext, useEffect } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, {Polyline } from 'react-native-maps';

const TrackDetailScreen = ({navigation, route}) =>{
    const { _id } = route.params
    const { state } = useContext(TrackContext);

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: true
        })
    })

    const track = state.find(t => t._id === _id)
    const initialCoords = track.locations[0].coords;

    return (
        <View>
         <Text style={styles.text}>{ track.name }</Text>  
         <MapView 
            initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01,
                ...initialCoords
            }}
            style={styles.map}
         >
             <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
         </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 32
    },
    map: {
        height: 300
    }
})

export default TrackDetailScreen
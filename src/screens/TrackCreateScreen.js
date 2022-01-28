import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Map from '../components/Map';
import {Text} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as LocationContext } from '../context/LocationContext';
import '../_mockLocations';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';

const TrackCreateScreen = ({navigation}) =>{
    const { addLocation } = useContext(LocationContext);    
    const isFocused = useIsFocused();

    console.log(isFocused)

    const [err] = useLocation((location)=>{
        addLocation(isFocused, location)
    })
 
    React.useLayoutEffect(()=>{
        navigation.setOptions({
         headerShown: false
        })
    })
      

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h3>Create a Track</Text>  
            <Map/>
            { err ? <Text>Please enable location services</Text>: null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:48
    }
})

export default TrackCreateScreen
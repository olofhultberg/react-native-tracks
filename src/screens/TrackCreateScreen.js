import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Map from '../components/Map';
import {Text} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as LocationContext } from '../context/LocationContext';
//import '../_mockLocations';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({navigation }) =>{
    const { state: {recording }, addLocation } = useContext(LocationContext);    
    const isFocused = useIsFocused();

    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording])

    const [err] = useLocation(isFocused || recording ,callback)
 
    React.useLayoutEffect(()=>{
        navigation.setOptions({
         headerShown: false,
        })
    })
      

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h3>Create a Track</Text>  
            <Map/>
            { err ? <Text>Please enable location services</Text>: null}
            <TrackForm/>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    text:{
        fontSize:48
    }
})

export default TrackCreateScreen
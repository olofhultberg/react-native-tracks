import  { useState, useEffect } from 'react';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack , callback)=>{
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);


    const startWatching = async ()=>{
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            if(!granted){
                throw new Error('Location permission not granted');
            }
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distance: 10
            },
                callback
            );
            setSubscriber(sub);
        } catch (error) {
            setErr(error)
        }
    }

    useEffect(()=>{
        // if (shouldTrack){
        //     console.log('Should START tracking..')
        //     startWatching()
        // }else{
        //     console.log('Should STOP tracking..')
        //     subscriber.remove();
        //     setSubscriber(null);
        // }
        console.log('Should START tracking..')
        startWatching()
    },[])

    return [err];

};
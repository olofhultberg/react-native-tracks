import  { useState, useEffect } from 'react';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack , callback)=>{
    const [err, setErr] = useState(null);
      

    useEffect(()=>{
        let subscriber
        const startWatching = async ()=>{
            try {
                const { granted } = await requestForegroundPermissionsAsync();
                if(!granted){
                    throw new Error('Location permission not granted');
                }
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distance: 10
                },
                    callback
                );
            } catch (error) {
                setErr(error)
            }
        }

        if (shouldTrack){
            startWatching()
        }else{
            if (subscriber){
                subscriber.remove();
            }
            subscriber = null;
        }

        return ()=>{
            if (subscriber){
                subscriber.remove();
            }
        }
    },[shouldTrack, callback])

    return [err];

};
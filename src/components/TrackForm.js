import React, { useContext } from 'react';
import {Input, Button} from 'react-native-elements';
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm =()=>{

    const { startRecording, 
        stopRecording,
        changeName,
        state: { name, recording, locations }
     } = useContext(LocationContext);

     const [saveTrack] = useSaveTrack();

     console.log(locations.length)

    return(
        <>
            <Spacer>
               <Input placeholder='Enter name' onChangeText={changeName} value={name}/>
               </Spacer>
               <Spacer>
                {recording 
                ?  <Button title='Stop' onPress={stopRecording}/>
                :  <Button title='Start recording' onPress={startRecording}/>
                }
            </Spacer>
            <Spacer>
                {
                    !recording && locations.length 
                    ? <Button title='Save recording' onPress={saveTrack}/>
                    : null
                }
            </Spacer>
        </>
    )
}

export default TrackForm;
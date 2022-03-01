import React, {useState}  from 'react';
import {View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ errorMessage, headerText, onSubmit, buttonTitle})=>{
    
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('myPassword01');

    return (
       <>
         <Spacer>
        <Text h3>{headerText} Tracker ®</Text> 
        <Text p>powered by React Native and Zebra Technologies ©</Text> 
            </Spacer>
            <Spacer/>
            <Input label='Email' autoCapitalize="none" autoCorrect={false} value={email} onChangeText={setEmail}/>
            <Spacer/>
            <Input label='Password' autoCapitalize="none" autoCorrect={false} secureTextEntry value={password} onChangeText={setPassword}/>
            { errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={buttonTitle} onPress={()=> onSubmit({email,password})}/>
            </Spacer>
       </>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:48
    },
    container: {
        
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15
    },
    link: {
        color: 'blue'
    }
})

export default AuthForm;
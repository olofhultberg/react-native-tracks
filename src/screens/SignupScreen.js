import React, { useContext, useState} from 'react';
import {View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/navLink'

const SignupScreen = ({navigation, route}) =>{
    const {state, signUp,clearErrorMessage} = useContext(AuthContext);
  
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            clearErrorMessage()
        });    
        return unsubscribe;
      }, [navigation]);

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    })

    

       return (
        <View style={styles.container}>
            <AuthForm
                headerText='Sign up for'
                errorMessage={state.errorMessage}
                buttonTitle='Sign up'
                onSubmit={({email, password})=> signUp({ email, password})}
            />
            <NavLink 
                target='Signin'
                linkText='Already have an account? - sign in instead!'
            />
            
        </View>
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

export default SignupScreen
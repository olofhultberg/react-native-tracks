import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import {View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/navLink'

const SigninScreen = ({navigation}) =>{
    const {state, signIn, clearErrorMessage, tryLocalSignIn } = useContext(AuthContext);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {clearErrorMessage()
        });
        return unsubscribe;
    }, [navigation]);

    React.useEffect(()=>{
        tryLocalSignIn()
    },[])

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    })


    return (
        <View style={styles.container}>
            <AuthForm
                headerText='Sign in to your account'
                errorMessage={state.errorMessage}
                onSubmit={({email, password})=>signIn({email, password})}
                buttonTitle='Sign in'
            />
            <NavLink 
                    target='Signup'
                    linkText='No account? - sign up instead!'
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },
    text:{
        fontSize:48
    }
})

export default SigninScreen
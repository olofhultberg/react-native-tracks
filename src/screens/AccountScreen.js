import React, { useContext } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AccountScreen = ({navigation}) =>{
    const {signOut} = useContext(AuthContext);

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <View >
            <Spacer>
                <Text style={styles.text}>Account</Text>  
                <Button title="Log out" onPress={signOut}/>
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:48
    }
})

export default AccountScreen
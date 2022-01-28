import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Spacer from '../components/Spacer';
import { useNavigation } from '@react-navigation/native';

const NavLink = ({linkText, target })=>{

    const navigation = useNavigation();

    return (
        <>
        <Spacer>
            <TouchableOpacity onPress={()=> navigation.navigate(target)}>
                <Text style={styles.link}>{linkText}</Text>
            </TouchableOpacity>
        </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'darkblue'
    }
})

export default NavLink;
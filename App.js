import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Context as AuthContext } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { Foundation, Entypo } from '@expo/vector-icons'; 


//Screens
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

import { StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function Home(){

  return(
    <Bottom.Navigator>
      <Bottom.Screen name="List" component={TrackListScreen} 
        options={{tabBarIcon: ()=> <Entypo name="list" size={20} color="black" />}}
      />
      <Bottom.Screen name="Create" component={TrackCreateScreen} 
        options={{tabBarIcon: ()=> <Entypo name="new-message" size={20} color="black" />}}
      />
      <Bottom.Screen name="Account" component={AccountScreen}  
      options={
        {tabBarIcon: ()=> <Entypo name="user" size={20} color="black" />}
      }
      />
    </Bottom.Navigator>
  )
}

function App() {

  const {state} = useContext(AuthContext);
  
  return (
     <NavigationContainer>
        <Stack.Navigator>
          {state.token ?
            <>
              <Stack.Screen name="Tracks" component={Home} />
              <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
            </>
            :
            <>
              <Stack.Screen name="Signin" component={SigninScreen}  />
              <Stack.Screen name="Signup" component={SignupScreen} />
            </>
          
          }
          
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
};
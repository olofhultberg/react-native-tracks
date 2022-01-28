import createDataContext from './createDataContext';
import trackerApi from '../api/trackerApi';
import AsyncStorage from '@react-native-async-storage/async-storage';


const authReducer = (state, action) =>{
    //state === {}
    // action === { type: 'signin' || 'signout' }

    switch (action.type){
        case 'sign_in':
            return {token: action.payload, errorMessage: ''}
        case 'sign_out':
            return {...state, token: '', errorMessage: ''}
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        default:
            return state;
    }
};

const tryLocalSignIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token){
        dispatch({ type: 'sign_in', payload: token })
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message'})
}

const signUp = dispatch => async ({email, password})=>{
    try {
        const response = await trackerApi.post('/signup', {email, password})    
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'sign_in', payload: response.data.token})
    } catch (error) {
        dispatch({ type: 'add_error', payload: 'Something went wrong 😩, detailed message: ' + error.response.data})
    }    
}


const signIn =  (dispatch)=> async ({email, password})=>{
    try {
        const response = await trackerApi.post('/signin', {email, password})    
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'sign_in', payload: response.data.token})
    } catch (error) {
        dispatch({ type: 'add_error', payload: 'Something went wrong 😩, detailed message: ' + error.response.data})
    }
}


const signOut = (dispatch)=>{
    return async ()=>{
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'sign_out'});
    }
}


export const { Context, Provider } = createDataContext(
    authReducer,
    { signIn, signOut, signUp, clearErrorMessage, tryLocalSignIn },
    {token: null, errorMessage: ''}
    );

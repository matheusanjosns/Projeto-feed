import React ,{useEffect} from 'react';
import { Image } from 'react-native';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';



export default () =>{
    const navigation = useNavigation();

    useEffect(()=> {
        const checkToken= async () =>{
            const token = await AsyncStorage.getItem('token');
            if(token){
                //validar token
            }else {
                navigation.navigate('Login');
            }
    }
    checkToken();
}, []);

return (
        <Container>          
                <Image 
                 source={require('../../src/instagram-icons/Load.png')}
                  style={{ width: 200 , height: 200 }}
           /> 
                 <LoadingIcon size="large" color="#000" />
        </Container >
    )
}

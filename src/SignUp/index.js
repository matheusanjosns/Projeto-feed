import React , {useState} from 'react';
import {AsyncStorage, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Container ,
    InputArea, 
    CustomButton, 
    CustomButtonText,
    SignMessagenButtonText, 
    SignMessagenButton,
    SignMessagenButtonTextBold} from './styles';

import SignInput from '../../src/components/SignInput/SignInput';
import axios from 'axios';


export default () => {

    const navigation = useNavigation();
    
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [nameField, setNameField] = useState('');

    const handleSignClick = async() => {
        if(emailField && passwordField){
            axios.post('https://5fab2dfedbbef70016d482c9.mockapi.io/api/v1/Modelos',{
            name: `${nameField}`,
            email: `${emailField}`,
            senha:`${passwordField}`
            })
            navigation.reset({routes: [{name: 'Feed'}]});
        }else {
            alert('Preencha os campos')
        }

 }
    const handleMessageButtonClick = () => {
        navigation.reset({routes: [{name:'Login'}]});
    }   
    return (
        <Container>
            <Image source={require('../../src/instagram-icons/instaName.png')}
             style={{ width: 250 , height: 250 }}
           /> 

            <InputArea>
            <SignInput 
                placeholder="Digite seu Nome" 
                value={nameField}
                onChangeText={t=> setNameField(t)}
                />

                <SignInput 
                placeholder="Digite seu e-mail"
                value={emailField}
                onChangeText={t=> setEmailField(t)}
                />

                <SignInput 
                placeholder="Digite sua Senha" 
                value={passwordField}
                onChangeText={t=> setPasswordField(t)}
                password={true}
                />
                
                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText >Crie sua Conta</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessagenButton onPress={handleMessageButtonClick}>
                <SignMessagenButtonText>Já possui uma conta?</SignMessagenButtonText>
                <SignMessagenButtonTextBold>Faça Login</SignMessagenButtonTextBold>
            </SignMessagenButton>
        </Container>
    )
}

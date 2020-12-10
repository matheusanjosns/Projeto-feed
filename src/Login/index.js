import React , {useState} from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Container ,
    InputArea, 
    CustomButton, 
    CustomButtonText,
    SignMessagenButtonText, 
    SignMessagenButton,
    SignMessagenButtonTextBold} from './styles';

import SignInput from '../../src/components/SignInput/SignInput';
import axios from "axios"

export default () => {
    const navigation = useNavigation();
    
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        const response = await axios.get('https://5fab2dfedbbef70016d482c9.mockapi.io/api/v1/Modelos')
        let user = response.data.find((user) => user.email === `${emailField}` );
        let password = response.data.find((user) => user.senha === `${passwordField}`);
        if(user && password) {
         navigation.reset({routes: [{name: 'Feed'}]});
        }else {
            alert("Usário e senha incorreta")
        }
    }

    const handleMessageButtonClick = () => {
       navigation.reset ({
           routes:[{name: 'SignUp'}]
       });

    }
    return (
        <Container>
            <Image source={require('../instagram-icons/instaName.png')}
             style={{ width: 250 , height: 250 }}
           /> 
            <InputArea>
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
                    <CustomButtonText > LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessagenButton onPress={handleMessageButtonClick}>
                <SignMessagenButtonText>Ainda não possui uma conta?</SignMessagenButtonText>
                <SignMessagenButtonTextBold>Cadastre-se</SignMessagenButtonTextBold>
            </SignMessagenButton>
        </Container>
    )
}
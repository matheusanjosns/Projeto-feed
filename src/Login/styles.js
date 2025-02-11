import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex:2 ;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    padding: 40px;
    width: 100%;
    `;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #E36BA5;
    border-radius:30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF; 
`;

export const SignMessagenButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;
export const SignMessagenButtonText= styled.Text`
    font-size: 16px;
    color: #1C1C1C;
`;
export const SignMessagenButtonTextBold = styled.Text`
    font-size: 16px;
    color: #1C1C1C;
    font-weight: bold;
    margin-left: 5px;
`;
 
import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #A4A4A4;
    flex-direction: row;
    border-radius: 10px;
    paddingHorizontal: 10px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size:16px;
    color:#000;
    margin-left: 10px;
    `;
export default ({placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
           <Input 
            placeholder={placeholder}
            placeholderTextColor="#1C1C1C"
            value={value}
            onChangeText= {onChangeText}
            secureTextEntry={password}
           />
        </InputArea>
    );
}
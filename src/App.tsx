import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';
import InputField from './components/InputField';

interface AppProps {
    test?:string
}



const MainForm = styled.div`
    width:30%;
    height:80%;
    border-radius:10px;
    background-color:rgba(255,255,255, 0.05);
    padding:1em;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
`;

const AppTitle = styled.div`
    width:100%;
    text-align: center;
    color:white;
    font: 1.7em Montserrat;
`;


const FreqContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
    width:100%;
`

const FreqDisplay = styled.p`
    color: white;
    font: 1.3em Montserrat;
    margin:0;
    margin-left: 2em;
    padding:0;
`;




function App({}: AppProps) {

    const [frequency, setFrequency] = useState<number>(0);


    function FreqKeyInputHandler(event: React.KeyboardEvent<HTMLInputElement>):void {
        const AllowedKeys = ['Backspace', 'Alt', 'Control', 'ArrowLeft', 'ArrowRight'];
        if (parseInt(event.key) == NaN && !AllowedKeys.includes(event.key))
            event.preventDefault();
    }



    return (
        <MainForm>
            <AppTitle>WebRTC digital radio</AppTitle>
            <FreqContainer>
                <InputField 
                    onChange={(event) => {
                        let value = (!parseInt(event.target.value)?0:parseInt(event.target.value))
                        if (value > 1000) {
                            value = 1000;
                            event.target.value = '1000';
                        }
                        setFrequency(value);
                    }} 
                    onKeyDown={FreqKeyInputHandler} 
                />
                <FreqDisplay>{frequency} Hz</FreqDisplay>
            </FreqContainer>
        </MainForm>
    )
}

export default App;

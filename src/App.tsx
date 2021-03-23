import React from 'react';
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
    flex-direction:row;
    width:100%;
`



function App({}: AppProps) {

    return (
        <MainForm>
            <AppTitle>WebRTC digital radio</AppTitle>
            <FreqContainer>
                <InputField />
                <div>1Hz</div>
            </FreqContainer>
        </MainForm>
    )
}

export default App;

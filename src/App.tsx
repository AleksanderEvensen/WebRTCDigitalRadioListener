import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';


var toneColor = function(color:string, percent:number):string {
    if(color.startsWith('#'))
        color = color.replace('#','');
    var num = parseInt(color,16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      B = (num >> 8 & 0x00FF) + amt,
      G = (num & 0x0000FF) + amt;

      return '#'+(0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
};




interface AppProps {
    test?:string
}



const MainForm = styled.div`
    width:fit-content;
    height:fit-content;
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
    margin: 1em 0px;
`;


const HorizontalContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
    width:100%;
    margin: 0.5em 0px;
`

const FreqDisplay = styled.p`
    color: white;
    font: 1.3em Montserrat;
    margin:0;
    margin-left: 2em;
    padding:0;
`;


const InputField = styled.input`
    background-color:#FFF;
    padding:0.4em;
    border-radius: 0.5em;
    outline:none;
    border:none;
    :focus {
        outline:none;
    }
`;

interface IButtonProps {
    bgColor?:string
    fgColor?:string
    font?:string
}


const Button = styled.button<IButtonProps>`
    transition:0.3s;
    background-color: ${p => p?.bgColor || '#FFF'};
    color: ${p => p?.fgColor || '#000'};
    padding:0.4em;
    margin: 0 0.3em;
    border-radius: 0.3em;
    outline:none;
    border:none;
    font: ${p => p?.font || '0.8em Montserrat'};
    :focus {
        outline:none;
    }
    :disabled {
        background-color: ${p => toneColor(p?.bgColor || '#FFF', -20)};
        color: ${p => toneColor(p?.fgColor || '#000', -20)};
    }

    :hover:disabled {
        cursor: no-drop;
    }

    :hover:enabled {
        background-color: ${p => toneColor(p?.bgColor || '#FFF', 10)};
    }

    :active:enabled {
        background-color: ${p => p?.bgColor || '#FFF'};
        color: ${p => p?.fgColor || '#000'};
    }


`;




function App({}: AppProps) {

    const [frequency, setFrequency] = useState<number>(0);
    const [connection, setConnection] = useState<number>(0);

    function FreqKeyInputHandler(event: React.KeyboardEvent<HTMLInputElement>):void {
        const AllowedKeys = ['Backspace', 'Alt', 'Control', 'ArrowLeft', 'ArrowRight'];
        if (parseInt(event.key) == NaN && !AllowedKeys.includes(event.key))
            event.preventDefault();
    }



    return (
        <MainForm>
            <AppTitle>WebRTC digital radio</AppTitle>
            <HorizontalContainer>
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
                <FreqDisplay>{connection} Hz</FreqDisplay>
            </HorizontalContainer>
            <HorizontalContainer>
               <Button disabled={connection > 0} bgColor="#2ecc71">Connect</Button> 
               <Button disabled={connection <= 0} bgColor="#e74c3c">Disconnect</Button> 
            </HorizontalContainer>
        </MainForm>
    )
}

export default App;

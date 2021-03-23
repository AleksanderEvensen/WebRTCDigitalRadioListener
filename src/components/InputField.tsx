import React from 'react';
import styled from 'styled-components';

interface IInputFieldProps {
    onChange?:React.ChangeEventHandler<HTMLInputElement>;
    onKeyDown?:React.KeyboardEventHandler<HTMLInputElement>;
}



const MyInput = styled.input`
    background-color:#FFF;
    padding:0.4em;
    border-radius: 0.5em;
    outline:none;
    border:none;
    :focus {
        outline:none;
    }
`

const InputField = (props:IInputFieldProps) => {
    return (
        <MyInput type="text" onChange={props.onChange} onKeyDown={props.onKeyDown} />
    )
}

export default InputField;
import React from 'react';
import {toneUp} from "../utilis/notes.utils";

function ToneUpButton(props) {
    console.log(props.keyboardRow);
    return (
        <button onClick={()=>{
            for (let keyboardKey in props.keyboardRow){
                props.keyboardRow[keyboardKey] = toneUp(props.keyboardRow[keyboardKey])
            }}}
            >Tone Up</button>
    )
}

export default ToneUpButton;


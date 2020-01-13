import React from 'react';
import Tone from "tone";

const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

function WhiteButton(props) {
    console.log(props);
    return (
        <button
            className="whiteButton"
            onTouchStart={() => synth.triggerAttack(props.note)}
            onTouchEnd={()=>synth.triggerRelease()}
            onMouseDown={() => synth.triggerAttack(props.note)}
            onMouseUp={()=>synth.triggerRelease()}
        >
            <p>{props.keyboardKey}</p>
            <p>{props.note}</p>
        </button>
    );
}

export default WhiteButton;
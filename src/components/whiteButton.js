import React from 'react';
import Tone from "tone";

const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

function log() {

    synth.triggerAttackRelease("C4", "1n");
}

document.addEventListener("keydown", e => {
    switch (e.key) {
        case "z":
            return synth.triggerAttack("C4", "1n");
        default:
            return;
    }
});


function WhiteButton() {
    return (
        <button className="whiteButton" onKeyDown={log}>
            button
        </button>
    );
}

export default WhiteButton;
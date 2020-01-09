import React, {useEffect} from 'react';
import './App.css';
import WhiteButton from "./components/whiteButton";
import Tone from "tone";

const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

let listener = e => {
    let note = notes[e.key]

    if(note !== undefined){
        synth.triggerAttack(note);
    }
}

document.addEventListener("keydown", listener);

document.addEventListener("keyup", e => {
    let note = notes[e.key];

    if(note !== undefined){
        synth.triggerRelease();
    }
});

let notes = {
    z: 'C4',
    x: 'C#4',
    c: 'D4',
    v: 'D#4',
    b: 'E4',
    n: 'F4',
    m: 'F#4',
    ",": 'G4',
    ".": 'G#4',
    "/": 'A4'
}

function App() {
    let buttons = [];
    for (let key in notes) {
        buttons.push(<WhiteButton key={key} keyboardKey={key} note={notes[key]}/>)
    }

    return (
        <div className="App">
            {buttons}
        </div>
    );
}

export default App;

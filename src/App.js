import React from 'react';
import './App.css';
import WhiteButton from "./components/whiteButton";
import Tone from "tone";
import ToneUpButton from './components/ToneUpButton.js';
import ToneDownButton from "./components/ToneDownButton";

const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

const loop = new Tone.Loop(function(time){
    synth.triggerAttackRelease("C2", "8n", time);
    loop.start("1m").stop("4m");
}, "4n");

let listener = e => {
    let note;
    for(let i = 0; i<arr.length; i++){
        note = arr[i][e.key];
        if (note !== undefined){
            break;
        }
    }

    if(note !== undefined){
        synth.triggerAttack(note);
        //Tone.Transport.start(note);
    }
};

document.addEventListener("keydown", listener);

document.addEventListener("keyup", e => {
    let note;
    for(let i = 0; i<arr.length; i++){
        note = arr[i][e.key];
        if (note !== undefined){
            break;
        }
    }

    if(note !== undefined){
        synth.triggerRelease();
    }
});

let arr = [
    {
        z: 'C4',
        x: 'C#4',
        c: 'D4',
        v: 'D#4',
        b: 'E4',
        n: 'F4',
        m: 'F#4',
        ",": 'G4',
        ".": 'G#4',
        "/": 'A4',
    },
    {
        a: 'C5',
        s: 'C#5',
        d: 'D5',
        f: 'D#5',
        g: 'E5',
        h: 'F5',
        j: 'F#5',
        k: 'G5',
        l: 'G#5',
        ';': 'A5',
        '\'': 'A#5',
    },
    {
        q: 'C6',
        w: 'C#6',
        e: 'D6',
        r: 'D#6',
        t: 'E6',
        y: 'F6',
        u: 'F#6',
        i: 'G6',
        o: 'G#6',
        p: 'A6',
        '[': 'A#6',
        ']': 'C7'
    },
    {
        1: 'C7',
        2: 'C#7',
        3: 'D7',
        4: 'D#7',
        5: 'E7',
        6: 'F7',
        7: 'F#7',
        8: 'G7',
        9: 'G#7',
        0: 'A7',
        '-': 'A#7',
        '=': 'C8',
    }
];

arr.reverse();

function App() {
    let buttons = [];

    for (let i = 0; i< arr.length; i++) {
        let row = [];
        for (let key in arr[i]) {
            row.push(<WhiteButton key={key} keyboardKey={key} note={arr[i][key]}/>)
        }
        buttons.push(row);
    }

    return (
        <div className="App">
            {buttons.map((whiteButtonsRow, index) => {
                return <div className="row" key={index}>
                    <ToneDownButton/>
                    {whiteButtonsRow}
                    <ToneUpButton keyboardRow={arr[index]}/>
                </div>
            })}
        </div>
    );
}

export default App;

 export function toneUp(noteString) {
    const examples = ['C', "C#", 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const inputOctave = noteString[noteString.length-1];
    const inputNote = noteString.slice(0, noteString.length-1);

    if (inputNote === 'B'){
        return examples[0]+(Number(inputOctave)+1);
    }

    let index = examples.indexOf(inputNote);

    return examples[index+1]+inputOctave;
}

console.log(toneUp('C#4'));

export function toneDown(noteString) {
    const examples = ['C', "C#", 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const inputOctave = noteString[noteString.length-1];
    const inputNote = noteString.slice(0, noteString.length-1);

    if (inputNote === 'C'){
        return examples[examples.length-1] + (Number(inputOctave)-1);
    }

    let index = examples.indexOf(inputNote);

    return examples[index-1]+inputOctave;
}

console.log(toneDown('C5'));
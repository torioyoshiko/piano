import {toneUp, toneDown} from "./notes.utils";

describe('toneUp tests', ()=>{
    it('should return a higher note without a #', () => {
        expect(toneUp('E4')).toBe('F4');
    });

    it('should return a higher note with a #', () => {
        expect(toneUp('C4')).toBe('C#4');
    });

    it('should return a note from next octave', () => {
        expect(toneUp('B4')).toBe('C5');
    });
});

describe('toneDown tests', ()=>{
    it('should return a lower note', () => {
        expect(toneDown('F4')).toBe('E4');
    });

    it('should return a lower note without a #', () => {
        expect(toneDown('C#4')).toBe('C4');
    });

    it('should return a note from previous octave', () => {
        expect(toneDown('C5')).toBe('B4');
    });
});

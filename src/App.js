import React, {useEffect} from 'react';
import './App.css';
import WhiteButton from "./components/whiteButton";

function App() {
    useEffect(() => {
        const onKeyDown = (event) => {
            console.log(`${event.code} down`)
        }

        const onKeyUp = (event) => {
            console.log(`${event.code} up`)
        }

        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);


        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
        };
    }, []);

    return (
        <div className="App">
            <WhiteButton/>
        </div>
    );
}

export default App;

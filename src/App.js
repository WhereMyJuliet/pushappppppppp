import React, { useState, useEffect } from 'react';
import './index.css';
import incrementSound from './components/audio/zvuk.mp3';
import decrementSound from './components/audio/rabota.mp3';
import resetSound from './components/audio/knopka.mp3';
import backgroundSound from './components/audio/muzyka-super-mario.mp3';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isFirstInteraction, setIsFirstInteraction] = useState(false);

    const playSound = (sound) => {
        const audio = new Audio(sound);
        audio.play();
    };

    const playBackgroundSound = () => {
        const audio = new Audio(backgroundSound);
        audio.loop = true;
        audio.play();
    };

    const handleFirstInteraction = () => {
        if (!isFirstInteraction) {
            setIsFirstInteraction(true);
            playBackgroundSound();
        }
    };

    const increment = () => {
        playSound(incrementSound);
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        playSound(decrementSound);
        setCount((prevCount) => prevCount - 1);
    };

    const reset = () => {
        playSound(resetSound);
        setCount(0);
    };

    useEffect(() => {
        window.addEventListener('click', handleFirstInteraction);
        return () => {
            window.removeEventListener('click', handleFirstInteraction);
        };
    }, [isFirstInteraction]);

    return (
        <div className="counter-container">
            <h2>Mario Clicker</h2>
            <p className="count">Count: {count}</p>
            <div className="button-container">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;

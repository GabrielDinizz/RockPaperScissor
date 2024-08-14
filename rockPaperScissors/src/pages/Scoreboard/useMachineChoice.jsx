import { useState, useEffect } from 'react';

function useMachineChoice() {
    const [machineChoice, setMachineChoice] = useState('');

    useEffect(() => {
        const getRandomChoice = () => {
            const choices = ['Paper', 'Rock', 'Scissor'];
            const randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        };

        const randomChoice = getRandomChoice();
        setMachineChoice(randomChoice);
    }, []);

    return machineChoice;
}

export default useMachineChoice;

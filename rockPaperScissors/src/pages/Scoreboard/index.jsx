    // Scoreboard.jsx
    import { useLocation } from 'react-router-dom';
    import styles from '../Scoreboard/Scoreboard.module.css'
    import Scissor from '../../assets/Tesoura.png';
    import Rock from '../../assets/Pedra.png';
    import Paper from '../../assets/Papel.png';
    import useMachineChoice from './useMachineChoice';

    function Scoreboard() {
        
        //Escolha Jogador
        const location = useLocation();
        const { playerChoice } = location.state || {}; // Recupera a escolha
        // Mapear as escolhas para imagens (Porque preciso de mapear?)
        const choiceImages = {
            Rock: Rock,
            Paper: Paper,
            Scissor: Scissor
        };
        const playerChoiceImage = choiceImages[playerChoice];
        
        

        // Usar o custom hook para obter a escolha da máquina
        const machineChoice = useMachineChoice();
        const machineChoiceImage = choiceImages[machineChoice];
        
        //Resultado
        let result = ''
        let playerScore = 0
        let machineScore = 0
        if (machineChoice === playerChoice) {
            result = 'Empate';
        } else if (
            (playerChoice === 'Rock' && machineChoice === 'Scissor') ||
            (playerChoice === 'Scissor' && machineChoice === 'Paper') ||
            (playerChoice === 'Paper' && machineChoice === 'Rock')
        ) {
            playerScore++
            result = 'Você Ganhou!';
        } else {
            machineScore++
            result = 'Você Perdeu!';
        }


        return (
            <>
                <div className={styles.container}>
                    <div className={styles.scoreboardContainer}>
                        <h1>rock paper scissors</h1>
                        <div className={styles.scoreboard}>
                            <div className={styles.user}>
                                <h2>You</h2>
                            </div>
                            <div className={styles.scoreboardNumber}>
                                <h2>{playerScore} x {machineScore}</h2>
                            </div>
                            <div className={styles.user}>
                                <h2>Machine</h2>
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerGame}>
                        <div>
                            <img src={playerChoiceImage} alt="" />
                            <h2></h2>
                        </div>
                        <div className={styles.result}>
                            <h2>{result}</h2>
                            <button>Play Again</button>
                        </div>
                        <div>
                            <img src={machineChoiceImage} alt="" />
                            <h2></h2>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    export default Scoreboard;

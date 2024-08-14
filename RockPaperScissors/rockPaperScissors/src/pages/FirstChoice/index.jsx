import { useNavigate } from 'react-router-dom';
import styles from '../FirstChoice/FirstChoice.module.css';
import Scissor from '../../assets/Tesoura.png';
import Rock from '../../assets/Pedra.png';
import Paper from '../../assets/Papel.png';

function FirstChoice() {
    const navigate = useNavigate();

    const handleChoice = (playerChoice) => {
        navigate('/scoreboard', { state: { playerChoice } });
    };

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>rock paper scissors</h1>
                <p>what's your choice?</p>
            </div>
            <div className={styles.containerChoice}>
                <div onClick={() => handleChoice('Rock')} className={styles.choiceItem}>
                    <div className={styles.backgroundImg}><img src={Rock} alt="Rock" /></div>
                    <div className={styles.textChoice}><p>Rock</p></div>
                </div>
                
                <div onClick={() => handleChoice('Paper')} className={styles.choiceItem}>
                    <div className={styles.backgroundImg}><img src={Paper} alt="Paper" /></div>
                    <div className={styles.textChoice}><p>Paper</p></div>
                </div>

                <div onClick={() => handleChoice('Scissor')} className={styles.choiceItem}>
                    <div className={styles.backgroundImg}><img src={Scissor} alt="Scissors" /></div>
                    <div className={styles.textChoice}><p>Scissors</p></div>
                </div>
            </div>
        </div>
    );
}

export default FirstChoice;

// Scoreboard.jsx
import { useLocation } from 'react-router-dom';
import styles from '../Scoreboard/Scoreboard.module.css'

function Scoreboard() {
    const location = useLocation();
    const { choice } = location.state || {}; // Recupera a escolha

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
                            <h2>1x0</h2>
                        </div>
                        <div className={styles.user}>
                            <h2>Machine</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.containerGamer}>

                </div>
            </div>
        </>
    );
}

export default Scoreboard;

import styles from '../styles/IncorrectGuesses.module.css';
export default function IncorrectGuesses({ incorrectGuesses }:{ incorrectGuesses:string[] }){
    const getGuesses = () => incorrectGuesses.reduce((acc, guess) => acc+' '+guess+', ', '').slice(0, -2);
    return (
        <div>
            <strong>Incorrect Guesses:</strong><br/>
            {
                (incorrectGuesses.length !== 0) ? 
                    <div id={styles.incorrectGuesses}>{getGuesses()}</div> :
                    <div style={{height: '2.4rem'}}></div>
            }
        </div>
    )
}

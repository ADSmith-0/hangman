import styles from '../styles/Popup.module.css';
const { container, popup, title, subtitle, button } = styles;
export default function Popup({ win, word, definition, playAgain }:{ win:boolean, word:string, definition:string, playAgain:any }) {
    const titleCase = (str:string):string => (str[0].toUpperCase() + str.substr(1));
    return (
        <section id={container}>
            <div id={popup}>
                <h2 id={title}>{win?'Congratulations you won! 😄':'You Lost! 😓'}</h2>
                <p className={subtitle}>The word was: <span className={styles.word}>{titleCase(word)}</span></p>
                <p className={subtitle}>Definition: <span className={styles.definition}>{definition}</span></p>
                <button id={button} onClick={playAgain}>Play Again</button>
            </div>
        </section>
    )
}

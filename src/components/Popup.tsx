import styles from '../styles/Popup.module.css';
const { container, popup, title, subtitle } = styles;
export default function Popup({ win, word, definition }:{ win:boolean, word:string, definition:string }) {
    return (
        <section id={container}>
            <div id={popup}>
                <h2 id={title}>{win?'Congratulations you won! 😄':'You Lost! 😓'}</h2>
                <p className={subtitle}>The word was: <span>{word}</span></p>
                <p className={subtitle}>Definition: <span>{definition}</span></p>
            </div>
        </section>
    )
}

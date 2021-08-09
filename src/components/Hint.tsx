import styles from '../styles/Hint.module.css';
const { button } = styles;
export default function Hint({ definition, revealed, onReveal }:{definition:string, revealed:boolean, onReveal:any}) {
    return (
        <div>
            <button id={button} onClick={onReveal}>Hint</button>
            <div id={styles.hint} className={(revealed)?styles.visible:''}>{definition}</div>        
        </div>
    )
}

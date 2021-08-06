import { useState } from 'react';
import styles from '../styles/Hint.module.css';
const { button } = styles;
export default function Hint({ definition }:{definition:string}) {
    const [ revealed, setRevealed ] = useState(false);
    const revealHint = (e:any) => setRevealed(true);
    return (
        <div>
            <button id={button} onClick={revealHint}>Hint</button>
            <div id={styles.hint} className={(revealed)?styles.visible:''}>{definition}</div>        
        </div>
    )
}

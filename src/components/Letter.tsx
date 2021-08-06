import styles from '../styles/Letter.module.css';
export default function Letter({ letter, revealed }:{letter:string, revealed:boolean}) {
    return (
        <span className={`${styles.letter} ${revealed?styles.visible:''}`}>{letter}</span>
    )
}

import '../styles/Letter.css';
export default function Letter({ letter, revealed }:{letter:string, revealed:boolean}) {
    return (
        <span className={`letter ${revealed?'visible':''}`}>{letter}</span>
    )
}

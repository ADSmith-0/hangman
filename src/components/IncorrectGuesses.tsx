export default function IncorrectGuesses({ incorrectGuesses }:{ incorrectGuesses:string[] }){
    const getGuesses = () => incorrectGuesses.reduce((acc, guess) => acc+' '+guess+', ', '').slice(0, -2);
    const styles = {
        fontSize: '1.8rem',
        textTransform: 'uppercase' 
    };
    return (
        <div>
            <strong>Guesses left:</strong>
            <div style={{fontSize: '1.8rem'}}>{5 - incorrectGuesses.length}</div>
            <strong>Incorrect Guesses:</strong><br/>
            {/* @ts-ignore */}
            <span className="incorrect-guesses" style={styles}>{getGuesses()}</span>
        </div>
    )
}

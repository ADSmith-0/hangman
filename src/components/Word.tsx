import Letter from './Letter';
import styles from '../styles/Word.module.css';
export default function Word({ word, correctGuesses }:{ word:string, correctGuesses:string[] }) {
    const lettersFromWord = (word:string):string[] => {
        const letters:string[] = [];
        for(let letter of word) letters.push(letter);
        return letters;
    }
    return (
        <div id={styles.word}>
            {lettersFromWord(word).filter(letter => letter).map((letter, index) => (
                <Letter key={index} letter={letter} revealed={correctGuesses.includes(letter)} />
            ))}
        </div>
    )
}

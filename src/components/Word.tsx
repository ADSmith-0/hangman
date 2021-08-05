import Letter from './Letter';
import '../styles/Word.css'
export default function Word({ word }:{word:string}) {
    const lettersFromWord = (word:string):string[] => {
        const letters:string[] = [];
        for(let letter of word) letters.push(letter);
        return letters;
    }
    return (
        <div id="word">
            {lettersFromWord(word).filter(letter => letter).map((letter, index) => (
                <Letter key={index} letter={letter} revealed={false} />
            ))}
        </div>
    )
}

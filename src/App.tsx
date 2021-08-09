import Hangman from './components/Hangman';
import IncorrectGuesses from './components/IncorrectGuesses';
import Hint from './components/Hint';
import Word from './components/Word';
import Popup from './components/Popup';
import { useEffect, useState } from 'react';
import styles from './styles/App.module.css';
const { main, title, buffer } = styles;
export default function App() {
  const [ playable, setPlayable ] = useState(true);
  const [ word, setWord ] = useState("");
  const [ definition, setDefinition ] = useState("");
  const [ correctGuesses, setCorrectGuesses ] = useState([]);
  const [ incorrectGuesses, setIncorrectGuesses ] = useState([]);
  const [ rounds, setRounds ] = useState(0);
  const [ hintRevealed, setHintRevealed ] = useState(false);
  const maxGuesses = 6;
  const generateWord = async ():Promise<string> => {
      const response = await fetch('https://random-words-api.vercel.app/word').then(res => res.json());
      const word = await response;
      // @ts-ignore
      return word;
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const countUniqueCharacters = (str:string):number => {
    if(str.length === 0) return 0;
    let new_str = str.replace(str[0], '');
    return 1 + countUniqueCharacters(new_str);
  }
  const revealHint = () => setHintRevealed(true);
  const playAgain = () => {
    setPlayable(true);
    setRounds(round => round + 1);
    setCorrectGuesses([]);
    setIncorrectGuesses([]);
    setHintRevealed(false);
  }
  useEffect(() => {
    let word = generateWord();
    word.then(word => {
      // @ts-ignore
      setWord(word[0].word.toLowerCase());
      // @ts-ignore
      setDefinition(word[0].definition);
    });
  }, [rounds]);
  useEffect(() => {
    const keyPressed = (e:any) => {
      let regex = new RegExp(/^[a-zA-Z]{1}$/);
      if(playable && regex.test(e.key) && !!word){
        if(word.includes(e.key)){
          // @ts-ignore
          setCorrectGuesses(correctGuesses => (!correctGuesses.includes(e.key) ? [...correctGuesses, e.key]:[...correctGuesses]));
        }else{
          // @ts-ignore
          setIncorrectGuesses(incorrectGuesses => (!incorrectGuesses.includes(e.key) ? [...incorrectGuesses, e.key]: [...incorrectGuesses]));
        }
      }
    };
    window.addEventListener('keydown', keyPressed);

    return () => window.removeEventListener('keydown', keyPressed);
  }, [correctGuesses, incorrectGuesses, word, playable]);
  useEffect(() => {
    console.log(`correctGuesses.length:${correctGuesses.length}`);
    console.log(``);
    if(correctGuesses.length === countUniqueCharacters(word) && word !== ""){
      setPlayable(false);
    }
  }, [correctGuesses, countUniqueCharacters, word]);
  useEffect(() => {
    if(incorrectGuesses.length >= maxGuesses) setPlayable(false);
  }, [incorrectGuesses]);
  
  return (
    <main id={main}>
      <h1 id={title}>Hangman</h1>
      <Hangman guesses={incorrectGuesses.length} />
      <IncorrectGuesses incorrectGuesses={incorrectGuesses}/>
      <Hint definition={definition} revealed={hintRevealed} onReveal={revealHint}/>
      <Word word={word} correctGuesses={correctGuesses}/>
      {(!playable) && 
        <Popup 
          win={(incorrectGuesses.length < maxGuesses)}
          word={word}
          definition={definition}
          playAgain={playAgain}
        />}
      <div id={buffer}></div>
    </main>
  )
}

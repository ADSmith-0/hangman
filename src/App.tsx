import Difficulty from './components/Difficulty';
import Hangman from './components/Hangman';
import IncorrectGuesses from './components/IncorrectGuesses';
import Word from './components/Word';
import './styles/App.css';
import { useEffect, useState } from 'react';
export default function App() {
  const [ playable, setPlayable ] = useState(true);
  const [ word, setWord ] = useState("");
  const [ correctGuesses, setCorrectGuesses ] = useState([]);
  const [ incorrectGuesses, setIncorrectGuesses ] = useState([]);
  const generateWord = async ():Promise<string> => {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=10&swear=0').then(res => res.json());
      const words = await response;
      // @ts-ignore
      return await words.sort((a:object,b:object) => a.length - b.length)[0];
  }
  useEffect(() => {
    let word = generateWord();
    word.then(word => setWord(word));
  }, []);
  useEffect(() => {
    const keyPressed = (e:any) => {
      let regex = new RegExp(/^[a-zA-Z]{1}$/);
      if(playable && regex.test(e.key) && !!word){
        if(word.includes(e.key)){
          // @ts-ignore
          setCorrectGuesses(correctGuesses => (!correctGuesses.includes(e.key) && [...correctGuesses, e.key]));
        }else{
          // @ts-ignore
          setIncorrectGuesses(incorrectGuesses => (!incorrectGuesses.includes(e.key) && [...incorrectGuesses, e.key]));
        }
      }
    };
    window.addEventListener('keydown', keyPressed);

    return () => window.removeEventListener('keydown', keyPressed);
  }, [correctGuesses, incorrectGuesses, word]);
  
  return (
    <main id="main">
      <h1 id="title">Hangman</h1>
      <Difficulty />
      <Hangman />
      <IncorrectGuesses incorrectGuesses={incorrectGuesses}/>
      <Word word={word} correctGuesses={correctGuesses}/>
    </main>
  )
}

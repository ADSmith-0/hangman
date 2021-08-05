import Difficulty from './components/Difficulty';
import Hangman from './components/Hangman';
import IncorrectGuesses from './components/IncorrectGuesses';
import Word from './components/Word';
import './styles/App.css';
import { useEffect, useState } from 'react';
export default function App() {
  const [ word, setWord ] = useState("");
  const [ correctGuesses, setCorrectGuesses ] = useState([]);
  const [ incorrectGuesses, setIncorrectGuesses ] = useState([]);
  const generateWord = async ():Promise<string> => {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=1&swear=0').then(res => res.json());
      const word = await response[0];
      return word;
  }
  const keyPressed = (e:any) => {
    let regex = new RegExp(/^[a-zA-Z]{1}$/);
    console.log(e.key);
    if(regex.test(e.key) && word){
      console.log(word);
      // console.log(e.key);
      // console.log(word.includes(e.key));
      if(word.includes(e.key)){
        // @ts-ignore
        setCorrectGuesses(correctGuesses => [...correctGuesses, e.key]);
      }else{
        // @ts-ignore
        setIncorrectGuesses(incorrectGuesses => [...incorrectGuesses, e.key]);
      }
    }
  };
  useEffect(() => {
    let word = generateWord();
    word.then(word => setWord(word));
    // window.addEventListener('keydown', keyPressed);
  }, []);
  useEffect(() => {
    console.log(`correctGuesses: ${correctGuesses}`);
    console.log(`incorrectGuesses: ${incorrectGuesses}`);
  }, [correctGuesses, incorrectGuesses]);
  
  return (
    <main tabIndex="0" onKeyDown={keyPressed} id="main">
      <h1 id="title">Hangman</h1>
      <Difficulty />
      <Hangman />
      <IncorrectGuesses />
      <Word word={word}/>
    </main>
  )
}

import styles from '../styles/Popup.module.css';
const { container, popup } = styles;
export default function Popup({ win, word }:{ win:boolean, word:string }) {
    return (
        <section id={container}>
            <div id={popup}>
                {win ? 'Congratulations you won!':`You lost the word was: ${word}`}
            </div>
        </section>
    )
}

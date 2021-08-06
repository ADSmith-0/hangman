import styles from '../styles/Hangman.module.css';
const { container } = styles;
export default function Hangman({ guesses }:{guesses:number}) {
    const line_style = {stroke:'#fff', strokeWidth: "5"};
    return (
        <svg id={container} width="250" height="250">
            {/* Gallows */}
            <line x1="0" y1="250" x2="120" y2="250" style={line_style} />
            <line x1="60" y1="250" x2="60" y2="0" style={line_style} />
            <line x1="60" y1="250" x2="60" y2="0" style={line_style} />
            <line x1="60" y1="0" x2="160" y2="0" style={line_style} />
            <line x1="160" y1="0" x2="160" y2="30" style={line_style} />
            {/* Head */}
            {(guesses >= 1) && <circle cx="160" cy="55" r="25" stroke="#fff" stroke-width="5" fill="none" />}
            {/* Body */}
            {(guesses >= 2) && <line x1="160" y1="80" x2="160" y2="150" style={line_style} />}
            {/* Left arm */}
            {(guesses >= 3) && <line x1="160" y1="100" x2="120" y2="80" style={line_style} />} 
            {/* Right arm */}
            {(guesses >= 4) && <line x1="160" y1="100" x2="200" y2="80" style={line_style} />}
            {/* Left Leg */}
            {(guesses >= 5) && <line x1="160" y1="149" x2="130" y2="190" style={line_style} />}  
            {/* Right Leg */}
            {(guesses >= 6) && <line x1="160" y1="149" x2="190" y2="190" style={line_style} />} 
        Sorry, your browser does not support inline SVG.
        </svg>
    )
}

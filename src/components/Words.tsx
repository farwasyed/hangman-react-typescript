import classes from './Words.module.css';

type WordsProps = {
    guessedLetter: string[];
    wordToGuess: string;
    reveal: boolean
}
export function Words({ guessedLetter, wordToGuess, reveal} : WordsProps) {
    // const word = 'Test';
    // const guessedLetter = ["e"];

    return (
        <div className={classes.main}>
            <div style={{ 
                        display: "flex", 
                        gap: ".25em",
                        fontSize:"6rem",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontFamily: "monospace"
                        }} >

                {wordToGuess.split("").map((letter, index) => (
                        <span style={{borderBottom: ".1em solid rgb(49, 49, 49)"}} key={index}>
                            <span style={{
                                visibility: guessedLetter.includes(letter) ? "visible" : "hidden"
                            }}>{letter}</span>
                        </span>
                    ))}

            </div>
        </div>
    )
        
}
import { useCallback, useEffect, useState } from "react";
import { Drawing } from "./components/Drawing";
import { Words } from "./components/Words";
import { Keyboard } from "./components/Keyboard";
import words from "./wordlist.json";
import classes from './App.module.css';

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )
  const handleRefresh = () => {
    window.location.reload();
  };
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isWinner, isLoser]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <div className={classes.main}>

    <h2>Lets Guess!</h2>
    <div className={classes.container}>
      <div >
        {isWinner && "You WON! - Refresh to play again"}
        {isLoser && (
          <div>
            Oh no!! Let's&nbsp;
            <button className={classes.btn} onClick={handleRefresh}>
              Refresh
            </button>
            &nbsp;to try again
          </div>
        )}

        {/* {isLoser && "Oh No! - Refresh to try again"} */}
      </div>
      <Drawing numberofGuesses={incorrectLetters.length} />
      <Words
        reveal={isLoser}
        guessedLetter={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
    </div>
  )
}

export default App
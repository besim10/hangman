import { useEffect, useState } from "react";
import "./App.css";
import { Modals } from "./components/Modals/Modals";

function App() {
  const words = [
    "user",
    "artisan",
    "river",
    "newspaper",
    "confusion",
    "charity",
    "ladder",
    "president",
    "delivery",
    "engineering",
    "revolution",
    "map",
    "math",
    "phone",
    "understanding",
    "drawing",
    "growth",
    "protection",
    "significance",
    "outcome",
    "celebration",
    "magazine",
    "hat",
    "situation",
    "elevator",
    "control",
    "breath",
    "analyst",
    "atmosphere",
    "election",
    "song",
    "employee",
    "assumption",
    "camera",
    "inflation",
    "success",
    "penalty",
    "thing",
    "depression",
    "audience",
    "soup",
    "lake",
    "gene",
    "meal",
    "obligation",
    "activity",
    "drawer",
    "version",
    "salad",
    "direction",
  ];
  const getRandomWords = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };
  const [guesses, setGuesses] = useState([]);
  const [word, setWord] = useState(getRandomWords());
  const [modal, setModal] = useState("");

  const letters = "abcdefghijklmnopqrstuvwxyz";

  const rightGuesses = guesses.filter((guess) => word.includes(guess));
  const wrongGuesses = guesses.filter((guess) => !word.includes(guess));

  const lives = 6 - wrongGuesses.length;
  const won = word.split("").every((char) => rightGuesses.includes(char));
  const lose = lives === 0;

  useEffect(() => {
    if (won) setModal("won");
    if (lose) setModal("lose");
    if (lose || won) return;

    const listener = (e) => {
      const guess = e.key.toLowerCase();
      if (!letters.includes(guess)) return;
      if (guesses.includes(guess)) return;
      setGuesses([...guesses, guess]);
    };

    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [guesses, lose, won]);

  return (
    <div className="App">
      <div className="header">
        <h1>Hangman</h1>
        <p>Find the hidden word - Enter a letter</p>
      </div>

      <div className="main">
        <div className="word">
          {word.split("").map((char, index) => (
            <span key={index}>{rightGuesses.includes(char) ? char : "_"}</span>
          ))}
        </div>

        <p>
          Wrong guesses: {wrongGuesses} ({wrongGuesses.length})
        </p>
        <p>Lives: {lives}</p>

        {lose ? <p>You lose 😞</p> : null}
        {won ? <p>You won! 🎉</p> : null}
      </div>
      {modal !== "" ? (
        <Modals
          modal={modal}
          word={word}
          setModal={setModal}
          setGuesses={setGuesses}
          setWord={setWord}
          getRandomWords={getRandomWords()}
        />
      ) : null}
    </div>
  );
}

export default App;

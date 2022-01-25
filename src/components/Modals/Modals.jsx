import { Lose } from "./Lose";
import { Win } from "./Win";

export function Modals({
  modal,
  setModal,
  word,
  setGuesses,
  setWord,
  getRandomWords,
}) {
  switch (modal) {
    case "won":
      return (
        <Win
          word={word}
          setModal={setModal}
          setGuesses={setGuesses}
          setWord={setWord}
          getRandomWords={getRandomWords}
        />
      );
    case "lose":
      return (
        <Lose
          word={word}
          setModal={setModal}
          setGuesses={setGuesses}
          setWord={setWord}
          getRandomWords={getRandomWords}
        />
      );
    default:
      return null;
  }
}

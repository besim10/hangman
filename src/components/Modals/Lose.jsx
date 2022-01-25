export const Lose = ({
  word,
  setModal,
  setGuesses,
  getRandomWords,
  setWord,
}) => (
  <div className="modal-wrapper">
    <div className="modal">
      <button
        onClick={() => {
          setModal("");
        }}
        className="close-btn"
      >
        X
      </button>
      <h2>Unfortunately you lost... 😢</h2>
      <p>the word was: {word}</p>
      <button
        onClick={() => {
          setModal("");
          setGuesses([]);
          setWord(getRandomWords);
        }}
      >
        Play Again
      </button>
    </div>
  </div>
);

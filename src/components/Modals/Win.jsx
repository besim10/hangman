export const Win = ({
  word,
  setModal,
  setGuesses,
  setWord,
  getRandomWords,
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
      <h2>Congratulations! You won! 😃</h2>
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

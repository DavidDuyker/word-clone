import React from "react";
import Guess from "../Guess";

function GuessResults({ PreviousGuesses }) {

  return (
    <div className="guess-results">
      {PreviousGuesses.map((guess, index) => (
        <Guess key={index} word={guess} />
      ))}
    </div>
  );
}

export default GuessResults;

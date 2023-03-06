import React from 'react';

import { sample } from '../../utils';
import { range } from "../../utils";
import { WORDS } from '../../data';

import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [PreviousGuesses, setPreviousGuesses] = React.useState([]);
  const array = range(NUM_OF_GUESSES_ALLOWED);
  console.log({array});

  return (
    <div>
      <GuessResults PreviousGuesses={PreviousGuesses} />
      <GuessInput  PreviousGuesses={PreviousGuesses} setPreviousGuesses={setPreviousGuesses}/>
    </div>
  );
}

export default Game;

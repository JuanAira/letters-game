import React, { useEffect, useState } from 'react'
import { generateBoard } from '../../utils/letters';
import { Board } from '../../Components/Board';
import { Word } from '../../Components/Word';
import { Clear } from '../../Components/Clear';
import { TailSpin } from 'react-loader-spinner';
import SharedPropsContext from '../../context/SharedProps';

if (window.screen.width < 500) {
  require('./styles.mobile.scss');
} else {
  require('./styles.desktop.scss');
}

export const Game = () => {
  const [board, setBoard] = useState();
  const [word, setWord] = useState('');
  const [keys, setKeys] = useState([]);
  const [neighbors, setNeighbors] = useState([]);
  const [nextPossibleValues, setNextPossibleValues] = useState([]);

  const handleChangeWord = (e, letter, key) => {
    e.preventDefault();

    if (neighbors && nextPossibleValues.includes(key)
      || !word) {
      setNextPossibleValues(neighbors[key])
      !keys.includes(key) && setWord(word + letter);
      !keys.includes(key) && setKeys([...keys, key]);
    }
  };

  const handleClearWord = () => {
    setWord('');
    setKeys([]);
    setNextPossibleValues([]);
  };

  useEffect(() => {
    const { board, neighbors } = generateBoard({});
    setBoard(board);
    setNeighbors(neighbors);
  }, [])

  if (!board)
    return <TailSpin ariaLabel="loading-indicator" />;

  const sharedProps = {
    board,
    word,
    handleChangeWord,
    handleClearWord,
    keys,
    nextPossibleValues,
  };

  return (
    <SharedPropsContext.Provider value={sharedProps}>
      <div className="App">
        <div className='section--clear'>
          <Clear disabled={!word.length} />
        </div>
        <div className='section--board'>
          <Board board={board} />
          <div className='section--board section--board--word'>
            <Word />
          </div>
        </div>
      </div>
    </SharedPropsContext.Provider>
  )
}
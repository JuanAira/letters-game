/* eslint-disable no-unused-vars */
import './styles.scss';

import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Letter } from '../Letter';

const nameSpace = 'section-board';

export const Board = ({ board }) => {  
  return (
    <div className={nameSpace}>
      {board.map((letter, i) => {
        return <Letter
          key={i}
          letter={letter}
          i={i}
        />
      })}
    </div>
  )
}

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string),
};
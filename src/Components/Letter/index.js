import './styles.scss';

import React from 'react'
import PropTypes from 'prop-types';
import SharedPropsContext from '../../context/SharedProps';

const nameSpace = 'letter';

export const Letter = ({ letter, i: key }) => {
  const {
    handleChangeWord,
    keys,
    nextPossibleValues,
  } = React.useContext(SharedPropsContext);

  const classname = keys.includes(key) ? `${nameSpace}--select` :
    nextPossibleValues.includes(key) ? `${nameSpace}--possible-values` :  `${nameSpace}--disabled`;

  return (
    <h3 className={`${nameSpace} ${key} ${classname}`} onClick={(e) => handleChangeWord(e, letter, key)}>
      {letter}
    </h3>
  )
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};
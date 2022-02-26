import React from 'react'
import { validateWord } from '../../utils/word-valids';
import SharedPropsContext from '../../context/SharedProps';

import { isMobile } from 'react-device-detect';
if (isMobile) {
  require('./styles.mobile.scss');
} else {
  require('./styles.desktop.scss');
}

const nameSpace = 'word';

export const Word = () => {
  const { word } = React.useContext(SharedPropsContext);
  const wordValid = validateWord({ word });

  return (
    <>
      <h3 className={`${nameSpace} ${wordValid ? `${nameSpace}--valid` : `${nameSpace}--invalid`}`}>
        <span className={`${nameSpace}--formed`}>{word}</span><span className={`${nameSpace}--feedback`}>{wordValid ? 'valid' : 'invalid'}</span>
      </h3>
    </>
  )
}
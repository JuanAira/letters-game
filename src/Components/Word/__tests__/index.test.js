import React from 'react';
import { render } from '@testing-library/react';
import { Word } from '../index';
import SharedProps from '../../../context/SharedProps';

describe('<Word /> component', () => {
  const setup = ({ word }) => {
    const sharedProps = {
      word,
    };

    const component = render(
      <SharedProps.Provider value={sharedProps} >
        <Word />
      </SharedProps.Provider>
    );

    return component;
  };

  it('should match snapshot - word valid', () => {
    const { container } = setup({ word: 'TOY'});
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot - word invalid', () => {
    const { container } = setup({ word: 'DEMO' });
    expect(container).toMatchSnapshot();
  });
});

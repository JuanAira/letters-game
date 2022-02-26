import React from 'react';
import { render } from '@testing-library/react';
import { Board } from '../index';
import SharedProps from '../../../context/SharedProps';

describe('<Board /> component', () => {
  const setup = () => {
    const sharedProps = {
      keys: [1, 2, 3],
      nextPossibleValues: [],
    };

    const board = ['A', 'B', 'C'];
    const component = render(
      <SharedProps.Provider value={sharedProps} >
        <Board
        board={board}
        />
      </SharedProps.Provider>
    );

    return component;
  };

  it('should match snapshot - base', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Letter } from '../index';
import SharedProps from '../../../context/SharedProps';

describe('<Letter /> component', () => {
  const handleChangeWord = jest.fn();
  
  const setup = ({ letter = 'A', i= 0 }) => {
    const sharedProps = {
      keys: [1, 2, 3],
      handleChangeWord,
      nextPossibleValues: [],
    };

    const component = render(
      <SharedProps.Provider value={sharedProps} >
        <Letter
          letter={letter}
          i={i}
        />
      </SharedProps.Provider>
    );

    return component;
  };

  it('should match snapshot - no include key', () => {
    const { container } = setup({});
    expect(container).toMatchSnapshot();
  });

  it('should call handleChangeWord when user press a click - include key', () => {
    setup({ i: 1 });
    const letter = screen.getByText(/A/i);
    fireEvent.click(letter);
    
    expect(handleChangeWord).toHaveBeenCalledTimes(1);
  });
});

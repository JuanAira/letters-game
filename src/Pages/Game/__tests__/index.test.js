import React from 'react';
import { render } from '@testing-library/react';
import { Game } from '..';

describe('<Game /> component', () => {
  const setup = () => {

    const board = ['A', 'B', 'C'];
    const component = render(
        <Game
        board={board}
        />
    );

    return component;
  };

  it('should match snapshot - base', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});

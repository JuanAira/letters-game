import React from 'react';
import { render } from '@testing-library/react';
import { Clear } from '../index';
import SharedProps from '../../../context/SharedProps';

describe('<Clear /> component', () => {
  const handleChangeWord = jest.fn();

  const setup = ({ disabled = false }) => {
    const sharedProps = {
      handleChangeWord,
    };

    const component = render(
      <SharedProps.Provider value={sharedProps} >
        <Clear
          disabled={disabled}
        />
      </SharedProps.Provider>
    );

    return component;
  };

  it('should match snapshot - disabled', () => {
    const { container } = setup({});
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot - disabled true', () => {
    const { container } = setup({ disabled: true });
    expect(container).toMatchSnapshot();
  });
});

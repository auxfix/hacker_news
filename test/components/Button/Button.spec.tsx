import React from 'react';
import Button from 'components/Button';
import { fireEvent, render, screen } from 'test-utils';

const mockOnButtonClick = jest.fn();

describe('Button', () => {
  it('should render properly', () => {
    const buttonText = 'Click me';

    render(<Button onClick={mockOnButtonClick}>{buttonText}</Button>);

    expect(screen.getByRole('button')).toMatchSnapshot();
    expect(screen.getByRole('button')).toHaveTextContent(buttonText);
  });

  it('on click handler is working', () => {
    const buttonText = 'Click me';

    render(<Button onClick={mockOnButtonClick}>{buttonText}</Button>);

    fireEvent.click(screen.getByRole('button'));

    expect(mockOnButtonClick).toHaveBeenCalledTimes(1);
  });
});

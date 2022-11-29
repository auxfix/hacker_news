import React from 'react';
import NotFound from 'routes/NotFound';
import { render, screen } from 'test-utils';

describe('NotFound', () => {
  it('should render properly', () => {
    render(<NotFound />);

    expect(screen.getByTestId('NotFound')).toMatchSnapshot();
  });
});

import React from 'react';
import GlobalStyles from 'pages/GlobalStyles';
import { render } from 'test-utils';

describe('GlobalStyles', () => {
  it('should render properly', () => {
    render(<GlobalStyles />);

    expect(document.querySelector('head')?.innerHTML).toMatchSnapshot();
  });
});

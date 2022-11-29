import React from 'react';
import { config } from 'react-transition-group';
import { showAlert } from 'actions';
import { ActionTypes } from 'literals';
import SystemAlerts from 'pages/SystemAlerts';
import { fireEvent, render, screen } from 'test-utils';

config.disabled = true;

jest.mock('components/Transition', () => ({ children }) => (
  <div className="transition">{children}</div>
));

jest.useFakeTimers();

const mockDispatch = jest.fn();

describe('SystemAlerts', () => {
  it('should render all zones', () => {
    const { container } = render(<SystemAlerts />);

    expect(container).toMatchSnapshot();
  });

  it('should render an alert without timeout and close it', () => {
    render(<SystemAlerts />, {
      actions: [
        showAlert('Hello Mars', {
          id: 'ABD13',
          position: 'bottom-right',
          variant: 'dark',
          timeout: 0,
        }),
      ],
      mockDispatch,
    });

    expect(screen.getByRole('alert')).toBeInTheDocument();

    fireEvent.click(screen.queryByRole('alert')?.querySelector('button')!);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});

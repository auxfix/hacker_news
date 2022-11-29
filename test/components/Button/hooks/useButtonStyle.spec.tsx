import { act, renderHook } from '@testing-library/react';
import useButtonStyle from 'components/Button/hooks/useButtonStyle';
import { fireEvent, render, screen } from 'test-utils';

describe('useButtonStyle', () => {
  const normalStyle = 'style.normal';
  const onPushStyle = 'style.push';

  it('should return correct initial state', () => {
    const { result } = renderHook(useButtonStyle, { initialProps: [normalStyle, onPushStyle] });

    expect(result.current[0]).toBe(normalStyle);
  });

  it('styles flips on push', () => {
    const { result } = renderHook(useButtonStyle, { initialProps: [normalStyle, onPushStyle] });

    expect(result.current[0]).toBe(normalStyle);

    // onButtonDown
    act(() => result.current[1]());
    expect(result.current[0]).toBe(onPushStyle);

    // onButtonUp
    act(() => result.current[2]());
    expect(result.current[0]).toBe(normalStyle);
  });
});

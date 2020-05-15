import { renderHook, act } from '@testing-library/react-hooks';
import useTransitionIn from './useTransitionIn';

describe('useTransitionIn custom hook', () => {
  it('should swap transition from false to true', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useTransitionIn('0'));
    expect(result.current).toEqual(false);
    act(() => {
    });
    setTimeout(() => {
      expect(result.current).toEqual(true);
    }, 1000);
    jest.runAllTimers();
  });
});

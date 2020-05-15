import { renderHook } from '@testing-library/react-hooks';
import useTransitionIn from './useTransitionIn';

describe('useTransitionIn custom hook', () => {
  test('should swap transition from false to true', () => {
    const { result } = renderHook(() => useTransitionIn('1000'));
    expect(result.current).toEqual(false);
    setTimeout(() => {
      expect(result.current).toEqual(true);
    }, 1200);
  });
});

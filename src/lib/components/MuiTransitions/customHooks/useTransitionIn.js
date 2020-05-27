import { useState, useEffect } from 'react';

const useTransitionIn = (time) => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransition(prev => !prev);
    }, +time);
  }, []);

  return transition;
};

export default useTransitionIn;

import { useEffect, useRef } from 'react';

export const useHandleClose = (anchorRef, open) => {
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return { prevOpen };
};

export default useHandleClose;

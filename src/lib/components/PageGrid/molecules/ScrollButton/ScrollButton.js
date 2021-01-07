import React from 'react';
import Button from 'lib/components/PageGrid/atoms/Button/Button';

export const ScrollButton = (props) => {
  const onClick = () => {
    const pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  };

  return (
    <Button {...props} onClick={onClick} />
  );
};

export default ScrollButton;

export const sizeGrid = (value) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === 'auto') return value;
  return Number(value);
};

export default sizeGrid;

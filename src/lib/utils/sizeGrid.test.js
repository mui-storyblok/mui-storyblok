import sizeGrid from './sizeGrid';

it('sizeGrid', () => {
  const valueTrue = sizeGrid('true');
  const valueFalse = sizeGrid('false');
  const valueAuto = sizeGrid('auto');
  const value12 = sizeGrid(12);

  expect(valueTrue).toEqual(true);
  expect(valueFalse).toEqual(false);
  expect(valueAuto).toEqual('auto');
  expect(value12).toEqual(12);
});

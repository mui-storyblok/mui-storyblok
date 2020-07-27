import loader, { setCustomLoader } from './customLoader';

describe('Custom Loader Utils', () => {
  it('should push an object to the loader array', () => {
    setCustomLoader({});
    expect(loader.length).toEqual(1);
  });
});

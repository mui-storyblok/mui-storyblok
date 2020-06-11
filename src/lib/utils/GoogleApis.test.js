import GoogleApis from './GoogleApis';

describe('GoogleApis', () => {
  it('should be a defined', () => {
    expect(GoogleApis).toBeDefined();
  });

  it('should assign googleapisKey in the constructor', () => {
    const googleApi = new GoogleApis('apppples');
    const expected = { googleapisKey: 'apppples' };
    expect(googleApi).toEqual(expected);
  });

  it.skip('should call successCallback', async () => {
    expect(true).toBe(false);
  });
});

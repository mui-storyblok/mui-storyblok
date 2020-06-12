import GoogleApis from './GoogleApis';
import * as geo from './geoLocate';

describe('GoogleApis', () => {
  const testGoogleApi = new GoogleApis('testKey');

  it('should be a defined', () => {
    expect(GoogleApis).toBeDefined();
  });

  it('should assign googleapisKey in the constructor', () => {
    expect(testGoogleApi.googleapisKey).toEqual('testKey');
  });

  it('calls geoLocate', async () => {
    geo.geoLocate = jest.fn();
    const callback = jest.fn();
    await testGoogleApi.geocode(callback);
    expect(geo.geoLocate).toBeCalled();
  });

});

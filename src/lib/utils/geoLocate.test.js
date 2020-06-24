import * as geo from './geoLocate';

describe('geoLocate util', () => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
  };

  global.navigator.geolocation = mockGeolocation;

  it('calls getLocation and windows getCurrentPosition is called', async () => {
    await geo.geoLocate();
    expect(global.navigator.geolocation.getCurrentPosition).toBeCalled();
  });

  it('successCallback returns data', async () => {
    const mockSuccessResponse = {
      results: [{
        formatted_address: '3390 E 1st Ave, Denver, CO 80206, USA',
      }],
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const callBack = jest.fn();

    await geo.successCallback({
      coords: {
        latitude: 39.7174719,
        longitude: -104.9476752,
      },
    }, 'wasd', callBack);
    expect(window.fetch).toBeCalled();
    expect(callBack).toBeCalledWith(mockSuccessResponse);
  });

  it('errorCallback returns data', async () => {
    const mockErrorResponse = new Error('error');
    const mockJsonPromise = Promise.resolve(mockErrorResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const callBack = jest.fn();

    const error = await geo.successCallback(undefined, 'wasd', callBack);
    expect(error.toString()).toEqual('TypeError: Cannot read property \'coords\' of undefined');
  });

  it('errorCallback', () => {
    expect(geo.errorCallback('error')).toBe('error');
  });
});

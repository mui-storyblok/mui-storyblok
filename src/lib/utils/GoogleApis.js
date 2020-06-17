/* eslint-disable */
import { geoLocate } from './geoLocate';

class GoogleApis {
  constructor(googleapisKey) {
    this.googleapisKey = googleapisKey;
  }

  async geocode(callback) {
    await geoLocate(callback, this.googleapisKey);
  }
}

export default GoogleApis;


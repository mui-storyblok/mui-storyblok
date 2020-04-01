/* eslint-disable */

class GoogleApis {
  constructor(googleapisKey) {
    this.googleapisKey = googleapisKey;
  }

  async geocode(callback) {
    successCallback = async (data, callBack) => {
      try {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.coords.latitude},${data.coords.longitude}&key=${this.googleapisKey}`;
        const res = await window.fetch(url);
        const json = await res.json();
        return callBack(json);
      } catch (err) {
        this.errorCallback(err);
      }
    };
    
    errorCallback = err => err;
    
    locate = async (callBack) => {
      if (window.navigator.geolocation) {
        await window.navigator.geolocation
          .getCurrentPosition(data => successCallback(data, callBack), errorCallback, {
            enableHighAccuracy: true,
            maximumAge: 45000,
            timeout: 10000,
          });
      }
    };

    await locate(callback);
  }

}

export default GoogleApis;


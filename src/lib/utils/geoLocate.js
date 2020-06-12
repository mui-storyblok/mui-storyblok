export const errorCallback = err => err;

export const successCallback = async (data, googleApiKey, callBack) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.coords.latitude},${data.coords.longitude}&key=${googleApiKey}`;
    const res = await window.fetch(url);
    const json = await res.json();
    return callBack(json);
  } catch (err) {
    return errorCallback(err);
  }
};


export const geoLocate = async (callBack, googleApiKey) => {
  if (window.navigator.geolocation) {
    await window.navigator.geolocation.getCurrentPosition(
      data => successCallback(data, googleApiKey, callBack),
      errorCallback,
      {
        enableHighAccuracy: true,
        maximumAge: 45000,
        timeout: 10000,
      },
    );
  }
};

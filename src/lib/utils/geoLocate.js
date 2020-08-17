import { useEffect } from 'react';

export const errorCallback = err => err;

export const setGeoLocation = (json, tabs) => {
  if (json.results.length) {
    tabs.forEach((tab, i) => {
      if (json.results[0].formatted_address.includes(tab.geocodeState)) {
        return i;
      }
      return 0;
    });
  }
};

export const successCallback = async (data, tabs, googleApiKey) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.coords.latitude},${data.coords.longitude}&key=${googleApiKey}`;
    const res = await window.fetch(url);
    const json = await res.json();
    return setGeoLocation(json, tabs);
  } catch (err) {
    return errorCallback(err);
  }
};

export const geoLocate = async (tabs, googleApiKey) => {
  if (window.navigator.geolocation) {
    await window.navigator.geolocation.getCurrentPosition(
      data => successCallback(data, tabs, googleApiKey),
      errorCallback,
      {
        enableHighAccuracy: true,
        maximumAge: 45000,
        timeout: 10000,
      },
    );
  }
};

export const useSetGeoCode = (geocode, tabs, setTabValue, googleApiKey) => {
  useEffect(() => {
    (async () => {
      const index = await geoLocate(tabs, googleApiKey);
      setTabValue(index || 0);
    })();
  }, [geocode]);
};

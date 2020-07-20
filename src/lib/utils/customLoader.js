export const setCustomLoader = loader => (
  loader
);

export const loader = customLoader => setCustomLoader(customLoader);

export default loader;

// Custom loader is an object being pushed into array
const loader = [];

export const setCustomLoader = customLoader => (
  loader.push(customLoader)
);


export default loader;

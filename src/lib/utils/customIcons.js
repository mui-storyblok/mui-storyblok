const customIcons = [];


export const pushToCustomIcons = (iconArray) => {
  if (iconArray.length > 0) iconArray.forEach(icon => customIcons.push(icon));
};

export default customIcons;

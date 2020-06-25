/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
export const muiStringProp = (props, propName, componentName, validProps) => {
  /**
   * mui accepts strings of specific values pass array of valid Props to validate
   * ex:
   * const validProps = ['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'];
    return muiStringProp(props, propName, componentName, validProps);
   */
  const propType = typeof props[propName];
  if (propType !== 'string') {
    return new Error(`${componentName}: ${propName} expected type of string but recived type ${propType}`);
  }
  if (!validProps.includes(props[propName])) {
    return new Error(
      `${componentName}: ${props[propName]} is a invalid Prop for ${propName}.
          Must be string value of ${validProps.toString()}
        `,
    );
  }

  return undefined;
};

export const muiGridProp = (props, propName, componentName) => {
  /** mui is expecting a 'string', 'number', 'boolean' value
   * storyblok is returns all values as strings
   * checks for what storyblok will pass down and what mui is looking for
   *  */
  if (!['string', 'number', 'boolean'].includes(typeof props[propName])) {
    return new Error(
      `${componentName}: ${propName} must be of type "string", "number" or "boolean".
      received ${typeof props[propName]} of ${props[propName]}`,
    );
  }

  const validProps = [
    false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    'false', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
  ];

  if (!validProps.includes(props[propName])) {
    return new Error(
      `${componentName}: ${props[propName]} is a invalid Prop for ${propName}.
          Must be string value of ${validProps.toString()}
        `,
    );
  }

  return undefined;
};

export const muiBlokNumberProp = (
  props,
  propName,
  componentName,
  numberArray,
) => {
  /**
   * takes array of numbers and pushes the numbers back as a string to validProps
   * to validate for mui numbers and storyblok returning props as strings
   */
  if (!['string', 'number'].includes(typeof props[propName])) {
    return new Error(
      `${componentName}: ${propName} must be of type "string" or "number" received ${typeof props[propName]}`,
    );
  }

  const validProps = [...numberArray, ...numberArray.map(number => number.toString())];
  if (!validProps.includes(props[propName])) {
    return new Error(
      `${componentName}: ${props[propName]} is a invalid Prop for ${propName}.  Must be string value of ${validProps.toString()}`,
    );
  }

  return undefined;
};


export const nestedComponentsProps = (
  props,
  propName,
  componentName,
  components,
) => {
  /**
   * used for nested grid and typographyText to see if the componets passed down are able to render
   */
  let error;
  const content = props[propName].map(x => x.content).flat().map(x => x.content).flat();
  content.forEach((comp) => {
    if (!components.includes(comp.component)) {
      error = new Error(
        `${componentName}: ${propName} must be included in components ${components.toString()} but recived ${comp.component}`,
      );
    }
  });
  return error;
};

export const dimensionProp = (props, propName, componentName) => {
  // use 'px', 'em', '%' 'vh', 'vw', as unit of measurement for height and width prop
  let error;

  if (propName === 'height' || propName === 'width') {
    if (propName === 'height' && !props[propName].includes('px')
      && !props[propName].includes('em')
      && !props[propName].includes('%')
      && !props[propName].includes('vh')) {
      error = new Error(
        `${componentName}: ${propName} has to be one of these units of size px, em, %, vh`,
      );
    } else if (propName === 'width'
      && !props[propName].includes('px')
      && !props[propName].includes('em')
      && !props[propName].includes('%')
      && !props[propName].includes('vw')) {
      error = new Error(
        `${componentName}: ${propName} has to be one of these units of size px, em, %, vw`,
      );
    }
  } else if (['height', 'width'].includes(propName)) {
    error = new Error(
      'dimensionProp needs to be used on proptype with name height or width',
    );
  }

  return error;
};

export const muiDimensionProp = (props, propName, componentName) => {
  // mui accepts numbers as a number of measurement and
  // 'px', 'em', '%' 'vh', 'vw', as unit of measurement for height and width prop.
  let error;
  const propToNum = props[propName];
  if (
    (propName === 'height' && isNaN(propToNum))
    || (propName === 'width' && isNaN(propToNum))
  ) {
    error = dimensionProp(props, propName, componentName);
  }
  // error = dimensionProp(props, propName, componentName);
  return error;
};

export const validComponents = (
  props,
  propName,
  componentName,
  components,
  length = undefined,
) => {
  if (!isNaN(length) && props[propName].length > length) {
    return new Error(
      `${componentName}: ${propName} can only have a length of ${length} but recived length of ${props[propName].length}`,
    );
  }

  props[propName].forEach((comp) => {
    if (!components.includes(comp.component)) {
      return new Error(
        `${componentName}: ${propName} must be included in components ${components.toString()} but recived ${comp.component}`,
      );
    }
  });

  return undefined;
};

export const componentsRequired = (
  props,
  propName,
  componentName,
  length,
) => {
  if (props[propName].length !== length) {
    return new Error(
      `${componentName}: ${propName} is required to have a length of ${length} but recived length of ${props[propName].length}`,
    );
  }

  return undefined;
};

export const validComponentsRequired = (props, propName, componentName, components, length) => {
  let error;
  error = componentsRequired(props, propName, componentName, length);
  if (error) return error;
  error = validComponents(props, propName, componentName, components);
  if (error) return error;
  return undefined;
};

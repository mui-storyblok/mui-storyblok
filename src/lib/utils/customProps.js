export const muiStringProp = (props, propName, componentName, validProps) => {
  /**
   * mui accepts strings of specific values pass array of valid Props to validate
   * ex:
   * const validProps = ['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'];
    return muiStringProp(props, propName, componentName, validProps);
   */
  const propType = typeof props[propName];
  if (propType !== 'string') {
    return new Error(`${propName} expected type of string but recived type ${propType}`);
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
  const validDimensionCss = ['px', 'em', '%'];
  let error;

  if (propName === 'height' || propName === 'width') {
    if (propName === 'height') validDimensionCss.push('vh');
    if (propName === 'width') validDimensionCss.push('vw');
    validDimensionCss.every((substring) => {
      if (!props[propName].includes(substring)) {
        error = new Error(
          `${componentName}: ${propName} has to be one of these units of size ${validDimensionCss.toString()}`,
        );
      }
    });
  } else if (['height', 'width'].includes(propName)) {
    error = new Error(
      'dimensionProp needs to be used on proptype with name height or width',
    );
  }

  return error;
};

export const validComponents = (
  props,
  propName,
  componentName,
  components,
  length = undefined,
) => {
  if (length && props[propName].length !== length) {
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

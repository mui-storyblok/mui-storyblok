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

export const muiBlokNumberProp = (props, propName, componentName, numberArray) => {
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

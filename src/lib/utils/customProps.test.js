import {
  muiGridProp,
  muiBlokNumberProp,
  nestedComponentsProps,
  dimensionProp,
  muiDimensionProp,
  validComponents,
} from './customProps';

describe('Custom Props', () => {
  it('should handle error of muiGridProp accordingly.', () => {
    const result = muiGridProp({ apples: 'test' }, 'sauce', 'testComponent');
    const expected = 'testComponent: sauce must be of type "string", "number" or "boolean". received undefined of undefined';
    expect(result.message).toEqual(expected);

    const resultValidProp = muiGridProp({ apples: 'string' }, 'apples', 'testComponent');
    const expectedValid = 'testComponent: string is a invalid Prop for apples. Must be string value of false,auto,true,1,2,3,4,5,6,7,8,9,10,11,12,false,true,1,2,3,4,5,6,7,8,9,10,11,12';
    expect(resultValidProp.message).toEqual(expectedValid);
  });

  it('should handle error of muiBlokNumberProp accordingly.', () => {
    const result = muiBlokNumberProp({ apples: 'test ' }, 'sauce', 'testComponent');
    const expected = 'testComponent: sauce must be of type "string" or "number" received undefined';
    expect(result.message).toEqual(expected);

    const resultValidProp = muiBlokNumberProp({ apples: 'test' }, 'apples', 'testComponent', [1, 2, 3]);
    const expectedMessage = 'testComponent: test is a invalid Prop for apples.  Must be string value of 1,2,3,1,2,3';
    expect(resultValidProp.message).toEqual(expectedMessage);
  });

  it.skip('should handle error of nestedComponentsProps accordingly.', () => {
    const result = nestedComponentsProps({ apples: [{ content: [{ component: 'tarter sauce' }] }] }, 'apples', 'testComponent', ['kale']);
    const expected = 'testComponent: sauce must be of type "string" or "number" received undefined';
    expect(result.message).toEqual(expected);
  });

  it('should handle error of dimensionProp accordingly.', () => {
    const heightResult = dimensionProp({ height: 'fish chips' }, 'height', 'testComponent');
    const heightExpected = 'testComponent: height has to be one of these units of size px, em, %, vh';
    expect(heightResult.message).toEqual(heightExpected);

    const widthResult = dimensionProp({ width: 'fish chips' }, 'width', 'testComponent');
    const widthExpected = 'testComponent: width has to be one of these units of size px, em, %, vw';
    expect(widthResult.message).toEqual(widthExpected);

    const result = dimensionProp({ apples: 'fish chips' }, 'heig', 'testComponent');
    const expected = 'dimensionProp needs to be used on proptype with name height or width';
    expect(result.message).toEqual(expected);
  });

  it('should handle error of muiDimensionProp accordingly.', () => {
    const result = muiDimensionProp({ height: 'notANum' }, 'height', 'testComp');
    const expected = 'testComp: height has to be one of these units of size px, em, %, vh';
    expect(result.message).toEqual(expected);
  });

  it('should handle error of validComponents accordingly.', () => {
    const result = validComponents({ apples: { length: 2 } }, 'apples', 'testComp', ['validComp'], 1);
    const expected = 'testComp: apples can only have a length of 1 but recived length of 2';
    expect(result.message).toEqual(expected);
  });
});

import {
  muiGridProp,
  muiBlokNumberProp,
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
});

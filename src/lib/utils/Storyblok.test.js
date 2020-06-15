import React from 'react';
import StoryBlock, { checkForMetaTag, setMetadata } from './Storyblok';

describe('StoryBlock', () => {
  it('should check for meta tag', () => {
    const result = '[object HTMLMetaElement]';
    const expected = checkForMetaTag('apples', 'testProperty', 'testName');
    expect(expected.toString()).toEqual(result);
  });
});

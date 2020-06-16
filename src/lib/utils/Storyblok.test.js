// import React from 'react';
import StoryBlock, { checkForMetaTag, setMetadata } from './Storyblok';

describe('StoryBlock', () => {
  it('should check for meta tag', () => {
    const result = '[object HTMLMetaElement]';
    const expected = checkForMetaTag('apples', 'testProperty', 'testName');
    expect(expected.toString()).toEqual(result);
  });

  // it('should set the Meta data', async () => {
  //   const route = '/testRoute';
  //   const accesstoken = '12345abc';
  //   const version = '1.1.1';
  //   const story = await StoryBlock.get(route, accesstoken, version);
  //   console.log(story);
  // });
});

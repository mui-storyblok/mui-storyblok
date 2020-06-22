import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * FacebookSvg takes a color and renders a the bbb svg
 */

const FacebookSvg = props => (
  <SvgIcon {...props}>
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </SvgIcon>
);

export default FacebookSvg;

import React from 'react';
import PropTypes from 'prop-types';
import TextInfoContent from '@mui-treasury/components/content/textInfo';

const TextInfo = ({
  body,
  heading,
  overline,
  classes,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => (
  <TextInfoContent
    overline={overline}
    heading={heading}
    body={body}
    className={storyblokClass}
    classes={classes}
    data-blok-c={dataBlokC}
    data-blok-uid={dataBlokUid}
  />
);

export default TextInfo;

TextInfo.propTypes = {
  classes: PropTypes.shape(),
  overline: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  dataBlokC: PropTypes.string,
  dataBlokUid: PropTypes.string,
  storyblokClass: PropTypes.string,
};

TextInfo.defaultProps = {
  classes: {},
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};

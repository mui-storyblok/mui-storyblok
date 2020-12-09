/* eslint-disable max-len */
import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { useTrendInfoStyles } from '@mui-treasury/styles/info/trend';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

/* istanbul ignore next */
const ButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/ButtonRedirect/ButtonRedirect'));
/* istanbul ignore next */
const ButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/ButtonDownload/ButtonDownload'));
/* istanbul ignore next */
const IconButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/IconButtonRedirect/IconButtonRedirect'));
/* istanbul ignore next */
const IconButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/IconButtonDownload/IconButtonDownload'));
/* istanbul ignore next */
const IconButtonDialog = lazy(() => import('lib/components/PageGrid/templates/IconButtonDialog/IconButtonDialog'));
/* istanbul ignore next */
const ButtonDialog = lazy(() => import('lib/components/PageGrid/templates/ButtonDialog/ButtonDialog'));

const components = {
  ButtonRedirect,
  ButtonDownload,
  ButtonDialog,
  IconButtonRedirect,
  IconButtonDownload,
  IconButtonDialog,
};

const TrendyListItem = ({
  src,
  title,
  subtitle,
  iconButton,
  infoText,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
  titleSize,
  subtitleSize,
}) => {
  const avatarStyles = useDynamicAvatarStyles({ size: 48, radius: 6 });
  const icontBtn = iconButton[0];

  return (
    <Column
      gap={2}
      className={storyblokClass}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      <Row mt={2} alignItems="center">
        <Item position="middle">
          <Avatar
            classes={avatarStyles}
            src={src}
          />
        </Item>
        <Info useStyles={useTrendInfoStyles} style={{ textAlign: 'left' }}>
          <InfoTitle style={{ fontSize: titleSize }}>{title}</InfoTitle>
          <InfoSubtitle style={{ fontSize: subtitleSize }}>{subtitle}</InfoSubtitle>
          <InfoCaption>
            {infoText}
          </InfoCaption>
        </Info>
        <Item position="right">
          {icontBtn && (
          <Suspense fallback={<></>}>
            {renderComponentsWithBridge(components, { ...icontBtn, size: 'small' })}
          </Suspense>
          )}
        </Item>
      </Row>
    </Column>
  );
};

export default TrendyListItem;

TrendyListItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleSize: PropTypes.string,
  subtitleSize: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  infoText: PropTypes.string,
  iconButton: PropTypes.arrayOf(PropTypes.shape()),
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

TrendyListItem.defaultProps = {
  iconButton: [],
  infoText: '',
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
  titleSize: '0.875rem',
  subtitleSize: '0.875rem',
};

/* eslint-disable max-len */
import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { useChatzInfoStyles } from '@mui-treasury/styles/info/chatz';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

/* istanbul ignore next */
const Icon = lazy(() => import('lib/components/PageGrid/atoms/Icon/Icon'));
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

const useStyles = makeStyles(() => ({
  text: {
    display: 'flex',
    alignItems: 'center',
    '& > svg': {
      fontSize: 18,
      color: '#888',
      marginRight: 4,
    },
  },
}));

const ChatzListItem = ({
  src,
  title,
  subtitle,
  iconButton,
  infoText,
  infoIcon,
  storyblokClass,
  imageSize,
  dataBlokC,
  dataBlokUid,
  body,
  titleSize,
  subtitleSize,
  bodySize,
}) => {
  const avatarStyles = useDynamicAvatarStyles({ size: +imageSize });
  const styles = useStyles();
  const icontBtn = iconButton[0];
  const iconInfo = infoIcon[0];

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
        <Info useStyles={useChatzInfoStyles} style={{ textAlign: 'left' }}>
          <InfoTitle style={{ fontSize: titleSize }}>{title}</InfoTitle>
          <InfoSubtitle style={{ fontSize: subtitleSize }}>{subtitle}</InfoSubtitle>
          <InfoTitle style={{ fontSize: bodySize }}>{body}</InfoTitle>
          <InfoCaption className={styles.text}>
            {iconInfo && (
              <Suspense fallback={<></>}>
                {renderComponentsWithBridge({ Icon }, { ...iconInfo, size: 'small' })}
              </Suspense>
            )}
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

export default ChatzListItem;

ChatzListItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  infoText: PropTypes.string,
  titleSize: PropTypes.string,
  body: PropTypes.string,
  bodySize: PropTypes.string,
  storyblokClass: PropTypes.string,
  dataBlokUid: PropTypes.string,
  dataBlokC: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  subtitleSize: PropTypes.string,
  iconButton: PropTypes.arrayOf(PropTypes.shape()),
  infoIcon: PropTypes.arrayOf(PropTypes.shape()),
  imageSize: PropTypes.number,
};

ChatzListItem.defaultProps = {
  body: '',
  iconButton: [],
  infoIcon: [],
  infoText: '',
  dataBlokC: '',
  imageSize: 75,
  storyblokClass: '',
  dataBlokUid: '',
  titleSize: '0.875rem',
  subtitleSize: '0.875rem',
  bodySize: '0.875rem',
};

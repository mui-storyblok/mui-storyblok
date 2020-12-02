import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { useGrowAvatarStyles } from '@mui-treasury/styles/avatar/grow';
import { useMusicInfoStyles } from '@mui-treasury/styles/info/music';
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
    textAlign: 'left',
    '& > svg': {
      fontSize: 18,
      color: '#888',
      marginRight: 4,
    },
  },
}));

const MusicListItem = ({
  src,
  title,
  subtitle,
  iconButton,
  infoText,
  infoIcon,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => {
  const avatarStyles = useGrowAvatarStyles({
    src,
    ...{
      blur: '12px',
      radius: 16,
      size: 48,
      opacity: 0.6,
    },
  });
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
      <Row
        mt={2}
        className={storyblokClass}
        data-blok-c={dataBlokC}
        data-blok-uid={dataBlokUid}
      >
        <Item>
          <div className={avatarStyles.root}>
            <Avatar src={src} />
          </div>
        </Item>
        <Info useStyles={useMusicInfoStyles} style={{ textAlign: 'left' }} minWidth={0}>
          <InfoTitle>{title}</InfoTitle>
          <InfoSubtitle>{subtitle}</InfoSubtitle>
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


export default MusicListItem;

MusicListItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  infoText: PropTypes.string,
  iconButton: PropTypes.arrayOf(PropTypes.shape()),
  infoIcon: PropTypes.arrayOf(PropTypes.shape()),
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

MusicListItem.defaultProps = {
  iconButton: [],
  infoIcon: [],
  infoText: '',
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};

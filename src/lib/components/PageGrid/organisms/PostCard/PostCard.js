import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';

import { renderComponentsWithBridge } from 'lib/utils/customComponents';
import TextInfo from 'lib/components/PageGrid/atoms/TextInfo/TextInfo';
import CardMedia from 'lib/components/PageGrid/atoms/CardMedia/CardMedia';

const CardActions = lazy(() => import('lib/components/PageGrid/molecules/CardActions/CardActions'));
/* istanbul ignore next */
const Icon = lazy(() => import('lib/components/PageGrid/atoms/Icon/Icon'));

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    border: '2px solid #fff',
    margin: '-48px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}));

export const PostCard = React.memo(({
  image,
  overline,
  heading,
  body,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
  cardActions,
  icon,
  imgAlt,
  imgTitle,
  preStyledOptions,
}) => {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useFadedShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const actions = cardActions[0];
  const avatar = icon[0];

  return (
    <Card
      className={cx(cardStyles.root, shadowStyles.root, storyblokClass, preStyledOptions)}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      <CardMedia
        image={image}
        classes={mediaStyles}
        alt={imgAlt}
        title={imgTitle}
      />
      {
        avatar
          ? (
            <Suspense fallback={<></>}>
              <Avatar className={cardStyles.avatar}>
                {renderComponentsWithBridge({ Icon }, { ...avatar, style: cardStyles.avatar })}
              </Avatar>
            </Suspense>
          )
          : null
      }
      <CardContent
        className={cardStyles.content}
      >
        <TextInfo
          classes={textCardContentStyles}
          overline={overline}
          heading={heading}
          body={body}
        />
        {actions ? (
          <Suspense fallback={<></>}>
            {renderComponentsWithBridge({ CardActions }, actions)}
          </Suspense>
        ) : null}
      </CardContent>
    </Card>
  );
});

export default PostCard;

PostCard.propTypes = {
  /** actions to add in card */
  icon: PropTypes.arrayOf(PropTypes.shape()),
  /** actions to add in card */
  cardActions: PropTypes.arrayOf(PropTypes.shape()),
  /** overline heading  */
  heading: PropTypes.string.isRequired,
  /** overline body  */
  body: PropTypes.string.isRequired,
  /** alt text for the image if url cant display  */
  imgAlt: PropTypes.string.isRequired,
  /** the title for the image */
  imgTitle: PropTypes.string.isRequired,
  /**
   * url for image
   * Image to be displayed as a background image
   * */
  image: PropTypes.string.isRequired,
  /** Pre made css styling options  */
  preStyledOptions: PropTypes.string,
  /** overline text */
  overline: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};


PostCard.defaultProps = {
  icon: [],
  cardActions: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
  overline: '',
  preStyledOptions: '',
};

import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';
import TextInfo from 'lib/components/PageGrid/atoms/TextInfo/TextInfo';
import CardMedia from 'lib/components/PageGrid/atoms/CardMedia/CardMedia';

const CardActions = lazy(() => import('lib/components/PageGrid/molecules/CardActions/CardActions'));

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'initial',
    maxWidth: 304,
    backgroundColor: 'transparent',
  },
  title: {
    marginBottom: 0,
  },
  rateValue: {
    fontWeight: 'bold',
    marginTop: 2,
  },
  content: {
    position: 'relative',
    padding: 24,
    margin: '-24% 16px 0',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  favorite: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  locationIcon: {
    marginRight: 4,
    fontSize: 18,
  },
}));

export const ReviewCard = React.memo(({
  image,
  overline,
  heading,
  body,
  imgAlt,
  imgTitle,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
  cardActions,
}) => {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const shadowStyles = useFadedShadowStyles();
  const actions = cardActions[0];

  return (
    <Card
      className={cx(styles.root, storyblokClass)}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      <CardMedia
        image={image}
        style={{ ...styles.media, ...mediaStyles.root }}
        alt={imgAlt}
        title={imgTitle}
      />
      <CardContent
        className={cx(shadowStyles.root, styles.content)}
      >
        <TextInfo
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

export default ReviewCard;

ReviewCard.propTypes = {
  /** actions to add in card */
  cardActions: PropTypes.arrayOf(PropTypes.shape()),
  /** overline heading  */
  heading: PropTypes.string.isRequired,
  /** overline body  */
  body: PropTypes.string.isRequired,
  /** alt text for the image if url cant display */
  imgAlt: PropTypes.string.isRequired,
  /** the title for the image */
  imgTitle: PropTypes.string.isRequired,
  /**
   * url for image
   * Image to be displayed as a background image
   * */
  image: PropTypes.string.isRequired,
  /** overline text */
  overline: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};


ReviewCard.defaultProps = {
  cardActions: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
  overline: '',
};

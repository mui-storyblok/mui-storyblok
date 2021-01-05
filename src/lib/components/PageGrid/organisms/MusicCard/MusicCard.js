import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import TextInfo from 'lib/components/PageGrid/atoms/TextInfo/TextInfo';
import CardMedia from 'lib/components/PageGrid/atoms/CardMedia/CardMedia';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

const CardActions = lazy(() => import('lib/components/PageGrid/molecules/CardActions/CardActions'));

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));

export const MusicCard = React.memo(({
  image,
  overline,
  heading,
  body,
  imgAlt,
  imgTitle,
  cardActions,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
  preStyledOptions,
}) => {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  const actions = cardActions[0];

  return (
    <Card
      className={cx(styles.root, shadowStyles.root, storyblokClass, preStyledOptions)}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      { image
        && (
        <CardMedia
          image={image}
          style={{ ...styles.media, ...mediaStyles.root }}
          alt={imgAlt}
          title={imgTitle}
        />
        )
      }
      <CardContent>
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

export default MusicCard;

MusicCard.propTypes = {
  /** actions to add in card */
  cardActions: PropTypes.arrayOf(PropTypes.shape()),
  /** overline heading  */
  heading: PropTypes.string.isRequired,
  /** overline body  */
  body: PropTypes.string.isRequired,
  /** imgAlt text  */
  imgAlt: PropTypes.string,
  /** imgTitle text  */
  imgTitle: PropTypes.string,
  /**
   * url for image
   * Image to be displayed as a background image
   * */
  image: PropTypes.string,
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


MusicCard.defaultProps = {
  cardActions: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
  overline: '',
  preStyledOptions: '',
  image: '',
  imgAlt: '',
  imgTitle: '',
};

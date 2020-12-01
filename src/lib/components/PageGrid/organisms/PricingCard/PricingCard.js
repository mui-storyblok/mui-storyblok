import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider, makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfo from 'lib/components/PageGrid/atoms/TextInfo/TextInfo';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

const CardActions = lazy(() => import('lib/components/PageGrid/molecules/CardActions/CardActions'));

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    spacing: 10,
  },
  list: {
    padding: '20px',
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

export const PricingCard = React.memo(({
  title,
  subTitle,
  cardActions,
  overline,
  heading,
  body,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const classes = useStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const actions = cardActions[0];

  return (
    <Card
      className={cx(classes.root, storyblokClass)}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      <CardHeader title={title} className={classes.header} />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="h4" align="center">
          {subTitle}
        </Typography>
        <TextInfo
          classes={textCardContentStyles}
          overline={overline}
          heading={heading}
          body={body}
        />
      </CardContent>
      <Divider variant="middle" />
      {actions ? (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridge({ CardActions }, {
            ...actions,
            style: {
              display: 'flex',
              justifyContent: 'space-around',
            },
          })}
        </Suspense>
      ) : null}
    </Card>
  );
});

export default PricingCard;

PricingCard.propTypes = {
  /** overline heading  */
  title: PropTypes.string.isRequired,
  /** overline body  */
  subTitle: PropTypes.string.isRequired,
  /** actions to add in card */
  cardActions: PropTypes.arrayOf(PropTypes.shape()),
  /** overline text */
  overline: PropTypes.string.isRequired,
  /** overline heading  */
  heading: PropTypes.string.isRequired,
  /** overline body  */
  body: PropTypes.string.isRequired,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};


PricingCard.defaultProps = {
  cardActions: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};

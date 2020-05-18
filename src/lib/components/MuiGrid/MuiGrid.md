MuiGrid Spacing Prop:

```js noeditor
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>spacing</FormLabel>
              <RadioGroup
                name="spacing"
                aria-label="spacing"
                value={spacing.toString()}
                onChange={handleChange}
                row
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

<SpacingGrid />
```

MuiGrid Interactive Example:
Props -> direction, justify, and alignItems:

```js noeditor
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
    backgroundColor: '#AAAAAA',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function InteractiveGrid() {
  const [direction, setDirection] = React.useState('row');
  const [justify, setJustify] = React.useState('center');
  const [alignItems, setAlignItems ] = React.useState('center');
  const classes = useStyles();

  const handleDirection = (event) => {
    const { value } = event.target;
    setDirection(value);
  };

  const handleJustify = (event) => {
    const { value } = event.target;
    setJustify(value);
  };

  const handleAlign = (event) => {
    const { value } = event.target;
    setAlign(value);
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify={justify} direction={direction} alignItems={alignItems}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <span>
                <h1>{value}</h1>
                <Paper className={classes.paper} elevation={10} />
              </span>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>direction</FormLabel>
              <RadioGroup
                name="direction"
                aria-label="direction"
                onChange={handleDirection}
                row
              >
                {['row', 'row-reverse', 'column', 'column-reverse'].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={value}
                  />
                ))}
              </RadioGroup>
            </Grid>
            <Grid item>
              <FormLabel>justify</FormLabel>
              <RadioGroup
                name="justify"
                aria-label="justify"
                onChange={handleJustify}
                row
              >
                {['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={value}
                  />
                ))}
              </RadioGroup>
            </Grid>
            <Grid item>
              <FormLabel>alignItems</FormLabel>
              <RadioGroup
                name="alignItems"
                aria-label="alignItems"
                onChange={handleAlign}
                row
              >
                {['flex-start', 'center', 'flex-end', 'stretch', 'baseline'].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={value}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

<InteractiveGrid />

```
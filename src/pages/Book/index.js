import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 2,
    textAlign: 'center',
    backgroundColor: '#CCC',
    marginBottom: 20,
    width: '60%',
  },
  textColorPrimary: {
    color: '#6FBF8B',
  },
  textColorWhite: {
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
}));

function Book() {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Grid container spacing={3} style={{ marginBottom: 30 }}>
        <Grid container>
          <Grid item md={4}>
            <Paper className={classes.paper}>a</Paper>
          </Grid>
          <Grid item md={4}>
            <div className={classes.textColorWhite}>Titulo</div>
            <div className={classes.textColorWhite}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </Grid>
          <Grid item md={4}>
            a
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Book;

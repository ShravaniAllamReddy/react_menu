import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  center: {
    textAlign: 'center'
  }
}));

export default function Menu({ items }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {items.map((menuItem) => {

        const { id, title, img, desc, price } = menuItem;

        return (
          <Paper className={classes.paper}>
            <Grid container key={id} spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={img} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {title}
                    </Typography>

                    <Typography variant="body2" color="textSecondary">
                      {desc}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">{price}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        )
      })}

    </div>
  );
}

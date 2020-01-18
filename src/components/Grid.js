import React from 'react';
import "../App.css";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './temp.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid  container justify="center" spacing={spacing}>
          {[0, 1, 2, 4, 5].map(value => (
            <Grid key={value} item>
              <Paper  className={classes.paper}>
                  <img src="https://www.w3schools.com/css/img_5terre.jpg" className="title"/>              
              </Paper>
      
          
            </Grid>
          ))}
        </Grid>
     </Grid>
    </Grid>
  );
}
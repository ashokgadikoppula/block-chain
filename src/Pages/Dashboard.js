
import React from 'react';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import Blocks from '../Components/Blocks';
import LatestBlock from '../Components/LatestBlock';

const useStyles = makeStyles({
  paperHolder: {
    padding: '10px'
  }
});

const Dashboard = () => {
  const classes = useStyles()
  return (
    <Grid spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paperHolder}>
          <h1>Latest Block</h1>
          <LatestBlock />
        </Paper>
      </Grid>
      <Grid item xs={12}>
      <Paper className={classes.paperHolder}>
        <h1>Blocks List</h1>
        <Blocks />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;